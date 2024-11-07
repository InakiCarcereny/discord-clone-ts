import { Separator } from "@/app/components";
import { Search } from "@/app/icons/Search";

export function ServerSelectedSearchBar() {
  return (
    <div className="w-full h-[54px] bg-[#2f3136] flex flex-col justify-between">
      <div className="bg-zinc-900 w-[235px] rounded-[4px] px-2 py-1 my-auto flex items-center justify-between">
        <input
          type="text"
          className="bg-transparent focus:outline-none placeholder:text-sm w-full text-sm text-white font-semibold"
          placeholder="Search"
        />
        <Search className="text-gray-400 h-5 w-5" />
      </div>
      <Separator className="border border-[#2b2c31] rounded-full w-full" />
    </div>
  );
}
