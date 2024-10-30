import Link from "next/link";

export function FooterLogin() {
  return (
    <footer className="flex flex-col">
      <p className="text-xs text-zinc-300">
        You need an account?{" "}
        <Link
          className="text-cyan-600 font-semibold text-xs hover:underline underline-offset-1"
          href="/register"
        >
          Register
        </Link>
      </p>
    </footer>
  );
}
