import { z } from "zod";

export const channelSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 5 characters long",
    })
    .max(15, {
      message: "Name must be at most 15 characters long",
    }),
});
