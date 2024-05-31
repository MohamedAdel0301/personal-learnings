import { LinkType } from "@/lib/types";
import Link from "next/link";

const links: LinkType[] = [
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
];

const Footer = () => {
  return (
    <div className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 text-xs text-white/25 md:px-9">
      <small className="text-xs">&copy; 2023, A Bytegrad project.</small>
      <ul className="flex gap-x-3 md:gap-x-8">
        {links.map((link) => (
          <li key={link.name} className="transition hover:text-white">
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
