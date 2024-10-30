import Link from "next/link";

export function FooterRegister() {
  return (
    <footer className="flex flex-col gap-4">
      <p className="text-xs text-zinc-400">
        By signing up you agree to Discords{" "}
        <span className="text-cyan-600 font-semibold hover:underline-offset-1 hover:underline cursor-pointer">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-cyan-600 font-semibold hover:underline-offset-1 hover:underline cursor-pointer">
          Privacy Policy
        </span>
      </p>

      <Link className="text-cyan-600 font-semibold text-sm" href="/login">
        Do you have already an account?
      </Link>
    </footer>
  );
}
