import { toTitalCase } from "@/lib/utils";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
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
    totalCount,
  };
});

export const getEvent = unstable_cache(async (slug: string) => {
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
});
