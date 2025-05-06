import { z } from 'zod';

export const TourScalarFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','image','hotelId','price','priceKids','category','offer','discount','whattobring','included','pickuptime','maxPeople','minPeople','minAge','bestSeller','priceInfo','location','offered','duration','videos','images','createdAt','updatedAt']);

export default TourScalarFieldEnumSchema;
