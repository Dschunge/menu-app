import { z } from 'zod';

export const SubSubcategoryScalarFieldEnumSchema = z.enum(['id','name','name_esp','slug','description','description_esp','image','createdAt','updatedAt','parentSubcategoryId','postition']);

export default SubSubcategoryScalarFieldEnumSchema;
