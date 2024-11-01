import { useServer } from "../../context/server";

export function ServerSelectedAside() {
  const { server } = useServer();

  return (
    <aside className="h-screen w-[240px] bg-[#27282c] flex flex-col gap-2 -mx-6 -my-3">
      <span>hola</span>
    </aside>
  );
}
