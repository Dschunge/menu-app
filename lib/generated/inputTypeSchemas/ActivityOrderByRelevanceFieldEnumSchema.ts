import { z } from 'zod';

export const ActivityOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','image','profileImage','hotelId','type','location','recurrenceDays']);

export default ActivityOrderByRelevanceFieldEnumSchema;
