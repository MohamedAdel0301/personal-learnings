import Skeleton from "components/Skeleton";

const EventCardSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[250px] w-[250px]" />
      <div className="flex flex-col gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default EventCardSkeleton;
