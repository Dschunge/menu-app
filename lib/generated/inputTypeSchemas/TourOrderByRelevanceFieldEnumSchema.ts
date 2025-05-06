import { z } from 'zod';

export const TourOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','image','hotelId','category','whattobring','included','priceInfo','location','offered','videos','images']);

export default TourOrderByRelevanceFieldEnumSchema;
