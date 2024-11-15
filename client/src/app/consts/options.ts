import { Greeting } from "../icons/Greeting";
import { Robot } from "../icons/Robot";

export const options = [
  {
    id: 1,
    label: "Friends",
    icon: Greeting({}),
    href: "/home",
  },
  {
    id: 2,
    label: "Profile",
    icon: Robot({ className: "w-6 h-6" }),
    href: "/home/profile",
  },
];
