type SkeletonProps = {
  className?: string;
};

function Skeleton({
  className = "",
}: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded bg-gray-200 ${className}`}
    />
  );
}

export default Skeleton;