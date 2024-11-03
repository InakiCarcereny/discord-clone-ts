import { Hash } from "../icons/Hash";
import { Volume } from "../icons/Volume";

export const typeChannelOptions = [
  {
    id: 1,
    label: "Text",
    description: "Send messages, images, GIF, emojis, opinions, and more.",
    icon: Hash({ className: "text-gray-400 w-8 h-8" }),
  },
  {
    id: 2,
    label: "Voice",
    description:
      "Share your screen and talk with your friends, and other users.",
    icon: Volume({ className: "text-gray-400 w-8 h-8" }),
  },
];
