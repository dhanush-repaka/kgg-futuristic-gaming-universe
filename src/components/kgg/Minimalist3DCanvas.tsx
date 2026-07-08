"use client";

/**
 * Calm ambient page background. v1 had a rotating 3D HUD grid + wireframe
 * ring here — dropped entirely for the Premium Tech-Luxury direction, which
 * calls for stillness and warmth rather than a cyberpunk motif. Keeping the
 * component name so callers (KGGLandingPage, booking page) didn't need
 * touching.
 */
export default function Minimalist3DCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-base overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_15%_0%,rgba(201,124,61,0.06),transparent_60%),radial-gradient(50%_40%_at_90%_10%,rgba(201,124,61,0.04),transparent_60%)]" />
    </div>
  );
}
