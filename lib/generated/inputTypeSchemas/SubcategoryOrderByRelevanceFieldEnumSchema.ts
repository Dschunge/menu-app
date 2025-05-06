import { z } from 'zod';

export const SubcategoryOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','slug','description','description_esp','image','parentCategoryId']);

export default SubcategoryOrderByRelevanceFieldEnumSchema;
