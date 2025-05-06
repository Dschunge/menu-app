import { z } from 'zod';

export const TourPriceCategoryScalarFieldEnumSchema = z.enum(['id','sku','price','description','description_esp','tourId','createdAt','updatedAt']);

export default TourPriceCategoryScalarFieldEnumSchema;
