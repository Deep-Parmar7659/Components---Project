function Skeleton({ className }) {
  return (
    // animate-pulse - Tailwind animation that creates loading shimmer effect.
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  );
}

export default Skeleton;
