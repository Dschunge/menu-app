import { z } from 'zod';

export const TVChannelsOrderByRelevanceFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','logo','channelNo','category','hotelId']);

export default TVChannelsOrderByRelevanceFieldEnumSchema;
