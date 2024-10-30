import { Discord } from "@/app/icons/Discord";
import { FooterRegister, FormRegister, HeaderRegister } from "./components";

export default function Register() {
  return (
    <div className="w-screen h-screen from-blue-600 to-blue-900 bg-gradient-to-r flex items-center justify-center">
      <section className="flex flex-col bg-[#323236] w-[500px] h-[700px] rounded-[4px] px-6 py-6 gap-4">
        <HeaderRegister />

        <FormRegister />

        <FooterRegister />
      </section>

      <div className="absolute top-8 left-8 flex items-center gap-2">
        <Discord className="text-white" />
        <span className="text-white font-semibold text-xl">Discord</span>
      </div>
    </div>
  );
}
