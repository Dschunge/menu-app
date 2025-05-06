import { z } from 'zod';

export const AmenitiesScalarFieldEnumSchema = z.enum(['id','name','description','icon','image','amenitiestype','hotelId','createdAt','updatedAt']);

export default AmenitiesScalarFieldEnumSchema;
