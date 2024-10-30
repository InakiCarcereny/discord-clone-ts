"use client";

import { useForm } from "react-hook-form";
import { InputRegister } from "../input-register/InputRegister";
import { InputRegisterSelect } from "../input-register-select/InputRegisterSelect";
import { Button } from "@/app/components";
import { useAuth } from "@/app/context/auth";

interface FormValues {
  email: string;
  name: string;
  username: string;
  password: string;
  day: string;
  month: string;
  year: string;
}

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { register: signUp } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    signUp(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <InputRegister
        label="EMAIL *"
        type="email"
        id="email"
        required="Email is required"
        value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        message="Invalid email address"
        error={errors.email}
        register={register}
      />
      <InputRegister
        label="NAME *"
        type="text"
        id="name"
        required="Name is required"
        value={/^[a-zA-Z0-9]+$/}
        message="Invalid name"
        error={errors.name}
        register={register}
      />
      <InputRegister
        label="USERNAME *"
        type="text"
        id="username"
        required="Username is required"
        value={/^[a-zA-Z0-9]+$/}
        message="Invalid username"
        error={errors.username}
        register={register}
      />
      <InputRegister
        label="PASSWORD *"
        type="password"
        id="password"
        required="Password is required"
        value={/^[a-zA-Z0-9]+$/}
        message="Invalid password"
        error={errors.password}
        register={register}
      />

      <div className="flex flex-col gap-2 w-full">
        <span className="text-xs font-semibold text-zinc-300">BORN DATE *</span>
        <div className="flex items-center gap-2 w-full">
          <InputRegisterSelect number={31} register={register} value="day" />
          <InputRegisterSelect number={12} register={register} value="month" />
          <InputRegisterSelect number={2023} register={register} value="year" />
        </div>
      </div>

      <Button label="Continue" type="submit" />
    </form>
  );
}
