import EventsList from "components/events-components/EventsList";
import H1 from "components/H1";

type EventsProps = {
  params: { city: string };
};

import { EventoEvent } from "@/lib/types";

const EventsPage = async ({ params: { city } }: EventsProps) => {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      cache: "no-cache",
    },
  );

  const events: EventoEvent[] = await res.json();

  return (
    <main className="flex flex-col items-center px-[20px] py-24">
      {city === "all" ? (
        <H1>All Events</H1>
      ) : (
        <H1 className="mb-28">
          Events In{" "}
          <span className="capitalize text-accent underline">
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </span>
        </H1>
      )}
      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
