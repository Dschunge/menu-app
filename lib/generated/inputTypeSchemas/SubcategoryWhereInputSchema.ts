import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { CategoryScalarRelationFilterSchema } from './CategoryScalarRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { DishListRelationFilterSchema } from './DishListRelationFilterSchema';
import { SubSubcategoryListRelationFilterSchema } from './SubSubcategoryListRelationFilterSchema';

export const SubcategoryWhereInputSchema: z.ZodType<Prisma.SubcategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubcategoryWhereInputSchema),z.lazy(() => SubcategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubcategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubcategoryWhereInputSchema),z.lazy(() => SubcategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentCategoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => CategoryScalarRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  dishes: z.lazy(() => DishListRelationFilterSchema).optional(),
  subSubcategories: z.lazy(() => SubSubcategoryListRelationFilterSchema).optional()
}).strict();

export default SubcategoryWhereInputSchema;
