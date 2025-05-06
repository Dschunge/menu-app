import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema } from './SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema';
import { SubSubcategoryWhereInputSchema } from './SubSubcategoryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SubcategoryScalarRelationFilterSchema } from './SubcategoryScalarRelationFilterSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { DishListRelationFilterSchema } from './DishListRelationFilterSchema';

export const SubSubcategoryWhereUniqueInputSchema: z.ZodType<Prisma.SubSubcategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    parentSubcategoryId_slug: z.lazy(() => SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    parentSubcategoryId_slug: z.lazy(() => SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  parentSubcategoryId_slug: z.lazy(() => SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SubSubcategoryWhereInputSchema),z.lazy(() => SubSubcategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubSubcategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubSubcategoryWhereInputSchema),z.lazy(() => SubSubcategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentSubcategoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  subcategory: z.union([ z.lazy(() => SubcategoryScalarRelationFilterSchema),z.lazy(() => SubcategoryWhereInputSchema) ]).optional(),
  dishes: z.lazy(() => DishListRelationFilterSchema).optional()
}).strict());

export default SubSubcategoryWhereUniqueInputSchema;
