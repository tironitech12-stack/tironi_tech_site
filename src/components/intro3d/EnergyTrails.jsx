import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  ACTS,
  TRAIL_COLORS,
  clamp01,
  easeInRush,
  easeOut,
  phase,
} from "./introTimeline";

const TUBULAR_SEGMENTS = 96;
const RADIAL_SEGMENTS = 6;
const INDICES_PER_SEGMENT = RADIAL_SEGMENTS * 6;

/**
 * Cada trail é um arco em profundidade real — passa pela frente, pelas
 * laterais e por trás da marca — para gerar parallax durante a órbita.
 * Nenhum caminho entra na caixa da logo (|x|<1, |y|<0.95, |z|<0.16), o que
 * evita a energia atravessar fisicamente a malha.
 */
const TRAILS = [
  {
    tone: "blue",
    color: TRAIL_COLORS.blue[0],
    radius: 0.042,
    activateAt: 0,
    speed: 0.55,
    points: [
      [-3.2, -1.8, 1.2],
      [-1.6, -0.6, 1.9],
      [0.2, 0.5, 1.6],
      [1.8, 1.4, 0.6],
      [3.0, 2.0, -0.8],
    ],
  },
  {
    tone: "blue",
    color: TRAIL_COLORS.blue[1],
    radius: 0.036,
    activateAt: ACTS.IGNITION_END,
    speed: 0.42,
    points: [
      [3.0, 1.6, -1.6],
      [1.4, 0.4, -2.0],
      [-0.4, -0.6, -1.7],
      [-2.0, -1.5, -0.9],
      [-3.2, -2.1, 0.4],
    ],
  },
  {
    tone: "orange",
    color: TRAIL_COLORS.orange[0],
    radius: 0.03,
    activateAt: 450,
    speed: 0.62,
    points: [
      [3.4, -0.8, 0.8],
      [2.2, 0.2, 1.6],
      [1.5, 1.2, 1.2],
      [1.9, 2.0, -0.2],
    ],
  },
  {
    tone: "blue",
    color: TRAIL_COLORS.blue[2],
    radius: 0.032,
    activateAt: 900,
    speed: 0.5,
    points: [
      [-2.8, 2.2, -1.4],
      [-1.0, 1.9, 0.4],
      [0.8, 1.7, 1.5],
      [2.4, 1.2, 0.6],
      [3.2, 0.4, -1.2],
    ],
  },
  {
    tone: "blue",
    color: TRAIL_COLORS.blue[3],
    radius: 0.038,
    activateAt: 1100,
    speed: 0.46,
    points: [
      [2.6, -2.0, 1.4],
      [0.8, -1.7, 0.6],
      [-0.9, -1.6, -0.7],
      [-2.3, -1.2, -1.6],
      [-3.0, -0.2, -2.2],
    ],
  },
  {
    tone: "orange",
    color: TRAIL_COLORS.orange[1],
    radius: 0.027,
    activateAt: 1300,
    speed: 0.68,
    points: [
      [-3.2, 0.6, -1.0],
      [-2.0, -0.4, -1.8],
      [-1.4, -1.4, -1.2],
      [-1.8, -2.2, 0.2],
    ],
  },
];

/** Quantos segmentos do tubo ficam acesos atrás da cabeça do trail. */
const WINDOW_SEGMENTS = 34;

export default function EnergyTrails({ timeRef, profile }) {
  const groupRef = useRef(null);
  const itemsRef = useRef([]);

  const trails = useMemo(() => {
    // Perfis compactos levam menos energia simultânea na tela.
    // Retrato fica com 3 azuis + 1 laranja em vez de 4 + 2.
    const list = profile === "portrait" ? TRAILS.filter((_, i) => i !== 4 && i !== 5) : TRAILS;
    return list.map((trail) => {
      const curve = new THREE.CatmullRomCurve3(
        trail.points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
        false,
        "catmullrom",
        0.5,
      );
      const geometry = new THREE.TubeGeometry(
        curve,
        TUBULAR_SEGMENTS,
        trail.radius,
        RADIAL_SEGMENTS,
        false,
      );
      return { ...trail, geometry };
    });
  }, [profile]);

  useEffect(() => {
    return () => trails.forEach((trail) => trail.geometry.dispose());
  }, [trails]);

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (!group) return;
    const ms = timeRef.current.ms;
    const t = clock.getElapsedTime();

    const lock = phase(ms, ACTS.ORBIT_END, ACTS.LOCK_END);
    const rush = phase(ms, ACTS.PAUSE_END, ACTS.RUSH_END);
    const drive = easeInRush(rush);

    /**
     * ENERGY LOCK — a energia converge visualmente para a marca; no RUSH ela
     * estica e atravessa as bordas do quadro junto com a logo.
     */
    const converge = 1 - easeOut(lock) * 0.3;
    group.scale.set(converge, converge, converge + drive * 5.5);
    group.rotation.z = Math.sin(t * 0.25) * 0.05;

    trails.forEach((trail, index) => {
      const item = itemsRef.current[index];
      if (!item) return;
      const { mesh, material } = item;

      // Entrada escalonada: 1 azul no ato 1, +1 azul e 1 laranja no ato 2,
      // conjunto completo durante a órbita (§33).
      const born = clamp01((ms - trail.activateAt) / 420);
      if (born <= 0) {
        mesh.visible = false;
        return;
      }
      mesh.visible = true;

      const base = trail.tone === "orange" ? 0.5 : 0.78;
      material.opacity = born * base * (0.65 + 0.35 * easeOut(lock)) * (1 - rush * rush * 0.85);

      // Cabeça de energia percorrendo o tubo.
      const loop = (t * trail.speed + index * 0.37) % 1;
      const head = loop * (TUBULAR_SEGMENTS + WINDOW_SEGMENTS) - WINDOW_SEGMENTS;
      const start = Math.max(0, Math.floor(head));
      const end = Math.min(TUBULAR_SEGMENTS, Math.floor(head) + WINDOW_SEGMENTS);
      mesh.geometry.setDrawRange(
        start * INDICES_PER_SEGMENT,
        Math.max(0, end - start) * INDICES_PER_SEGMENT,
      );
    });
  });

  return (
    <group ref={groupRef}>
      {trails.map((trail, index) => (
        <mesh
          key={`${trail.tone}-${index}`}
          geometry={trail.geometry}
          ref={(mesh) => {
            if (mesh) itemsRef.current[index] = { mesh, material: mesh.material };
          }}
        >
          <meshBasicMaterial
            color={trail.color}
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
