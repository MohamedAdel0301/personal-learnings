import { EventoEvent } from "@prisma/client";

export async function getEvents(city: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );
  const events: EventoEvent[] = await res.json();
  return events;
}

export async function getEvent(slug: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );
  const event: EventoEvent = await res.json();
  return event;
}
