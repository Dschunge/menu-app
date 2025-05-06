import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','name_esp','slug','description','description_esp','image','createdAt','updatedAt','restaurantId','postition']);

export default CategoryScalarFieldEnumSchema;
