import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10">
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
