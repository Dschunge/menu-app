import { z } from 'zod';

export const RestaurantScalarFieldEnumSchema = z.enum(['id','name','description','descriptionshort','description_esp','descriptionshort_esp','image','address','city','state','zipCode','phone','email','website','createdAt','updatedAt','listorder']);

export default RestaurantScalarFieldEnumSchema;
