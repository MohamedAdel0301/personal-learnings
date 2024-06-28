import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }: { event: EventoEvent }) => {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="h-[380px] max-w-[500px] flex-1 basis-80"
    >
      <section
        key={event.id}
        className={`state-effects relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white/[3%]`}
      >
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50">{event.location}</p>
        </div>

        <section className="absolute left-[12px] top-[12px] flex h-[45px] w-[45px] flex-col items-center justify-center rounded-md bg-black/30">
          <span className="-mb-[5px] text-xl font-bold">
            {new Date(event.date).toLocaleDateString("en-us", {
              day: "2-digit",
            })}
          </span>
          <span className="text-xs uppercase text-accent">
            {new Date(event.date)
              .toLocaleString("default", { month: "long" })
              .slice(0, 3)}
          </span>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
