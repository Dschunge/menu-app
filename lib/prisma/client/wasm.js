
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.HotelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  country: 'country',
  state: 'state',
  city: 'city',
  locationDescription: 'locationDescription',
  locationDescription_esp: 'locationDescription_esp',
  images: 'images',
  videos: 'videos',
  lat: 'lat',
  lng: 'lng',
  phone: 'phone',
  phone_reservation: 'phone_reservation',
  phone_tollfree: 'phone_tollfree',
  email: 'email',
  website: 'website',
  facebook: 'facebook',
  tripadvisor: 'tripadvisor',
  instagram: 'instagram',
  youtube: 'youtube',
  whatsapp: 'whatsapp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.AmenitiesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  icon: 'icon',
  image: 'image',
  amenitiestype: 'amenitiestype',
  hotelId: 'hotelId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TourPriceCategoryScalarFieldEnum = {
  id: 'id',
  sku: 'sku',
  price: 'price',
  description: 'description',
  description_esp: 'description_esp',
  tourId: 'tourId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TourScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  hotelId: 'hotelId',
  price: 'price',
  priceKids: 'priceKids',
  category: 'category',
  offer: 'offer',
  discount: 'discount',
  whattobring: 'whattobring',
  included: 'included',
  pickuptime: 'pickuptime',
  maxPeople: 'maxPeople',
  minPeople: 'minPeople',
  minAge: 'minAge',
  bestSeller: 'bestSeller',
  priceInfo: 'priceInfo',
  location: 'location',
  offered: 'offered',
  duration: 'duration',
  videos: 'videos',
  images: 'images',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  profileImage: 'profileImage',
  hotelId: 'hotelId',
  type: 'type',
  start: 'start',
  end: 'end',
  price: 'price',
  cashOnly: 'cashOnly',
  freeOfCharge: 'freeOfCharge',
  location: 'location',
  isRecurring: 'isRecurring',
  recurrencePattern: 'recurrencePattern',
  recurrenceDays: 'recurrenceDays',
  recurrenceEndDate: 'recurrenceEndDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SpaPriceCategoryScalarFieldEnum = {
  id: 'id',
  sku: 'sku',
  price: 'price',
  description: 'description',
  description_esp: 'description_esp',
  duration: 'duration',
  spaId: 'spaId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SpaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  hotelId: 'hotelId',
  type: 'type',
  videos: 'videos',
  images: 'images',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TVChannelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  logo: 'logo',
  channelNo: 'channelNo',
  languages: 'languages',
  channeltype: 'channeltype',
  category: 'category',
  hotelId: 'hotelId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RestaurantScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  descriptionshort: 'descriptionshort',
  description_esp: 'description_esp',
  descriptionshort_esp: 'descriptionshort_esp',
  image: 'image',
  address: 'address',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  phone: 'phone',
  email: 'email',
  website: 'website',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  listorder: 'listorder'
};

exports.Prisma.MenuScalarFieldEnum = {
  id: 'id',
  position: 'position',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  price: 'price',
  restaurantId: 'restaurantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isActive: 'isActive'
};

exports.Prisma.TableScalarFieldEnum = {
  id: 'id',
  number: 'number',
  capacity: 'capacity',
  location: 'location',
  isActive: 'isActive',
  restaurantId: 'restaurantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  date: 'date',
  startTime: 'startTime',
  endTime: 'endTime',
  partySize: 'partySize',
  status: 'status',
  notes: 'notes',
  customerId: 'customerId',
  tableId: 'tableId',
  restaurantId: 'restaurantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  slug: 'slug',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  restaurantId: 'restaurantId',
  postition: 'postition'
};

exports.Prisma.SubcategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  slug: 'slug',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parentCategoryId: 'parentCategoryId',
  postition: 'postition'
};

exports.Prisma.SubSubcategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  slug: 'slug',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parentSubcategoryId: 'parentSubcategoryId',
  postition: 'postition'
};

exports.Prisma.DishScalarFieldEnum = {
  id: 'id',
  sku: 'sku',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  price: 'price',
  unit: 'unit',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  restaurantId: 'restaurantId',
  categoryId: 'categoryId',
  subcategoryId: 'subcategoryId',
  subSubcategoryId: 'subSubcategoryId',
  availableAtDayOfWeek: 'availableAtDayOfWeek',
  dietaryInfo: 'dietaryInfo',
  allergens: 'allergens',
  ingredients: 'ingredients',
  prepTime: 'prepTime',
  isPopular: 'isPopular',
  isNew: 'isNew',
  menuId: 'menuId',
  course_number: 'course_number'
};

exports.Prisma.OpeningHoursScalarFieldEnum = {
  id: 'id',
  dayOfWeek: 'dayOfWeek',
  openTime: 'openTime',
  closeTime: 'closeTime',
  isClosed: 'isClosed',
  restaurantId: 'restaurantId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.HotelOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  country: 'country',
  state: 'state',
  city: 'city',
  locationDescription: 'locationDescription',
  locationDescription_esp: 'locationDescription_esp',
  images: 'images',
  videos: 'videos',
  phone: 'phone',
  phone_reservation: 'phone_reservation',
  phone_tollfree: 'phone_tollfree',
  email: 'email',
  website: 'website',
  facebook: 'facebook',
  tripadvisor: 'tripadvisor',
  instagram: 'instagram',
  youtube: 'youtube',
  whatsapp: 'whatsapp'
};

exports.Prisma.AmenitiesOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  icon: 'icon',
  image: 'image',
  hotelId: 'hotelId'
};

exports.Prisma.TourPriceCategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  description: 'description',
  description_esp: 'description_esp',
  tourId: 'tourId'
};

exports.Prisma.TourOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  hotelId: 'hotelId',
  category: 'category',
  whattobring: 'whattobring',
  included: 'included',
  priceInfo: 'priceInfo',
  location: 'location',
  offered: 'offered',
  videos: 'videos',
  images: 'images'
};

exports.Prisma.ActivityOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  profileImage: 'profileImage',
  hotelId: 'hotelId',
  type: 'type',
  location: 'location',
  recurrenceDays: 'recurrenceDays'
};

exports.Prisma.SpaPriceCategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  description: 'description',
  description_esp: 'description_esp',
  spaId: 'spaId'
};

exports.Prisma.SpaOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  hotelId: 'hotelId',
  type: 'type',
  videos: 'videos',
  images: 'images'
};

exports.Prisma.TVChannelsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  logo: 'logo',
  channelNo: 'channelNo',
  category: 'category',
  hotelId: 'hotelId'
};

exports.Prisma.RestaurantOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  descriptionshort: 'descriptionshort',
  description_esp: 'description_esp',
  descriptionshort_esp: 'descriptionshort_esp',
  image: 'image',
  address: 'address',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  phone: 'phone',
  email: 'email',
  website: 'website'
};

exports.Prisma.MenuOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  restaurantId: 'restaurantId'
};

exports.Prisma.TableOrderByRelevanceFieldEnum = {
  id: 'id',
  location: 'location',
  restaurantId: 'restaurantId'
};

exports.Prisma.CustomerOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone'
};

exports.Prisma.ReservationOrderByRelevanceFieldEnum = {
  id: 'id',
  notes: 'notes',
  customerId: 'customerId',
  tableId: 'tableId',
  restaurantId: 'restaurantId'
};

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  slug: 'slug',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  restaurantId: 'restaurantId'
};

exports.Prisma.SubcategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  slug: 'slug',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  parentCategoryId: 'parentCategoryId'
};

exports.Prisma.SubSubcategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  slug: 'slug',
  description: 'description',
  description_esp: 'description_esp',
  image: 'image',
  parentSubcategoryId: 'parentSubcategoryId'
};

exports.Prisma.DishOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  name_esp: 'name_esp',
  description: 'description',
  description_esp: 'description_esp',
  unit: 'unit',
  image: 'image',
  restaurantId: 'restaurantId',
  categoryId: 'categoryId',
  subcategoryId: 'subcategoryId',
  subSubcategoryId: 'subSubcategoryId',
  dietaryInfo: 'dietaryInfo',
  allergens: 'allergens',
  ingredients: 'ingredients',
  menuId: 'menuId'
};

exports.Prisma.OpeningHoursOrderByRelevanceFieldEnum = {
  id: 'id',
  openTime: 'openTime',
  closeTime: 'closeTime',
  restaurantId: 'restaurantId'
};
exports.AMENITIESTYPE = exports.$Enums.AMENITIESTYPE = {
  HOTEL: 'HOTEL',
  ROOM: 'ROOM'
};

exports.RECURRINGPATTERN = exports.$Enums.RECURRINGPATTERN = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

exports.TVChannelLanguages = exports.$Enums.TVChannelLanguages = {
  ENGLISH: 'ENGLISH',
  SPANISH: 'SPANISH',
  BOTH: 'BOTH'
};

exports.TVCHANNELTYPE = exports.$Enums.TVCHANNELTYPE = {
  STANDARD: 'STANDARD',
  HD: 'HD'
};

exports.ReservationStatus = exports.$Enums.ReservationStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  NO_SHOW: 'NO_SHOW'
};

exports.Prisma.ModelName = {
  Hotel: 'Hotel',
  Amenities: 'Amenities',
  TourPriceCategory: 'TourPriceCategory',
  Tour: 'Tour',
  Activity: 'Activity',
  SpaPriceCategory: 'SpaPriceCategory',
  Spa: 'Spa',
  TVChannels: 'TVChannels',
  Restaurant: 'Restaurant',
  Menu: 'Menu',
  Table: 'Table',
  Customer: 'Customer',
  Reservation: 'Reservation',
  Category: 'Category',
  Subcategory: 'Subcategory',
  SubSubcategory: 'SubSubcategory',
  Dish: 'Dish',
  OpeningHours: 'OpeningHours'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
