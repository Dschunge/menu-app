import { z } from 'zod';

export const SpaOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','hotelId','type','videos','images']);

export default SpaOrderByRelevanceFieldEnumSchema;
