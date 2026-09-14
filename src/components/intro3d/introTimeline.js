/**
 * Linha do tempo e trajetória da abertura cinematográfica TironiTech.
 *
 * Este módulo é a única fonte de verdade dos tempos: o overlay DOM
 * (framer-motion) e a cena 3D (R3F) leem daqui, para que o wash e a saída
 * nunca fiquem fora de sincronia com a câmera.
 *
 * Todos os tempos em milissegundos, medidos do início da cena.
 */

export const INTRO_TOTAL_MS = 4800;

/** Trava de segurança: acima disso a abertura termina, com ou sem 3D pronto. */
export const INTRO_HARD_TIMEOUT_MS = 6000;

/** Abertura curta usada em reduced motion e nos fallbacks DOM. */
export const INTRO_FALLBACK_MS = 1200;

export const ACTS = {
  /** Escuro. Só a cruz branca acende. */
  IGNITION_END: 400,
  /** Câmera recua e a logo inteira se revela. */
  REVEAL_END: 850,
  /** Volta cinematográfica de ~360°. */
  ORBIT_END: 3150,
  /** Câmera volta à frente, movimento desacelera, energia converge. */
  LOCK_END: 3490,
  /** Micro pausa de estabilidade antes do impacto. */
  PAUSE_END: 3570,
  /** A marca avança contra a câmera. */
  RUSH_END: 4300,
};

/** Momento em que o wash DOM começa a cobrir o Canvas. */
export const WASH_START_MS = ACTS.RUSH_END - 55;

/**
 * Pontos de controle da spline da câmera, em espaço normalizado (a logo
 * ocupa 2 unidades na maior dimensão e está centrada na origem).
 *
 * A trajetória sobe, afasta, passa pela traseira, desce e retorna pela
 * esquerda — cobrindo ~360° em torno da marca.
 */
export const CAMERA_PATH = [
  [0.0, 0.05, 3.4], // P0 frente, próximo
  [0.2, 0.2, 4.4], // P1 recuo frontal
  [3.4, 1.3, 2.2], // P2 alto à direita
  [4.6, 0.5, -1.8], // P3 direita, afastado
  [0.4, -1.15, -5.1], // P4 traseira, por baixo
  [-3.8, -0.45, -2.7], // P5 traseira à esquerda
  [-3.1, 1.0, 2.1], // P6 esquerda, alto
  [0.0, 0.1, 4.0], // P7 retorno frontal
];

/** Alvo da câmera: deriva de leve para dar vida, sem tirar a logo do quadro. */
export const CAMERA_TARGET_DRIFT = 0.16;

export const FOV_START = 46;
export const FOV_ORBIT = 40;

/** Cores da energia: azul dominante, laranja como accent (§20). */
export const TRAIL_COLORS = {
  blue: ["#00AEEF", "#168DFF", "#52C7FF", "#2FB6FF"],
  orange: ["#FF7100", "#FF8C21"],
};

export const BACKGROUND_COLOR = "#030812";

/** Branco frio do núcleo da cruz. */
export const CROSS_WHITE = "#F7FCFF";

/** Tinta azulada muito discreta do vidro da cruz (emissivo e atenuação). */
export const CROSS_TINT = "#CFE9FF";

/** Cores dos raios: mesma família dos trails, azul dominante (§10). */
export const RAY_COLORS = {
  blue: ["#00AEEF", "#1BA7FF", "#52C7FF"],
  orange: ["#FF7100", "#FFA13B"],
};

export const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Progresso 0→1 dentro de uma janela [from, to] da linha do tempo. */
export function phase(ms, from, to) {
  return clamp01((ms - from) / (to - from));
}

/** Suavização padrão da abertura (equivalente ao ease-in-out cúbico). */
export function easeInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Aceleração do rush. Exponencial puro comprime todo o deslocamento nos
 * últimos ~20% do ato — o impacto acabava acontecendo já por trás do wash.
 * Potência 2.6 mantém a arrancada agressiva, mas com curso visível.
 */
export function easeInRush(t) {
  return Math.pow(clamp01(t), 2.6);
}
