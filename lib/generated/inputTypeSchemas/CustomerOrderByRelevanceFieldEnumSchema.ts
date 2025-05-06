import { z } from 'zod';

export const CustomerOrderByRelevanceFieldEnumSchema = z.enum(['id','name','email','phone']);

export default CustomerOrderByRelevanceFieldEnumSchema;
