"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LinkType } from "@/lib/types";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

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
  const activePathname = usePathname();
  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 md:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-sm">
          {links.map((link) => (
            <li
              key={link.name}
              className={clsx(
                "relative flex items-center transition-colors hover:text-white",
                {
                  "text-white": link.path === activePathname,
                  "text-white/50": link.path !== activePathname,
                },
              )}
            >
              <Link href={link.path}>{link.name}</Link>
              {activePathname === link.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="absolute bottom-0 h-1 w-full bg-accent"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
