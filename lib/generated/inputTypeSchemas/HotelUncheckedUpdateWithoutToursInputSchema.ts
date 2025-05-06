import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { HotelUpdateimagesInputSchema } from './HotelUpdateimagesInputSchema';
import { HotelUpdatevideosInputSchema } from './HotelUpdatevideosInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ActivityUncheckedUpdateManyWithoutHotelNestedInputSchema } from './ActivityUncheckedUpdateManyWithoutHotelNestedInputSchema';
import { SpaUncheckedUpdateManyWithoutHotelNestedInputSchema } from './SpaUncheckedUpdateManyWithoutHotelNestedInputSchema';
import { AmenitiesUncheckedUpdateManyWithoutHotelNestedInputSchema } from './AmenitiesUncheckedUpdateManyWithoutHotelNestedInputSchema';
import { TVChannelsUncheckedUpdateManyWithoutHotelNestedInputSchema } from './TVChannelsUncheckedUpdateManyWithoutHotelNestedInputSchema';

export const HotelUncheckedUpdateWithoutToursInputSchema: z.ZodType<Prisma.HotelUncheckedUpdateWithoutToursInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description_esp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locationDescription: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locationDescription_esp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => HotelUpdateimagesInputSchema),z.string().array() ]).optional(),
  videos: z.union([ z.lazy(() => HotelUpdatevideosInputSchema),z.string().array() ]).optional(),
  lat: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lng: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_reservation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone_tollfree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tripadvisor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  whatsapp: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  activities: z.lazy(() => ActivityUncheckedUpdateManyWithoutHotelNestedInputSchema).optional(),
  spa: z.lazy(() => SpaUncheckedUpdateManyWithoutHotelNestedInputSchema).optional(),
  amenities: z.lazy(() => AmenitiesUncheckedUpdateManyWithoutHotelNestedInputSchema).optional(),
  tvchannels: z.lazy(() => TVChannelsUncheckedUpdateManyWithoutHotelNestedInputSchema).optional()
}).strict();

export default HotelUncheckedUpdateWithoutToursInputSchema;
