import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import EnergyRays from "./EnergyRays";
import EnergyTrails from "./EnergyTrails";
import IntroCameraAnimation from "./IntroCameraAnimation";
import TironiLogo3D from "./TironiLogo3D";
import {
  ACTS,
  BACKGROUND_COLOR,
  CAMERA_PATH,
  FOV_START,
  INTRO_TOTAL_MS,
  WASH_START_MS,
  easeOut,
  phase,
} from "./introTimeline";

/**
 * Relógio único da abertura. Registrado antes de todos os outros
 * componentes, então roda primeiro a cada frame e todos leem o mesmo `ms`.
 *
 * A contagem só começa quando a logo está de fato carregada — sem isso, um
 * GLB lento consumiria a ignição antes de haver o que revelar.
 */
function IntroClock({ timeRef, readyRef, onFinish, onWashStart }) {
  const startRef = useRef(0);
  const firedRef = useRef(false);
  const washedRef = useRef(false);
  const startedRef = useRef(false);

  useFrame(({ clock }) => {
    const now = clock.getElapsedTime();
    // Espera a logo pintar o primeiro frame; depois disso o relógio nunca
    // volta atrás (o remount duplo do StrictMode reiniciaria a abertura).
    if (!startedRef.current && !readyRef.current) {
      startRef.current = now;
      timeRef.current.ms = 0;
      return;
    }
    if (!startedRef.current) {
      startedRef.current = true;
    }
    timeRef.current.ms = (now - startRef.current) * 1000;
    // O wash DOM é disparado pelo relógio real da cena, nunca por um timer
    // paralelo: assim ele nunca chega antes ou depois do rush.
    if (!washedRef.current && timeRef.current.ms >= WASH_START_MS) {
      washedRef.current = true;
      onWashStart?.();
    }
    if (!firedRef.current && timeRef.current.ms >= INTRO_TOTAL_MS) {
      firedRef.current = true;
      onFinish?.();
    }
  });

  return null;
}

/**
 * Iluminação cinematográfica (§40): key branco-azulada, rim ciano e um accent
 * laranja discreto. Sem shadow map e sem HDRI — a profundidade vem do
 * movimento da luz em relação à câmera.
 */
function IntroLighting({ timeRef }) {
  const camera = useThree((state) => state.camera);
  const keyRef = useRef(null);
  const rimRef = useRef(null);
  const accentRef = useRef(null);
  const ambientRef = useRef(null);
  const forward = useMemo(() => new THREE.Vector3(), []);
  const side = useMemo(() => new THREE.Vector3(), []);
  const up = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  useFrame(() => {
    const ms = timeRef.current.ms;

    /**
     * ATO 1 — as luzes sobem só depois da ignição, então no primeiro instante
     * o usuário enxerga apenas a cruz branca no escuro.
     */
    const wake = easeOut(phase(ms, ACTS.IGNITION_END * 0.45, ACTS.REVEAL_END));
    const lock = easeOut(phase(ms, ACTS.ORBIT_END, ACTS.LOCK_END));

    // Base ortonormal ligada à câmera: garante que o rim apareça nas bordas
    // em ângulos rasantes e desapareça de frente, acompanhando a órbita.
    forward.copy(camera.position).normalize();
    side.crossVectors(up, forward).normalize();

    if (ambientRef.current) ambientRef.current.intensity = 0.16 + wake * 0.16;

    if (keyRef.current) {
      keyRef.current.intensity = wake * (2.6 + lock * 0.5);
      keyRef.current.position
        .copy(forward)
        .multiplyScalar(3.2)
        .addScaledVector(side, 2.6)
        .addScaledVector(up, 2.4);
    }

    if (rimRef.current) {
      rimRef.current.intensity = wake * (10 + lock * 6);
      rimRef.current.position
        .copy(forward)
        .multiplyScalar(-2.4)
        .addScaledVector(side, -2.8)
        .addScaledVector(up, 1.2);
    }

    if (accentRef.current) {
      // Laranja entra e sai ao longo da volta: reflexo quente, nunca metade
      // da logo alaranjada.
      const swing = 0.5 + 0.5 * Math.sin(ms / 760);
      accentRef.current.intensity = wake * (1.6 + 3.4 * swing);
      accentRef.current.position
        .copy(side)
        .multiplyScalar(3.4)
        .addScaledVector(up, -1.8)
        .addScaledVector(forward, 1.2);
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0} color="#9FC6F0" />
      <directionalLight ref={keyRef} intensity={0} color="#DCEBFF" />
      <pointLight ref={rimRef} intensity={0} color="#33D6FF" distance={16} decay={1.6} />
      <pointLight ref={accentRef} intensity={0} color="#FF7A1A" distance={14} decay={1.8} />
    </>
  );
}

export default function IntroScene3D({ profile = "desktop", onFinish, onError, onWashStart }) {
  const timeRef = useRef({ ms: 0 });
  const readyRef = useRef(false);
  const logoRootRef = useRef(null);

  useEffect(() => {
    return () => {
      readyRef.current = false;
    };
  }, []);

  const isCompact = profile !== "desktop";

  return (
    <Canvas
      className="tt2-intro3d-canvas"
      dpr={isCompact ? [1, 1.25] : [1, 1.5]}
      frameloop="always"
      camera={{
        position: CAMERA_PATH[0],
        fov: FOV_START,
        near: 0.1,
        far: 60,
      }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(new THREE.Color(BACKGROUND_COLOR), 1);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.15;
        scene.background = new THREE.Color(BACKGROUND_COLOR);

        // Perder o contexto WebGL no meio da abertura não pode travar o site.
        gl.domElement.addEventListener(
          "webglcontextlost",
          (event) => {
            event.preventDefault();
            onError?.(new Error("webglcontextlost"));
          },
          { once: true },
        );
      }}
    >
      <IntroClock
        timeRef={timeRef}
        readyRef={readyRef}
        onFinish={onFinish}
        onWashStart={onWashStart}
      />
      <IntroLighting timeRef={timeRef} />
      <IntroCameraAnimation timeRef={timeRef} profile={profile} />
      <EnergyTrails timeRef={timeRef} profile={profile} />
      <EnergyRays timeRef={timeRef} profile={profile} />
      <Suspense fallback={null}>
        <TironiLogo3D timeRef={timeRef} logoRootRef={logoRootRef} readyRef={readyRef} />
      </Suspense>
    </Canvas>
  );
}
