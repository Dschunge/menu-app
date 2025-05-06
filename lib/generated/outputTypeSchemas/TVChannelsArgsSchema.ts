import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TVChannelsSelectSchema } from '../inputTypeSchemas/TVChannelsSelectSchema';
import { TVChannelsIncludeSchema } from '../inputTypeSchemas/TVChannelsIncludeSchema';

export const TVChannelsArgsSchema: z.ZodType<Prisma.TVChannelsDefaultArgs> = z.object({
  select: z.lazy(() => TVChannelsSelectSchema).optional(),
  include: z.lazy(() => TVChannelsIncludeSchema).optional(),
}).strict();

export default TVChannelsArgsSchema;
