import { z } from "zod";

export const serverSchema = z.object({
  tittle: z
    .string({
      required_error: "Tittle is required",
    })
    .max(50, {
      message: "Tittle must be at most 50 characters long",
    })
    .trim(),
  logo: z.any(),
});
