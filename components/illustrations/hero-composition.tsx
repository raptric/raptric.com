import OrbitalCore from "./orbital-core";

// The hero's visual centerpiece: a glowing orbital core behind a glass
// product panel, with a small floating status chip for depth.
export default function HeroComposition({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <OrbitalCore className="absolute inset-0 h-full w-full" />

      <div className="relative flex h-full items-center justify-center px-4 py-10 sm:px-10">
        <div className="w-full max-w-sm rounded-[var(--radius-lg)] border border-mist-50/15 bg-mist-50/[0.06] p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <p className="label text-mist-50/50">Operating system</p>
            <span className="label inline-flex items-center gap-1.5 text-signal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
              Running
            </span>
          </div>

          <div className="mt-6 flex items-end gap-1.5">
            {[30, 52, 40, 70, 48, 62, 82, 58].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[2px] bg-gradient-to-t from-signal-600/70 to-signal-300"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2.5 border-t border-mist-50/10 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-mist-50/60">Automated volume</span>
              <span className="font-mono text-mist-50/90">Routed</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-mist-50/60">Specialist review</span>
              <span className="font-mono text-signal-300">Assigned</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-3 right-2 flex items-center gap-2 rounded-full border border-mist-50/15 bg-ink-900/90 px-4 py-2 shadow-xl backdrop-blur sm:right-6">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
          <span className="text-xs font-medium text-mist-50/80">System active</span>
        </div>
      </div>
    </div>
  );
}
