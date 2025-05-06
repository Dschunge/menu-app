import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema } from './SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema';
import { SubcategoryWhereInputSchema } from './SubcategoryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { CategoryScalarRelationFilterSchema } from './CategoryScalarRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { DishListRelationFilterSchema } from './DishListRelationFilterSchema';
import { SubSubcategoryListRelationFilterSchema } from './SubSubcategoryListRelationFilterSchema';

export const SubcategoryWhereUniqueInputSchema: z.ZodType<Prisma.SubcategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    parentCategoryId_slug: z.lazy(() => SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    parentCategoryId_slug: z.lazy(() => SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  parentCategoryId_slug: z.lazy(() => SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SubcategoryWhereInputSchema),z.lazy(() => SubcategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubcategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubcategoryWhereInputSchema),z.lazy(() => SubcategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description_esp: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  parentCategoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  category: z.union([ z.lazy(() => CategoryScalarRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  dishes: z.lazy(() => DishListRelationFilterSchema).optional(),
  subSubcategories: z.lazy(() => SubSubcategoryListRelationFilterSchema).optional()
}).strict());

export default SubcategoryWhereUniqueInputSchema;
