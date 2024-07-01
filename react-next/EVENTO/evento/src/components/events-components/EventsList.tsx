import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";
import { getEvents } from "@/services/events";

type Props = {
  city: string;
};

const EventsList = async ({ city }: Props) => {
  const events: EventoEvent[] = await getEvents(city);

  return (
    <React.Fragment>
      <section className="flex flex-wrap justify-center gap-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default EventsList;
