import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ACTS, easeInRush, easeOut, clamp01, phase } from "./introTimeline";

export const LOGO_URL = "/brand/tironi-symbol-3d.glb";

/** A logo é normalizada para ocupar esta medida na sua maior dimensão. */
const TARGET_SIZE = 2;

/**
 * A cruz é VAZADA: o GLB traz um rasgo em cruz que atravessa a placa de lado
 * a lado. Nada é colocado dentro dele — o que se vê pela cruz é o fundo da
 * cena e os relâmpagos que passam atrás da marca.
 */
export default function TironiLogo3D({ timeRef, logoRootRef, readyRef }) {
  const gltf = useLoader(GLTFLoader, LOGO_URL);
  const animatedRef = useRef(null);

  /**
   * Normalização em uma única transformação raiz: mede o bounding box real,
   * centra na origem e escala para TARGET_SIZE.
   *
   * Orientação: verificada no asset, não presumida. O GLB já é Y-up com a
   * face do emblema em +Z, que é exatamente a convenção do three.js — por
   * isso nenhuma rotação é aplicada.
   */
  const { scene, normalizedScale, normalizedOffset } = useMemo(() => {
    const source = gltf.scene;
    const box = new THREE.Box3().setFromObject(source);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const s = TARGET_SIZE / maxDim;

    return {
      scene: source,
      normalizedScale: s,
      normalizedOffset: [-center.x * s, -center.y * s, -center.z * s],
    };
  }, [gltf]);

  /**
   * Materiais do GLB preservados: base color, normal map e metallic-roughness
   * continuam sendo os do asset. Só refinamos o emissivo, que a cena usa para
   * a ignição e para o lado escuro não cair em preto puro (não há HDRI).
   */
  useEffect(() => {
    const touched = [];
    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if (!material.isMeshStandardMaterial) return;
        material.emissive = new THREE.Color("#0A2E52");
        material.emissiveIntensity = 0.35;
        material.envMapIntensity = 1;
        material.needsUpdate = true;
        touched.push(material);
      });
    });
    return () => {
      touched.forEach((material) => {
        material.emissiveIntensity = 0;
      });
    };
  }, [scene]);

  /**
   * A abertura roda uma vez por sessão e nada mais no site consome este GLB,
   * então liberamos GPU e cache ao desmontar.
   */
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (!child.isMesh) return;
        child.geometry?.dispose?.();
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
          if (!material) return;
          ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "aoMap"].forEach((slot) => {
            material[slot]?.dispose?.();
          });
          material.dispose?.();
        });
      });
      useLoader.clear(GLTFLoader, LOGO_URL);
    };
  }, [scene]);

  useFrame(() => {
    // A flag de "pronta" é ligada no primeiro frame em que este componente
    // realmente entra no laço de render — e não num useEffect. O efeito
    // dispara assim que o React comita, enquanto o GLTF ainda está sendo
    // processado (parse da malha + decode das três texturas): a timeline
    // arrancava antes de existir marca na tela.
    if (readyRef && !readyRef.current) readyRef.current = true;

    // Lista montada no primeiro frame (e não num efeito): mantém a mutação
    // por frame separada do ciclo de efeitos.
    if (animatedRef.current === null) {
      const found = [];
      scene.traverse((child) => {
        if (!child.isMesh || !child.material) return;
        const list = Array.isArray(child.material) ? child.material : [child.material];
        list.forEach((material) => {
          if (material.isMeshStandardMaterial) found.push(material);
        });
      });
      animatedRef.current = found;
    }

    const ms = timeRef.current.ms;
    const root = logoRootRef.current;

    /**
     * ATO 1 — sem núcleo branco, quem carrega a ignição é o próprio corpo do
     * emblema: o emissivo azul sobe antes das luzes, revelando a silhueta e,
     * por dentro dela, o vazio da cruz.
     */
    const lock = easeOut(phase(ms, ACTS.ORBIT_END, ACTS.LOCK_END));
    const rush = phase(ms, ACTS.PAUSE_END, ACTS.RUSH_END);
    const ignition = easeOut(phase(ms, 0, ACTS.IGNITION_END * 0.7));
    const emissive = 0.18 + ignition * 0.5 + lock * 0.35 + rush * rush * 0.7;
    for (const material of animatedRef.current) material.emissiveIntensity = emissive;

    if (!root) return;

    /**
     * RUSH — a marca avança contra a câmera e cresce. A escala e o avanço são
     * derivados do bounding box normalizado, não de números herdados.
     */
    const drive = easeInRush(rush);
    root.position.z = drive * 2.6;
    const rushScale = 1 + drive * 1.05;

    // ATO 1/2 — a logo nasce ligeiramente contraída e assenta no reveal.
    const settle = easeOut(phase(ms, 0, ACTS.REVEAL_END));
    const birthScale = 0.86 + 0.14 * settle;

    root.scale.setScalar(birthScale * rushScale);

    // Respiração muito discreta durante a órbita, some no lock.
    const alive = 1 - clamp01(phase(ms, ACTS.ORBIT_END, ACTS.LOCK_END));
    root.rotation.z = Math.sin(ms / 900) * 0.012 * alive;
  });

  return (
    <group ref={logoRootRef}>
      <primitive object={scene} scale={normalizedScale} position={normalizedOffset} />
    </group>
  );
}
