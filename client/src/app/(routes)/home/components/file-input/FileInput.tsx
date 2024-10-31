/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Logo } from "@/app/models/logo";

interface FileInputProps {
  register: UseFormRegister<any>;
  logo: Logo;
}

export function FileInput({ register, logo }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (logo) {
      const file = logo[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [logo]);

  return (
    <div className="border-2 border-white border-dashed rounded-full w-[80px] h-[80px] flex items-center justify-center mx-auto">
      <input
        type="file"
        className="opacity-0 w-full h-full"
        {...register("logo")}
      />
      {preview && (
        <img
          src={preview}
          alt="logo preview"
          className="w-full h-full object-cover rounded-full"
        />
      )}
    </div>
  );
}
