import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

type Props = {
  events: EventoEvent[];
};

const EventsList = ({ events }: Props) => {
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
