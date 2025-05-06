import { z } from 'zod';

export const RECURRINGPATTERNSchema = z.enum(['DAILY','WEEKLY','MONTHLY']);

export type RECURRINGPATTERNType = `${z.infer<typeof RECURRINGPATTERNSchema>}`

export default RECURRINGPATTERNSchema;
