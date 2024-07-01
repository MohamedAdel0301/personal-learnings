import { toTitalCase } from "@/lib/utils";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export async function getEvents(city: string, page = 1) {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  // );
  // const events: EventoEvent[] = await res.json();
  ``;
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : toTitalCase(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : toTitalCase(city),
    },
  });
  return {
    events,
    totalCount
  };
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
