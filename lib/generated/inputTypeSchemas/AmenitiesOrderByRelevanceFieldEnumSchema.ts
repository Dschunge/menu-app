import { z } from 'zod';

export const AmenitiesOrderByRelevanceFieldEnumSchema = z.enum(['id','name','description','icon','image','hotelId']);

export default AmenitiesOrderByRelevanceFieldEnumSchema;
