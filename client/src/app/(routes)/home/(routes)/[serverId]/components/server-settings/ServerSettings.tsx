"use client";

import { InputRegister } from "@/app/(routes)/register/components";
import { Button, CloseModalButton } from "@/app/components";

import { useForm } from "react-hook-form";

import { FileInput } from "@/app/(routes)/home/components";
import { useServer } from "@/app/(routes)/home/context/server";
import { useEffect } from "react";
import { UploadPhoto } from "@/app/icons/UploadPhoto";

interface ServerSettingsProps {
  handleOpenOptions: (option: number | null) => void;
  serverId: string;
}

interface FormValues {
  logo: File;
  tittle: string;
}

export function ServerSettings({
  handleOpenOptions,
  serverId,
}: ServerSettingsProps) {
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>();

  const { updateServer, server } = useServer();

  const findName = server.find((server) => server._id === serverId);

  const verified = findName ? findName.tittle : "";

  const logo = watch("logo");

  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("tittle", data.tittle);
    form.append("logo", logo[0]);

    updateServer(form, serverId);
    handleOpenOptions(null);
  });

  useEffect(() => {
    setValue("tittle", verified);
  }, [verified, setValue]);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form
        onSubmit={onSubmit}
        className="bg-[#2b2b30] w-[400px] min-h-[300px] rounded-[4px] px-4 py-4 flex flex-col gap-8 relative"
      >
        <header className="flex items-center justify-between w-full">
          <h3 className="font-semibold text-white text-xl">Server view</h3>
          <CloseModalButton onCloseModal={() => handleOpenOptions(null)} />
        </header>

        <div className="flex flex-col gap-1">
          <FileInput register={register} logo={logo} />

          <div className="absolute right-[150px] top-[70px] bg-[#5865f2] rounded-full px-1 py-1">
            <UploadPhoto className="text-white h-6 w-6" />
          </div>

          <InputRegister
            label="SERVER NAME"
            type="text"
            id="tittle"
            required="Tittle is required"
            register={register}
          />
        </div>

        <Button label="Save changes" type="submit" />
      </form>
    </div>
  );
}
