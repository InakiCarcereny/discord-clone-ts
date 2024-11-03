import { Calendar } from "../icons/Calendar";
import { Friend } from "../icons/Friend";
import { PlusWithBg } from "../icons/PlusWithBg";
import { Settings } from "../icons/Settings";
import { Trash } from "../icons/Trash";

export const serverOption = [
  {
    id: 1,
    label: "Invite people",
    icon: Friend({ className: "w-5 h-5" }),
  },
  {
    id: 2,
    label: "Server settings",
    icon: Settings({ className: "w-5 h-5" }),
  },
  {
    id: 3,
    label: "Create channel",
    icon: PlusWithBg({ className: "w-5 h-5" }),
  },
  {
    id: 4,
    label: "Create event",
    icon: Calendar({ className: "w-5 h-5" }),
  },
  {
    id: 5,
    label: "Delete server",
    icon: Trash({ className: "w-5 h-5" }),
  },
];
