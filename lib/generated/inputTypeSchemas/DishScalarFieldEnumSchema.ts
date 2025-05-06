import { z } from 'zod';

export const DishScalarFieldEnumSchema = z.enum(['id','sku','name','name_esp','description','description_esp','price','unit','image','createdAt','updatedAt','restaurantId','categoryId','subcategoryId','subSubcategoryId','availableAtDayOfWeek','dietaryInfo','allergens','ingredients','prepTime','isPopular','isNew','menuId','course_number']);

export default DishScalarFieldEnumSchema;
