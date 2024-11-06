"use client";

import { useForm } from "react-hook-form";

import { InputRegister } from "@/app/(routes)/register/components";

import { OptionId } from "@/app/hooks/useModalOptions";
import { useEvent } from "../../context/event";

interface CreateEventModalProps {
  handleOpenOptions: (option: OptionId) => void;
  serverId: string;
}

interface FormValues {
  theme: string;
  dateInit: string;
  timeInit: string;
  frequency: string;
  description: string;
}

export function CreateEventModal({
  handleOpenOptions,
  serverId,
}: CreateEventModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { createEvent } = useEvent();

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    createEvent(data, serverId);
  });

  return (
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form
        onSubmit={onSubmit}
        className=" bg-[#2b2b30] w-[450px] h-[600px] rounded-[4px] relative overflow-hidden flex flex-col justify-between"
      >
        <div className="flex flex-col gap-6 px-4 py-4">
          <header className="text-center flex flex-col gap-2">
            <span className="text-white font-semibold text-2xl">
              What your event focuses on?
            </span>
            <p className="font-semibold text-gray-400 text-sm">
              Refeal the event details
            </p>
          </header>

          <InputRegister
            label="EVEN THEME *"
            type="text"
            id="theme"
            required="Theme is required"
            error={errors.theme}
            register={register}
          />

          <div className="grid grid-cols-2 items-center gap-4">
            <InputRegister
              label="DATE INIT *"
              type="text"
              id="dateInit"
              required="Tittle is required"
              register={register}
            />

            <InputRegister
              label="TIME INIT *"
              type="text"
              id="timeInit"
              required="Tittle is required"
              register={register}
            />
          </div>

          <InputRegister
            label="FREQUENCY *"
            type="text"
            id="frequency"
            required="Tittle is required"
            register={register}
          />

          <InputRegister
            label="DESCRIPTION *"
            type="text"
            id="description"
            required="Tittle is required"
            register={register}
          />
        </div>

        <footer className="flex items-center justify-between w-full h-[100px] bg-[#212124] px-4">
          <button
            onClick={() => handleOpenOptions(null)}
            className="text-cyan-600 font-semibold text-sm hover:underline-offset-1 hover:underline"
            type="button"
          >
            Back
          </button>
          <div className="flex items-center gap-2">
            <button className="bg-zinc-700 text-white font-semibold text-sm px-4 py-2 rounded-[4px] duration-200 hover:bg-zinc-600">
              Cancel
            </button>
            <button className="bg-[#5865f2] text-white font-semibold text-sm px-4 py-2 rounded-[4px] duration-200 hover:bg-blue-700">
              Create event
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
}
