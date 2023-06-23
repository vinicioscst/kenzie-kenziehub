import { z } from "zod";

export const createTechSchema = z
  .object({
    title: z.string().nonempty(),
    status: z
      .string()
      .nonempty(),
  })