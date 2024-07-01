import React from "react";
import EventCard from "./EventCard";
import { getEvents } from "@/services/events";
import PaginationControls from "./PaginationControls";
import { EventoEvent } from "@prisma/client";

type Props = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: Props) => {
  const { events, totalCount }: { events: EventoEvent[]; totalCount: number } =
    await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}/?page=${page - 1}` : "";
  const nextPath =
    totalCount > page * 6 ? `/events/${city}/?page=${page + 1}` : "";

  return (
    <React.Fragment>
      <section className="flex flex-wrap justify-center gap-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <PaginationControls nextPath={nextPath} previousPath={previousPath} />
    </React.Fragment>
  );
};

export default EventsList;
