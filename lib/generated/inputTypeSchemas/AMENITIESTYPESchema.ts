import { z } from 'zod';

export const AMENITIESTYPESchema = z.enum(['HOTEL','ROOM']);

export type AMENITIESTYPEType = `${z.infer<typeof AMENITIESTYPESchema>}`

export default AMENITIESTYPESchema;
