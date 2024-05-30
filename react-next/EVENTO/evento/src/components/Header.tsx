import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/events">All Events</Link>
    </header>
  );
};

export default Header;
