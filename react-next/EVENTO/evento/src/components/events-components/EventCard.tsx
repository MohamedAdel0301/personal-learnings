import { EventoEvent } from "@/lib/types";
import Image from "next/image";

const EventCard = ({ event }: { event: EventoEvent }) => {
  return (
    <section
      key={event.id}
      className="flex h-[380px] max-w-[500px] flex-1 basis-80 flex-col overflow-hidden rounded-xl bg-white/[3%]"
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
    </section>
  );
};

export default EventCard;
