import { z } from 'zod';

export const MenuScalarFieldEnumSchema = z.enum(['id','position','name','name_esp','description','description_esp','image','price','restaurantId','createdAt','updatedAt','isActive']);

export default MenuScalarFieldEnumSchema;
