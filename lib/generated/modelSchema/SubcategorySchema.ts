import { z } from 'zod';

/////////////////////////////////////////
// SUBCATEGORY SCHEMA
/////////////////////////////////////////

export const SubcategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string().nullable(),
  slug: z.string(),
  description: z.string().nullable(),
  description_esp: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  parentCategoryId: z.string(),
  postition: z.number().int(),
})

export type Subcategory = z.infer<typeof SubcategorySchema>

export default SubcategorySchema;
