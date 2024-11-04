"use client";

import { InputRegister } from "@/app/(routes)/register/components";
import { Separator } from "@/app/components";
import { useModal } from "@/app/hooks/useModal";

import { useForm } from "react-hook-form";
import {
  AboutMeInput,
  AvatarInput,
  AvatarModal,
  HeaderProfile,
  InputColor,
  PosterInput,
  PosterModal,
  UserCardPreview,
} from "./components";
import { useCreateObjectURL } from "@/app/hooks/useCreateObjectURL";

import { darkenColor } from "@/app/utils/darkenColor";
import { useUserInfo } from "./context/userInfo";
import { useEffect } from "react";

export default function Profile() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const { isOpen, openModal, closeModal } = useModal();
  const { userInfo, updateUserInfo } = useUserInfo();

  const primaryColor = watch("primaryColor");
  const secondaryColor = watch("secondaryColor");
  const avatarFile = watch("avatar")?.[0];
  const posterFile = watch("banner")?.[0];

  const avatar = useCreateObjectURL(avatarFile);
  const poster = useCreateObjectURL(posterFile);

  const handleAvatarSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setValue("avatar", event.target.files);
    }
  };

  const handlePosterSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setValue("banner", event.target.files);
    }
  };

  const primaryColorDark = darkenColor(primaryColor, 0.4);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    if (data.avatar) {
      formData.append("avatar", data.avatar[0]);
    }
    if (data.banner) {
      formData.append("banner", data.banner[0]);
    }
    formData.append("description", data.description);
    formData.append("state", data.state);
    formData.append("primaryColor", data.primaryColor);
    formData.append("secondaryColor", data.secondaryColor);
    formData.append("name", data.name);
    formData.append("nickname", data.nickname);

    updateUserInfo(formData);
  });

  useEffect(() => {
    if (userInfo) {
      setValue("name", userInfo?.name);
      setValue("nickname", userInfo?.nickname);
      setValue("description", userInfo?.description);
      // setValue("avatar", userInfo?.avatar);
      // setValue("banner", userInfo?.banner);
      setValue("primaryColor", userInfo?.primaryColor);
      setValue("secondaryColor", userInfo?.secondaryColor);
    }
  }, [setValue, userInfo]);

  return (
    <div className="flex flex-col gap-6">
      <HeaderProfile />

      <div className="flex gap-8">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <InputRegister
            id="name"
            label="SHOW NAME"
            type="text"
            register={register}
            value={/^[a-zA-Z0-9]+$/}
            size="w-[300px] h-10"
          />

          <Separator className="border border-zinc-600 rounded-full w-full max-w-[300px]" />

          <InputRegister
            id="pronouns"
            label="PRONOUNS"
            type="text"
            register={register}
            value={/^[a-zA-Z0-9]+$/}
            size="w-[300px] h-10"
          />

          <Separator className="border border-zinc-600 rounded-full w-full max-w-[300px]" />

          <AvatarInput openModal={() => openModal("avatar-modal")} />

          {isOpen === "avatar-modal" && (
            <AvatarModal
              avatar={avatar}
              handleAvatarSelect={handleAvatarSelect}
              closeModal={() => closeModal()}
            />
          )}

          <Separator className="border border-zinc-600 rounded-full w-full max-w-[300px]" />

          <PosterInput openModal={() => openModal("poster-modal")} />

          {isOpen === "poster-modal" && (
            <PosterModal
              poster={poster}
              handlePosterSelect={handlePosterSelect}
              closeModal={() => closeModal()}
            />
          )}

          <div className="flex flex-col gap-1">
            <span className="text-zinc-200 font-semibold text-sm">
              CHANGE THEME
            </span>
            <div className="flex items-center gap-4">
              <InputColor
                color={primaryColor}
                label="Primary"
                register={register("primaryColor")}
              />
              <InputColor
                color={secondaryColor}
                label="Realce"
                register={register("secondaryColor")}
              />
            </div>
          </div>

          <Separator className="border border-zinc-600 rounded-full w-full max-w-[300px]" />

          <AboutMeInput register={register} />

          <button
            className="text-white font-semibold text-sm bg-green-700 w-[150px] rounded-[4px] px-2 py-1 duration-200 hover:bg-green-900"
            type="submit"
          >
            Save changes
          </button>
        </form>

        <UserCardPreview
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          primaryColorDark={primaryColorDark}
          poster={poster}
          avatar={avatar}
          watch={watch}
        />
      </div>
    </div>
  );
}
