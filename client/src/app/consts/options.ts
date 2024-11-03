import { Greeting } from "../icons/Greeting";
import { Store } from "../icons/Store";

export const options = [
  {
    id: 1,
    label: "Friends",
    icon: Greeting({}),
    href: "/home",
  },
  {
    id: 2,
    label: "Store",
    icon: Store({}),
    href: "/home/store",
  },
];
