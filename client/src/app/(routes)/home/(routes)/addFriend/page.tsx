"use client";

import { Button } from "@/app/components";

import { useForm } from "react-hook-form";
import { useFriendRequest } from "../../context/friendRequest";
import { useAuth } from "@/app/context/auth";
import { useState } from "react";

export default function AddFriend() {
  const [message, setMessage] = useState("");

  const { addFriend } = useFriendRequest();

  const { user } = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    addFriend(user?.username, data.recipient);
    setMessage("Friend added successfully");
  });

  return (
    <div className="flex flex-col px-6 gap-2">
      <header className="flex flex-col gap-2 mt-4">
        <h1 className="text-white font-semibold">ADD FRIEND</h1>
        <p className="text-xs text-zinc-300 font-semibold">
          You can add friends with your discord username.
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="flex items-center justify-between bg-zinc-900 text-gray-300 px-4 py-2 rounded-[4px] w-full mt-6 border border-green-400"
      >
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Username"
          {...register("recipient")}
        />
        <Button label="Add friend" type="submit" size="w-[150px]" />
      </form>

      <span className="text-green-400 text-sm font-semibold">{message}</span>
    </div>
  );
}
