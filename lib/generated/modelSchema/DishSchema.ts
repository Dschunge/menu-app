import { z } from 'zod';

/////////////////////////////////////////
// DISH SCHEMA
/////////////////////////////////////////

export const DishSchema = z.object({
  id: z.string().uuid(),
  sku: z.number().int(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string(),
  description_esp: z.string(),
  price: z.number(),
  unit: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  restaurantId: z.string(),
  categoryId: z.string(),
  subcategoryId: z.string().nullable(),
  subSubcategoryId: z.string().nullable(),
  availableAtDayOfWeek: z.number().int(),
  dietaryInfo: z.string().array(),
  allergens: z.string().array(),
  ingredients: z.string().array(),
  prepTime: z.number().int().nullable(),
  isPopular: z.boolean(),
  isNew: z.boolean(),
  menuId: z.string().nullable(),
  course_number: z.number().int(),
})

export type Dish = z.infer<typeof DishSchema>

export default DishSchema;
