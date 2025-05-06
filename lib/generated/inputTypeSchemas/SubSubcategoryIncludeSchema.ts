import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryArgsSchema } from "../outputTypeSchemas/SubcategoryArgsSchema"
import { DishFindManyArgsSchema } from "../outputTypeSchemas/DishFindManyArgsSchema"
import { SubSubcategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubSubcategoryCountOutputTypeArgsSchema"

export const SubSubcategoryIncludeSchema: z.ZodType<Prisma.SubSubcategoryInclude> = z.object({
  subcategory: z.union([z.boolean(),z.lazy(() => SubcategoryArgsSchema)]).optional(),
  dishes: z.union([z.boolean(),z.lazy(() => DishFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubSubcategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SubSubcategoryIncludeSchema;
