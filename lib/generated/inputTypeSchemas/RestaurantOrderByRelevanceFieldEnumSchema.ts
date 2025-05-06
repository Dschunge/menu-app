import { z } from 'zod';

export const RestaurantOrderByRelevanceFieldEnumSchema = z.enum(['id','name','description','descriptionshort','description_esp','descriptionshort_esp','image','address','city','state','zipCode','phone','email','website']);

export default RestaurantOrderByRelevanceFieldEnumSchema;
