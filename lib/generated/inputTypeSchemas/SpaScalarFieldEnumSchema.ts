import { z } from 'zod';

export const SpaScalarFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','hotelId','type','videos','images','createdAt','updatedAt']);

export default SpaScalarFieldEnumSchema;
