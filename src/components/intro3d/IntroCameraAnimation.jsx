import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import {
  ACTS,
  CAMERA_PATH,
  CAMERA_TARGET_DRIFT,
  FOV_ORBIT,
  FOV_START,
  easeInRush,
  easeInOut,
  easeOut,
  phase,
} from "./introTimeline";

/**
 * Trecho da spline percorrido em cada ato. A câmera quase não anda na
 * ignição, recua no reveal, cumpre a volta de ~360° na órbita e desacelera
 * até a frente no energy lock.
 */
const U_IGNITION_END = 0.02;
const U_REVEAL_END = 0.14;
const U_ORBIT_END = 0.93;

/**
 * Perfis responsivos (§42): em telas altas e estreitas a câmera recua um
 * pouco e o FOV abre, para o emblema caber sem ser cortado nem virar um
 * ponto distante. O asset e a trajetória são os mesmos — só o enquadramento
 * muda.
 */
const PROFILE_FRAMING = {
  desktop: { path: 1, fov: 1 },
  compact: { path: 1.08, fov: 1.14 },
  portrait: { path: 1.18, fov: 1.28 },
};

export default function IntroCameraAnimation({ timeRef, profile = "desktop" }) {
  const framing = PROFILE_FRAMING[profile] ?? PROFILE_FRAMING.desktop;
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const position = useRef(new THREE.Vector3());

  /**
   * Trajetória em spline 3D (§24): nada de órbita horizontal simples. Os
   * pontos estão em espaço normalizado, então continuam válidos qualquer que
   * seja a escala com que o GLB foi exportado.
   */
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        CAMERA_PATH.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
        false,
        "catmullrom",
        0.5,
      ),
    [],
  );

  useFrame(({ camera }) => {
    const ms = timeRef.current.ms;

    let u;
    if (ms <= ACTS.IGNITION_END) {
      u = U_IGNITION_END * easeInOut(phase(ms, 0, ACTS.IGNITION_END));
    } else if (ms <= ACTS.REVEAL_END) {
      const t = easeOut(phase(ms, ACTS.IGNITION_END, ACTS.REVEAL_END));
      u = U_IGNITION_END + (U_REVEAL_END - U_IGNITION_END) * t;
    } else if (ms <= ACTS.ORBIT_END) {
      const t = easeInOut(phase(ms, ACTS.REVEAL_END, ACTS.ORBIT_END));
      u = U_REVEAL_END + (U_ORBIT_END - U_REVEAL_END) * t;
    } else {
      // Energy lock: chega à frente perdendo velocidade.
      const t = easeOut(phase(ms, ACTS.ORBIT_END, ACTS.LOCK_END));
      u = U_ORBIT_END + (1 - U_ORBIT_END) * t;
    }

    curve.getPointAt(Math.min(u, 1), position.current);
    position.current.multiplyScalar(framing.path);

    /**
     * RUSH — a câmera também avança um pouco. O grosso do impacto vem da
     * marca vindo para cima do observador (ver TironiLogo3D), o dolly só
     * reforça. Mantemos folga suficiente para não cruzar o near plane.
     */
    const rush = easeInRush(phase(ms, ACTS.PAUSE_END, ACTS.RUSH_END));
    position.current.z -= rush * 0.5;

    camera.position.copy(position.current);

    // Alvo com deriva discreta: dá vida sem tirar a logo do protagonismo.
    const drift = Math.min(1, ms / ACTS.ORBIT_END);
    target.current.set(
      Math.sin(ms / 1500) * CAMERA_TARGET_DRIFT * drift,
      Math.cos(ms / 1900) * CAMERA_TARGET_DRIFT * 0.7 * drift,
      0,
    );
    camera.lookAt(target.current);

    /**
     * FOV cinematográfico: fecha durante o recuo (para a logo não encolher
     * junto com o afastamento) e abre no impacto para acentuar a velocidade.
     */
    const close = easeOut(phase(ms, 0, ACTS.REVEAL_END));
    const fov = (FOV_START + (FOV_ORBIT - FOV_START) * close + rush * 7) * framing.fov;
    if (Math.abs(camera.fov - fov) > 0.01) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
