import { z } from 'zod';

export const OpeningHoursOrderByRelevanceFieldEnumSchema = z.enum(['id','openTime','closeTime','restaurantId']);

export default OpeningHoursOrderByRelevanceFieldEnumSchema;
