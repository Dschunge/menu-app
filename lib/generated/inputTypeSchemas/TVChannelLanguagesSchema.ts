import { z } from 'zod';

export const TVChannelLanguagesSchema = z.enum(['ENGLISH','SPANISH','BOTH']);

export type TVChannelLanguagesType = `${z.infer<typeof TVChannelLanguagesSchema>}`

export default TVChannelLanguagesSchema;
