"use client";

import { Search } from "@/app/icons/Search";

export default function All() {
  return (
    <div className="mx-10 mt-1 flex flex-col gap-8">
      <header className="flex items-center justify-between w-full bg-zinc-900 text-gray-300 rounded-[4px] px-4 py-2">
        <input
          type="search"
          className="focus:outline-none text-sm placeholder:text-zinc-600 w-full bg-transparent"
          placeholder="Search"
        />
        <Search className="text-white h-6 w-6" />
      </header>

      <section className="flex flex-col gap-2">
        <h3 className="font-semibold text-sm text-zinc-300">PENDING - 8</h3>
      </section>
    </div>
  );
}
