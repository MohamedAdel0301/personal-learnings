import { EventoEvent } from "@/lib/types";
import H1 from "components/H1";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { getEvent } from "@/services/events";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: `${event.name}`,
  };
}

const EventPage = async ({ params }: Props) => {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative flex items-center justify-center overflow-hidden py-14 md:py-20 lg:h-[361px]">
        <Image
          className="object-cover blur-3xl"
          src={event.imageUrl}
          alt="event background image"
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw, 1280px"
          priority
        />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleString("en-US", {
                month: "long",
                weekday: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-blur state-effects mt-5 w-full rounded-md border-2 border-white/10 bg-white/20 py-2 text-lg capitalize lg:mt-auto">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-y-4 py-4 text-center">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionBody className="max-w-4xl">{event.description}</SectionBody>
        </Section>

        <Section>
          <SectionHeading className="mb-2">Location</SectionHeading>
          <SectionBody>{event.location}</SectionBody>
        </Section>
      </div>
    </main>
  );
};

export default EventPage;

function Section({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mb-4 text-2xl text-accent", className)}>{children}</h2>
  );
}
function SectionBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-lg leading-8 text-white/75", className)}>
      {children}
    </p>
  );
}
