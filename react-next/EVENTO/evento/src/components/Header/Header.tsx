import Link from "next/link";
import Logo from "./Logo";
import { LinkType } from "@/lib/types";

const links: LinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 md:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {links.map((link) => (
            <li
              key={link.name}
              className="text-white/50 transition-colors hover:text-white"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
