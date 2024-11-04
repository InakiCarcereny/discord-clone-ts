import { usePathname } from "next/navigation";

export function useHomeLayout() {
  const pathname = usePathname();

  const showHomeLayout =
    pathname === "/home" ||
    pathname === "/home/addFriend" ||
    pathname === "/home/all" ||
    pathname === "/home/pendent";

  const showUserCard = pathname === "/home/profile";

  return { showHomeLayout, showUserCard };
}
