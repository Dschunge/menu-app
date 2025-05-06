import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id','name','email','phone','createdAt','updatedAt']);

export default CustomerScalarFieldEnumSchema;
