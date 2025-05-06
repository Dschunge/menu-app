import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { SubSubcategoryFindManyArgsSchema } from "../outputTypeSchemas/SubSubcategoryFindManyArgsSchema"
import { SubcategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubcategoryCountOutputTypeArgsSchema"

export const SubcategoryIncludeSchema: z.ZodType<Prisma.SubcategoryInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  subSubcategories: z.union([z.boolean(),z.lazy(() => SubSubcategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubcategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SubcategoryIncludeSchema;
