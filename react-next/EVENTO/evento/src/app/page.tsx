import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center pt-36">
      <H1>Find Events Around You</H1>
      <p className="mb-12 mt-7 text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic text-accent underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href={"/events/austin"}>Austin</Link>
          <Link href={"/events/seattle"}>Seattle</Link>
        </div>
      </section>
    </main>
  );
}
