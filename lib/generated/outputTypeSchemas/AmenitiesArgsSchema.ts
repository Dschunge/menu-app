import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AmenitiesSelectSchema } from '../inputTypeSchemas/AmenitiesSelectSchema';
import { AmenitiesIncludeSchema } from '../inputTypeSchemas/AmenitiesIncludeSchema';

export const AmenitiesArgsSchema: z.ZodType<Prisma.AmenitiesDefaultArgs> = z.object({
  select: z.lazy(() => AmenitiesSelectSchema).optional(),
  include: z.lazy(() => AmenitiesIncludeSchema).optional(),
}).strict();

export default AmenitiesArgsSchema;
