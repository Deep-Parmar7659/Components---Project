import Skeleton from "./Skeleton";

function SkeletonDemo() {
  return (
    <div className="p-10 space-y-6">
      {/* Title Skeleton */}
      <Skeleton className="h-6 w-48" />

      {/* Paragraph Skeleton */}
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />

      {/* Card Skeleton */}
      <div className="border rounded-lg p-4 w-72 space-y-4">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export default SkeletonDemo;
