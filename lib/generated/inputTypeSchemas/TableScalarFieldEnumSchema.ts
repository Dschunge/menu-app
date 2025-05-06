import { z } from 'zod';

export const TableScalarFieldEnumSchema = z.enum(['id','number','capacity','location','isActive','restaurantId','createdAt','updatedAt']);

export default TableScalarFieldEnumSchema;
