import { z } from 'zod';

export const DishOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','unit','image','restaurantId','categoryId','subcategoryId','subSubcategoryId','dietaryInfo','allergens','ingredients','menuId']);

export default DishOrderByRelevanceFieldEnumSchema;
