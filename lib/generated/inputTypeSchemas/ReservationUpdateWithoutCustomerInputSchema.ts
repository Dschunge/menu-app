import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ReservationStatusSchema } from './ReservationStatusSchema';
import { EnumReservationStatusFieldUpdateOperationsInputSchema } from './EnumReservationStatusFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TableUpdateOneWithoutReservationsNestedInputSchema } from './TableUpdateOneWithoutReservationsNestedInputSchema';
import { RestaurantUpdateOneRequiredWithoutReservationsNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutReservationsNestedInputSchema';

export const ReservationUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.ReservationUpdateWithoutCustomerInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  partySize: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ReservationStatusSchema),z.lazy(() => EnumReservationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  table: z.lazy(() => TableUpdateOneWithoutReservationsNestedInputSchema).optional(),
  restaurant: z.lazy(() => RestaurantUpdateOneRequiredWithoutReservationsNestedInputSchema).optional()
}).strict();

export default ReservationUpdateWithoutCustomerInputSchema;
