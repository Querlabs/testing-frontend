import React from "react";

/**
 * Loader
 * Full-screen, center-aligned loader on a clean white theme.
 * Zero dependencies (no Tailwind needed) — styles are scoped via the `ldr-` prefix.
 *
 * Usage:
 *   <Loader text="Setting up your workspace..." />
 */
const styles = `
.ldr-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background:
    radial-gradient(60% 50% at 50% 42%, #ffffff 0%, #f7f8ff 70%, #f1f4ff 100%);
  font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
}

.ldr-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 24px;
  text-align: center;
}

.ldr-orb {
  position: relative;
  width: 120px;
  height: 120px;
}

/* soft ambient glow behind the orb */
.ldr-glow {
  position: absolute;
  inset: -28px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(34, 211, 238, 0.12) 45%, transparent 70%);
  filter: blur(14px);
  animation: ldr-glow 2.4s ease-in-out infinite;
}

/* outer ring */
.ldr-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(99, 102, 241, 0) 0%, #6366f1 55%, #22d3ee 100%);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  animation: ldr-spin 1.3s linear infinite;
}

/* bright head on the outer ring */
.ldr-ring::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 14px 3px rgba(34, 211, 238, 0.65);
}

/* inner ring, counter-rotating */
.ldr-ring-inner {
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: conic-gradient(from 180deg, rgba(236, 72, 153, 0) 0%, #a855f7 60%, #ec4899 100%);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
  animation: ldr-spin 2s linear infinite reverse;
  opacity: 0.9;
}

/* breathing core */
.ldr-core {
  position: absolute;
  inset: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
  animation: ldr-breathe 1.8s ease-in-out infinite;
}

.ldr-text {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.02em;
  max-width: 320px;
  line-height: 1.5;
  background: linear-gradient(100deg, #64748b 35%, #4f46e5 50%, #64748b 65%);
  background-size: 250% 100%;
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #64748b;
  animation: ldr-shimmer 2.2s linear infinite;
}

@keyframes ldr-spin { to { transform: rotate(360deg); } }

@keyframes ldr-breathe {
  0%, 100% { transform: scale(0.82); }
  50%      { transform: scale(1.08); }
}

@keyframes ldr-glow {
  0%, 100% { opacity: 0.55; transform: scale(0.92); }
  50%      { opacity: 1;    transform: scale(1.05); }
}

@keyframes ldr-shimmer {
  0%   { background-position: 125% 0; }
  100% { background-position: -125% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ldr-ring, .ldr-ring-inner, .ldr-glow, .ldr-core { animation-duration: 6s; }
  .ldr-text { animation: none; -webkit-text-fill-color: #64748b; background: none; }
}
`;

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="ldr-overlay" role="status" aria-live="polite" aria-label={text}>
      <style>{styles}</style>
      <div className="ldr-wrap">
        <div className="ldr-orb" aria-hidden="true">
          <div className="ldr-glow" />
          <div className="ldr-ring" />
          <div className="ldr-ring-inner" />
          <div className="ldr-core" />
        </div>
        <p className="ldr-text">{text}</p>
      </div>
    </div>
  );
}