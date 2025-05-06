import { z } from 'zod';

export const TVChannelsScalarFieldEnumSchema = z.enum(['id','name','name_esp','description','description_esp','logo','channelNo','languages','channeltype','category','hotelId','createdAt','updatedAt']);

export default TVChannelsScalarFieldEnumSchema;
