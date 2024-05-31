import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Find Events Around You</h1>
      <p>Browse more than 10,000 events around you</p>

      <form>
        <input placeholder="Search Events in any city..." spellCheck={false} />
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href={"/event/austin"}>Austin</Link>
          <Link href={"/event/seattle"}>Seattle</Link>
        </div>
      </section>
    </main>
  );
}
