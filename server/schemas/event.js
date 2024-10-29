import { z } from "zod";

export const EventSchema = z.object({
  theme: z
    .string({
      required_error: "Theme is required",
    })
    .max(50, {
      message: "Theme must be at most 50 characters long",
    })
    .trim(),
  dateInit: z.string(),
  dateEnd: z.string(),
  timeInit: z
    .string({
      required_error: "Time init is required",
    })
    .max(5, {
      message: "Time init must be at most 5 characters long",
    })
    .trim(),
  timeEnd: z
    .string({
      required_error: "Time end is required",
    })
    .max(5, {
      message: "Time end must be at most 5 characters long",
    })
    .trim(),
  frequency: z
    .string({
      required_error: "Frequency is required",
    })
    .max(50, {
      message: "Frequency must be at most 50 characters long",
    })
    .trim(),
  description: z
    .string({
      required_error: "Description is required",
    })
    .max(150, {
      message: "Description must be at most 150 characters long",
    })
    .trim(),
});
