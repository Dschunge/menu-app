import { z } from 'zod';

export const SubcategoryScalarFieldEnumSchema = z.enum(['id','name','name_esp','slug','description','description_esp','image','createdAt','updatedAt','parentCategoryId','postition']);

export default SubcategoryScalarFieldEnumSchema;
