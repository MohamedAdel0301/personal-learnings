import EventsList from "components/events-components/EventsList";
import H1 from "components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { toTitalCase } from "@/lib/utils";
import { Metadata } from "next";

type EventsProps = {
  params: { city: string };
};

type EventsPageProps = EventsProps & {
  searchParams: { page: string };
};

const EventsPage = async ({
  params: { city },
  searchParams,
}: EventsPageProps) => {
  const page = searchParams.page || 1;
  return (
    <main className="flex flex-col items-center px-[20px] py-24">
      {city === "all" ? (
        <H1 className="mb-28">All Events</H1>
      ) : (
        <H1 className="mb-28">
          Events In{" "}
          <span className="capitalize text-accent underline">
            {toTitalCase(city)}
          </span>
        </H1>
      )}
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={Number(page)} />
      </Suspense>
    </main>
  );
};

export default EventsPage;

export function generateMetadata({ params }: EventsProps): Metadata {
  return {
    title: `Events in ${toTitalCase(params.city)}`,
  };
}
