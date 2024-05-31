"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Events in any city..."
        spellCheck={false}
        className="h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition-colors focus:bg-white/10 focus:ring-2"
      />
    </form>
  );
};

export default SearchForm;
