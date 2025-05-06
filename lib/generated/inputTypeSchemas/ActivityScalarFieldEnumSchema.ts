import { z } from 'zod';

export const ActivityScalarFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','image','profileImage','hotelId','type','start','end','price','cashOnly','freeOfCharge','location','isRecurring','recurrencePattern','recurrenceDays','recurrenceEndDate','createdAt','updatedAt']);

export default ActivityScalarFieldEnumSchema;
