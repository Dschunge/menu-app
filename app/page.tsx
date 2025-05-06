import prisma from "@/lib/db";
import { Restaurant } from "@/lib/prisma/client";
import ResaturanMainPage from "@/components/resturant/restaurant-main-page";

export default async function HomePage() {
  const restaurants = await prisma.restaurant.findMany({
    orderBy: {
      listorder: "asc",
    },
    include: {
      openingHours: true,
    },
  });

  function filterRestaurantsById(restaurants: any[], includeIds: string[]) {
    return restaurants.filter((restaurant) =>
      includeIds.includes(restaurant.id)
    );
  }

  // Filter the Restaurants based on the IDs you want to include
  const includeIds1 = [
    "cf4b3709-aae5-4395-b8e2-c9933ac50eb0",
    "bb7abe62-c2b4-4df9-91e2-451362e635ba",
  ]; // Replace with the IDs you want to exclude
  const includeIds_test = [
    "2a319748-b583-46e7-8e07-40712d04f891",
    "7e56a439-83af-4171-a1c2-2e853306d849",
  ]; // Replace with the IDs you want to exclude

  const includeIds_diria = [
    "cf4b3709-aae5-4395-b8e2-c9933ac50eb0",
    "fc41a792-b78e-4184-9914-179e692cdcd7",
  ]; // Replace with the IDs you want to exclude

  const filteredRestaurants: Restaurant[] = filterRestaurantsById(
    restaurants,
    includeIds_diria
  );

  return <ResaturanMainPage restaurants={filteredRestaurants} />;
}
