import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { RestaurantCard, RestaurantWithOpeningHours } from "./restaurant-card";

export default async function RestaurantList() {
  const restaurants = await prisma.restaurant.findMany({
    orderBy: {
      listorder: "asc",
    },
    include: {
      openingHours: true,
    },
  });

  // Get today's day of week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => {
        // Get today's opening hours
        const todayHours = restaurant.openingHours.find(
          (hours) => hours.dayOfWeek === today
        );
        const isOpen = todayHours && !todayHours.isClosed;

        return (
          // <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
          //   <Card className="overflow-hidden hover:shadow-md transition-shadow">
          //     <div className="relative h-40 w-full">
          //       {restaurant.image ? (
          //         <Image
          //           src={restaurant.image || "/placeholder.svg"}
          //           alt={restaurant.name}
          //           fill
          //           className="object-cover"
          //         />
          //       ) : (
          //         <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          //           <span className="text-gray-500">No image available</span>
          //         </div>
          //       )}
          //       {isOpen && (
          //         <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          //           Open
          //         </div>
          //       )}
          //     </div>
          //     <CardContent className="p-4">
          //       <h2 className="text-xl font-semibold">{restaurant.name}</h2>
          //       <p className="text-gray-600 line-clamp-2 mt-1">
          //         {restaurant.descriptionshort || restaurant.description?.substring(0, 100) || ""}
          //       </p>
          //     </CardContent>
          //   </Card>
          // </Link>
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            //isOpen={isOpen}
            //todayHours={todayHours}
            // todayHours={todayHours}
          />
        );
      })}
    </div>
  );
}
