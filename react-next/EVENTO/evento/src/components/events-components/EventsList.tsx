import { EventoEvent } from "@/lib/types";
import React from "react";

type Props = {
  events: EventoEvent[];
};

const EventsList = ({ events }: Props) => {
  return (
    <React.Fragment>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </React.Fragment>
  );
};

export default EventsList;
