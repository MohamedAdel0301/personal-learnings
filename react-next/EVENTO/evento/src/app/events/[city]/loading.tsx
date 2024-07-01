import EventCardSkeleton from "components/events-components/EventCardSkeleton";

const Loading = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-24 px-[20px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export default Loading;
