import { Button } from "@/app/components";

export default function AddFriend() {
  return (
    <div className="flex flex-col px-6">
      <header className="flex flex-col gap-2 mt-4">
        <h1 className="text-white font-semibold">ADD FRIEND</h1>
        <p className="text-xs text-zinc-300 font-semibold">
          You can add friends with your discord username.
        </p>
      </header>

      <div className="flex items-center justify-between bg-zinc-900 text-gray-300 px-4 py-2 rounded-[4px] w-full mt-6">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Username"
        />
        <Button label="Add friend" type="submit" size="w-[150px]" />
      </div>
    </div>
  );
}
