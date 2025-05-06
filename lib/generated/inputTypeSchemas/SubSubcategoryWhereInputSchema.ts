import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SubcategoryScalarRelationFilterSchema } from './SubcategoryScalarRelationFilterSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { DishListRelationFilterSchema } from './DishListRelationFilterSchema';

export const SubSubcategoryWhereInputSchema: z.ZodType<Prisma.SubSubcategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubSubcategoryWhereInputSchema),z.lazy(() => SubSubcategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubSubcategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubSubcategoryWhereInputSchema),z.lazy(() => SubSubcategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentSubcategoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  subcategory: z.union([ z.lazy(() => SubcategoryScalarRelationFilterSchema),z.lazy(() => SubcategoryWhereInputSchema) ]).optional(),
  dishes: z.lazy(() => DishListRelationFilterSchema).optional()
}).strict();

export default SubSubcategoryWhereInputSchema;
