import { z } from 'zod';

export const OpeningHoursScalarFieldEnumSchema = z.enum(['id','dayOfWeek','openTime','closeTime','isClosed','restaurantId']);

export default OpeningHoursScalarFieldEnumSchema;
