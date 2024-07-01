import { toTitalCase } from "@/lib/utils";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export async function getEvents(city: string) {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  // );
  // const events: EventoEvent[] = await res.json();

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : toTitalCase(city),
    },
    orderBy: {
      date: "asc",
    },
  });
  return events;
}

export async function getEvent(slug: string) {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  // );
  // const event: EventoEvent = await res.json();
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) return notFound();

  return event;
}
