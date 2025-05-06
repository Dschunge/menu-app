import { z } from 'zod';

/////////////////////////////////////////
// MENU SCHEMA
/////////////////////////////////////////

export const MenuSchema = z.object({
  id: z.string().uuid(),
  position: z.number().int(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string().nullable(),
  description_esp: z.string().nullable(),
  image: z.string().nullable(),
  price: z.number(),
  restaurantId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isActive: z.boolean(),
})

export type Menu = z.infer<typeof MenuSchema>

export default MenuSchema;
