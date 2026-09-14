import { Component } from "react";

/**
 * Isola qualquer falha da cena 3D (WebGL, GLTFLoader, shader, GLB corrompido)
 * para que ela nunca derrube a aplicação. Ao capturar, avisa o overlay, que
 * cai para a abertura DOM e libera a Home.
 */
export default class Intro3DErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    if (import.meta.env.DEV) {
      console.warn("[intro3d] cena 3D falhou, usando fallback DOM:", error);
    }
    this.props.onError?.(error);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}
