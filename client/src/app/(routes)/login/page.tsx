import { Discord } from "@/app/icons/Discord";
import { FooterLogin, FormLogin, HeaderLogin } from "./components";

export default function Login() {
  return (
    <div className="w-screen h-screen from-blue-600 to-blue-900 bg-gradient-to-r flex items-center justify-center">
      <div className="flex flex-col gap-6 bg-[#323236] w-[450px] md:w-[750px] h-[425px] rounded-[4px] px-6 py-6">
        <HeaderLogin />

        <FormLogin />

        <FooterLogin />
      </div>

      <div className="absolute top-8 left-8 flex items-center gap-2">
        <Discord className="text-white" />
        <span className="text-white font-semibold text-xl">Discord</span>
      </div>
    </div>
  );
}
