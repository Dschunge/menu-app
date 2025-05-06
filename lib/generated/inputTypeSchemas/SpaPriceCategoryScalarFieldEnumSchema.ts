import { z } from 'zod';

export const SpaPriceCategoryScalarFieldEnumSchema = z.enum(['id','sku','price','description','description_esp','duration','spaId','createdAt','updatedAt']);

export default SpaPriceCategoryScalarFieldEnumSchema;
