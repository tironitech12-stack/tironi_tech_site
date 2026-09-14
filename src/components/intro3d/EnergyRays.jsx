import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { ACTS, RAY_COLORS, clamp01, easeInRush, easeOut, phase } from "./introTimeline";

/**
 * Relâmpagos ramificados — complementares aos trails, não substitutos.
 *
 * Trails são curvas contínuas que vivem a cena inteira. Estes são DESCARGAS:
 * traçado quebrado com galhos curtos, que acendem em momentos específicos da
 * narrativa (ignição, energy lock e rush) e somem em seguida.
 *
 * A geometria de cada descarga é gerada uma única vez, na montagem, e depois
 * só troca de visibilidade e opacidade — nada de reconstruir malha por frame.
 */

/** PRNG determinístico: mesma abertura em toda sessão, sem surpresa visual. */
function makeRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/**
 * Deslocamento do ponto médio: subdivide o segmento repetidamente, empurrando
 * cada novo ponto para os lados. É o que produz o traçado quebrado do raio,
 * em vez de uma linha reta.
 */
function jaggedPath(from, to, random, roughness, passes) {
  let points = [from.clone(), to.clone()];
  let offset = from.distanceTo(to) * roughness;

  for (let pass = 0; pass < passes; pass++) {
    const next = [points[0]];
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      const mid = a.clone().lerp(b, 0.5);
      // Empurra perpendicularmente ao segmento, em direção aleatória.
      const dir = b.clone().sub(a).normalize();
      const side = new THREE.Vector3(dir.y, -dir.z, dir.x).cross(dir).normalize();
      const spin = new THREE.Vector3().crossVectors(dir, side).normalize();
      const angle = random() * Math.PI * 2;
      mid.addScaledVector(side, Math.cos(angle) * offset * (random() - 0.5) * 2);
      mid.addScaledVector(spin, Math.sin(angle) * offset * (random() - 0.5) * 2);
      next.push(mid, b);
    }
    points = next;
    offset *= 0.52;
  }
  return points;
}

function tubeFrom(points, radius) {
  const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.15);
  return new THREE.TubeGeometry(curve, Math.min(64, points.length * 2), radius, 4, false);
}

/**
 * Uma descarga = tronco quebrado + galhos curtos saindo dele, tudo fundido
 * numa geometria só para manter uma draw call por raio.
 */
function buildBolt(from, to, seed, radius) {
  const random = makeRandom(seed);
  const trunk = jaggedPath(from, to, random, 0.14, 5);
  const parts = [tubeFrom(trunk, radius)];

  const branchCount = 2 + Math.floor(random() * 2);
  for (let b = 0; b < branchCount; b++) {
    // Sai de algum ponto do meio do tronco e morre em pouco espaço.
    const index = Math.floor(2 + random() * (trunk.length - 6));
    const start = trunk[index];
    const ahead = trunk[Math.min(index + 3, trunk.length - 1)];
    const away = ahead.clone().sub(start);
    const end = start
      .clone()
      .addScaledVector(away, 0.9 + random() * 0.8)
      .add(
        new THREE.Vector3(
          (random() - 0.5) * 1.5,
          (random() - 0.5) * 1.5,
          (random() - 0.5) * 1.0,
        ),
      );
    parts.push(tubeFrom(jaggedPath(start, end, random, 0.2, 3), radius * 0.5));
  }

  const merged = mergeGeometries(parts, false);
  parts.forEach((part) => part.dispose());
  return merged;
}

/** Janelas em que cada descarga dispara: {at, dur, peak} em ms da timeline. */
const BOLTS = [
  {
    tone: "blue",
    color: RAY_COLORS.blue[0],
    seed: 1287,
    radius: 0.042,
    from: [-3.4, 2.6, 1.2],
    to: [-0.5, 0.4, 0.3],
    pulses: [
      { at: 40, dur: 220, peak: 0.9 },
      { at: 1500, dur: 300, peak: 0.3 },
      { at: ACTS.ORBIT_END, dur: 300, peak: 1 },
    ],
  },
  {
    tone: "blue",
    color: RAY_COLORS.blue[1],
    seed: 90210,
    radius: 0.036,
    from: [3.5, -2.4, 0.9],
    to: [0.6, -0.3, -0.2],
    pulses: [
      { at: 210, dur: 200, peak: 0.7 },
      { at: 2250, dur: 300, peak: 0.28 },
      { at: ACTS.ORBIT_END + 110, dur: 280, peak: 1 },
    ],
  },
  {
    tone: "blue",
    color: RAY_COLORS.blue[2],
    seed: 55531,
    radius: 0.038,
    from: [-2.9, -2.7, -1.6],
    to: [-0.4, -0.5, -0.3],
    pulses: [
      { at: 2800, dur: 320, peak: 0.3 },
      { at: ACTS.ORBIT_END + 60, dur: 300, peak: 0.95 },
    ],
  },
  {
    tone: "orange",
    color: RAY_COLORS.orange[0],
    seed: 7761,
    radius: 0.030,
    from: [3.1, 2.8, -1.3],
    to: [0.5, 0.6, -0.2],
    pulses: [
      { at: 320, dur: 190, peak: 0.42 },
      { at: ACTS.ORBIT_END + 175, dur: 260, peak: 0.72 },
    ],
  },
  {
    tone: "orange",
    color: RAY_COLORS.orange[1],
    seed: 33017,
    radius: 0.028,
    from: [-3.6, 0.9, 1.9],
    to: [-0.6, 0.2, 0.4],
    pulses: [{ at: ACTS.ORBIT_END + 215, dur: 240, peak: 0.6 }],
  },
];

/** Ataque quase instantâneo e queda rápida — descarga, não pisca-pisca. */
function strike(ms, pulse) {
  const p = (ms - pulse.at) / pulse.dur;
  if (p <= 0 || p >= 1) return 0;
  return Math.pow(1 - p, 2.2) * Math.min(1, p * 14) * pulse.peak;
}

export default function EnergyRays({ timeRef, profile }) {
  const itemsRef = useRef([]);

  // Retrato leva menos energia simultânea: 2 azuis + 1 laranja.
  const bolts = useMemo(
    () => (profile === "portrait" ? [BOLTS[0], BOLTS[1], BOLTS[3]] : BOLTS),
    [profile],
  );

  const geometries = useMemo(
    () =>
      bolts.map((bolt) =>
        buildBolt(
          new THREE.Vector3(...bolt.from),
          new THREE.Vector3(...bolt.to),
          bolt.seed,
          bolt.radius,
        ),
      ),
    [bolts],
  );

  useEffect(() => () => geometries.forEach((geometry) => geometry.dispose()), [geometries]);

  useFrame(() => {
    const ms = timeRef.current.ms;
    const lock = easeOut(phase(ms, ACTS.ORBIT_END, ACTS.LOCK_END));
    const rush = phase(ms, ACTS.PAUSE_END, ACTS.RUSH_END);
    const drive = easeInRush(rush);

    bolts.forEach((bolt, index) => {
      const item = itemsRef.current[index];
      if (!item) return;
      const { mesh, material } = item;

      let intensity = 0;
      for (const pulse of bolt.pulses) intensity += strike(ms, pulse);
      // No rush todas as descargas acendem juntas e esticam com a marca.
      intensity += drive * 0.8;
      intensity = clamp01(intensity);

      if (intensity <= 0.002) {
        mesh.visible = false;
        return;
      }
      mesh.visible = true;
      material.opacity = intensity * (bolt.tone === "orange" ? 0.7 : 1);

      // ENERGY LOCK — as descargas se fecham sobre a marca.
      const converge = 1 - lock * 0.18;
      mesh.scale.set(converge, converge, converge + drive * 3.2);
    });
  });

  return (
    <group>
      {bolts.map((bolt, index) => (
        <mesh
          key={`bolt-${bolt.tone}-${index}`}
          geometry={geometries[index]}
          visible={false}
          ref={(mesh) => {
            if (mesh) itemsRef.current[index] = { mesh, material: mesh.material };
          }}
        >
          <meshBasicMaterial
            color={bolt.color}
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
