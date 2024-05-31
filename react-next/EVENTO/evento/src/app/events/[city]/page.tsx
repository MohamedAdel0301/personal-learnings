import H1 from "@/components/H1";

type EventsProps = {
  params: { city: string };
};

const EventsPage = ({ params: { city } }: EventsProps) => {
  return (
    <main className="flex flex-col items-center px-[20px] py-24">
      {city === "all" ? (
        <H1>All Events</H1>
      ) : (
        <H1>
          Events In{" "}
          <span className="capitalize text-accent underline">{city}</span>
        </H1>
      )}
    </main>
  );
};

export default EventsPage;
