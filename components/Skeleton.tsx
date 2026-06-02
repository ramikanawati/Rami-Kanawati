import clsx from "clsx";

export function SkeletonLine({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("h-4 bg-white/5 rounded animate-pulse", className)} />
  );
}

export function SkeletonCard() {
  return (
    <div className="panel p-6 space-y-4">
      <div className="flex items-start justify-between">
        <SkeletonLine className="w-16 h-8" />
        <SkeletonLine className="w-20 h-6" />
      </div>
      <SkeletonLine className="w-32" />
      <SkeletonLine className="w-full h-20" />
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <SkeletonLine key={i} className="h-10" />
        ))}
      </div>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <SkeletonLine key={i} className="h-6 w-16" />
        ))}
      </div>
    </div>
  );
}

export function SkeletonProjectGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <SkeletonLine className="w-32 h-3" />
        <SkeletonLine className="w-64 h-8" />
        <SkeletonLine className="w-96 h-4" />
      </div>
      <SkeletonProjectGrid />
    </div>
  );
}
