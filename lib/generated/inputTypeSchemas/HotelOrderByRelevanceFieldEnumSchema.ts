import { z } from 'zod';

export const HotelOrderByRelevanceFieldEnumSchema = z.enum(['id','name','description','description_esp','image','country','state','city','locationDescription','locationDescription_esp','images','videos','phone','phone_reservation','phone_tollfree','email','website','facebook','tripadvisor','instagram','youtube','whatsapp']);

export default HotelOrderByRelevanceFieldEnumSchema;
