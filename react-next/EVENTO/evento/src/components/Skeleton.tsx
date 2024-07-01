import { cn } from "@/lib/utils";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-4 w-[550px] animate-pulse rounded-lg bg-white/5",
        className,
      )}
    />
  );
};

export default Skeleton;
