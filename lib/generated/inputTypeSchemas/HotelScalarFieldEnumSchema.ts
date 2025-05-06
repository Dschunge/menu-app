import { z } from 'zod';

export const HotelScalarFieldEnumSchema = z.enum(['id','name','description','description_esp','image','country','state','city','locationDescription','locationDescription_esp','images','videos','lat','lng','phone','phone_reservation','phone_tollfree','email','website','facebook','tripadvisor','instagram','youtube','whatsapp','createdAt','updatedAt']);

export default HotelScalarFieldEnumSchema;
