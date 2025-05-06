import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HotelOrderByWithRelationInputSchema } from './HotelOrderByWithRelationInputSchema';
import { TVChannelsOrderByRelevanceInputSchema } from './TVChannelsOrderByRelevanceInputSchema';

export const TVChannelsOrderByWithRelationInputSchema: z.ZodType<Prisma.TVChannelsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  channelNo: z.lazy(() => SortOrderSchema).optional(),
  languages: z.lazy(() => SortOrderSchema).optional(),
  channeltype: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  hotelId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Hotel: z.lazy(() => HotelOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TVChannelsOrderByRelevanceInputSchema).optional()
}).strict();

export default TVChannelsOrderByWithRelationInputSchema;
