import { z } from 'zod';

export const ReservationOrderByRelevanceFieldEnumSchema = z.enum(['id','notes','customerId','tableId','restaurantId']);

export default ReservationOrderByRelevanceFieldEnumSchema;
