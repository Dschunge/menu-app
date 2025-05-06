import { z } from 'zod';

export const ReservationScalarFieldEnumSchema = z.enum(['id','date','startTime','endTime','partySize','status','notes','customerId','tableId','restaurantId','createdAt','updatedAt']);

export default ReservationScalarFieldEnumSchema;
