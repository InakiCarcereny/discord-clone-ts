import { InputRegister } from "@/app/(routes)/register/components";
import { useAuth } from "@/app/context/auth";
import { useForm } from "react-hook-form";
import { HeaderCreateServerModal } from "../header-create-server-modal/HeaderCreateServerModal";

import { CreateServerModalProps } from "@/app/models/create-server-modal.d";
import { FooterCreateServerModal } from "../footer-create-server-modal/FooterCreateServerModal";
import { FileInput } from "../file-input/FileInput";
import { CloseModalButton } from "@/app/components";

import { Logo } from "@/app/models/logo.d";
import { useServer } from "../../context/server";

interface FormValues {
  logo: Logo;
  tittle: string;
}

export function CreateServerModal({ onCloseModal }: CreateServerModalProps) {
  const { user } = useAuth();

  const { register, handleSubmit, watch } = useForm<FormValues>();

  const { createServer } = useServer();

  const logo = watch("logo");

  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("tittle", data.tittle);
    form.append("logo", logo[0]);

    createServer(form);
    onCloseModal();
  });

  return (
    <div
      aria-modal="true"
      aria-labelledby="create-server"
      role="dialog"
      className="inset-0 z-50 absolute flex items-center justify-center w-full h-full bg-black bg-opacity-60"
    >
      <form
        onSubmit={onSubmit}
        aria-describedby="modal-form-description"
        className="flex flex-col justify-between bg-[#323236] rounded-[4px] w-[450px] h-[450px] px-4 py-10 relative overflow-hidden"
      >
        <div className="flex flex-col gap-6">
          <HeaderCreateServerModal />

          <FileInput register={register} logo={logo} />

          <InputRegister
            label="NAME OF THE SERVER"
            type="text"
            id="tittle"
            required="Tittle is required"
            value={/^[a-zA-Z0-9]+$/}
            register={register}
            placeholder={`Server of ${user?.username}`}
          />
        </div>

        <FooterCreateServerModal onCloseModal={onCloseModal} />

        <CloseModalButton onCloseModal={onCloseModal} />
      </form>
    </div>
  );
}
