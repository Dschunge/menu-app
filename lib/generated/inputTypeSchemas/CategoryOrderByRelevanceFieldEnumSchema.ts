import { z } from 'zod';

export const CategoryOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','slug','description','description_esp','image','restaurantId']);

export default CategoryOrderByRelevanceFieldEnumSchema;
