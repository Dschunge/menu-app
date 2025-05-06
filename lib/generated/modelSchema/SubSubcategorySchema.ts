import { z } from 'zod';

/////////////////////////////////////////
// SUB SUBCATEGORY SCHEMA
/////////////////////////////////////////

export const SubSubcategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string().nullable(),
  slug: z.string(),
  description: z.string().nullable(),
  description_esp: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  parentSubcategoryId: z.string(),
  postition: z.number().int(),
})

export type SubSubcategory = z.infer<typeof SubSubcategorySchema>

export default SubSubcategorySchema;
