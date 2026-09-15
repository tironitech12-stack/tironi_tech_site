import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../../styles/logo-loop.css';

const MIN_COPIES = 3;
const SMOOTHING_SECONDS = 0.25;

function LogoLoop({
  logos,
  speed = 70,
  hoverSpeed = 18,
  logoHeight = 58,
  gap = 28,
  fadeOut = true,
  fadeOutColor = '#071522',
  ariaLabel = 'Logos de clientes',
  className = '',
}) {
  const containerRef = useRef(null);
  const sequenceRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const frameRef = useRef(null);
  const previousTimeRef = useRef(null);
  const [sequenceWidth, setSequenceWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(MIN_COPIES);
  const [hovered, setHovered] = useState(false);

  const measure = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const width = sequenceRef.current?.getBoundingClientRect().width ?? 0;
    if (!width) return;
    const roundedWidth = Math.ceil(width);
    setSequenceWidth(roundedWidth);
    setCopyCount(Math.max(MIN_COPIES, Math.ceil(containerWidth / roundedWidth) + 2));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;
    if (!container || !sequence) return undefined;

    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    observer?.observe(container);
    observer?.observe(sequence);

    const images = [...sequence.querySelectorAll('img')];
    images.forEach((image) => {
      image.addEventListener('load', measure);
      image.addEventListener('error', measure);
    });
    const initialMeasureFrame = requestAnimationFrame(measure);

    return () => {
      cancelAnimationFrame(initialMeasureFrame);
      observer?.disconnect();
      images.forEach((image) => {
        image.removeEventListener('load', measure);
        image.removeEventListener('error', measure);
      });
    };
  }, [logos, measure]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !sequenceWidth) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return undefined;
    }

    offsetRef.current %= sequenceWidth;
    const animate = (timestamp) => {
      if (previousTimeRef.current === null) previousTimeRef.current = timestamp;
      const delta = Math.min(0.05, Math.max(0, timestamp - previousTimeRef.current) / 1000);
      previousTimeRef.current = timestamp;
      const target = hovered ? hoverSpeed : speed;
      const easing = 1 - Math.exp(-delta / SMOOTHING_SECONDS);
      velocityRef.current += (target - velocityRef.current) * easing;
      offsetRef.current = (offsetRef.current + velocityRef.current * delta) % sequenceWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      previousTimeRef.current = null;
    };
  }, [hoverSpeed, hovered, sequenceWidth, speed]);

  const cssVariables = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logo-height': `${logoHeight}px`,
    '--logoloop-fade-color': fadeOutColor,
  }), [fadeOutColor, gap, logoHeight]);

  const lists = useMemo(() => Array.from({ length: copyCount }, (_, copyIndex) => (
    <ul
      className="logoloop__list"
      key={`client-loop-${copyIndex}`}
      aria-hidden={copyIndex > 0 ? 'true' : undefined}
      ref={copyIndex === 0 ? sequenceRef : undefined}
    >
      {logos.map((logo, logoIndex) => (
        <li className={`logoloop__item ${logo.className || ''}`} key={`${copyIndex}-${logo.name}-${logoIndex}`}>
          <span className="logoloop__logo-wrap">
            <img src={logo.logo} alt={copyIndex === 0 ? logo.name : ''} loading="lazy" decoding="async" draggable="false" />
          </span>
        </li>
      ))}
    </ul>
  )), [copyCount, logos]);

  return (
    <div
      ref={containerRef}
      className={`logoloop ${fadeOut ? 'logoloop--fade' : ''} ${className}`.trim()}
      style={cssVariables}
      role="region"
      aria-label={ariaLabel}
    >
      <div
        className="logoloop__track"
        ref={trackRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {lists}
      </div>
    </div>
  );
}

export default memo(LogoLoop);
