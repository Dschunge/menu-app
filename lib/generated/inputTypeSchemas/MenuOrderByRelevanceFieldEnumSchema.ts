import { z } from 'zod';

export const MenuOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','image','restaurantId']);

export default MenuOrderByRelevanceFieldEnumSchema;
