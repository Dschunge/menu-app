import { z } from 'zod';

export const TVCHANNELTYPESchema = z.enum(['STANDARD','HD']);

export type TVCHANNELTYPEType = `${z.infer<typeof TVCHANNELTYPESchema>}`

export default TVCHANNELTYPESchema;
