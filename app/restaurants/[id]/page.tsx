//import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/db";
import RestaurantMenuContainer from "@/components/restaurant-menu-container";
import { Loader } from "@/components/ui/loader";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { Suspense } from "react";
import LanguageToggle from "@/components/language-toggle";
import { RestaurantMenus } from "@/components/resturant/restaurant-menus";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

interface RestaurantPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { id } = await params;
  const restaurant = await prisma.restaurant.findUnique({
    where: { id },
    include: {
      openingHours: {
        orderBy: {
          dayOfWeek: "asc",
        },
      },
      menus: {
        include: {
          dishes: true,
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!restaurant) {
    notFound();
  }

  return (
    <main className="mt-0">
      <div className="container mx-auto px-4 max-w-screen">
        <div className="flex items-center justify-between py-3 w-full">
          <div className="relative flex justify-end items-center">
            <Link href="/" className="mr-0">
              <div className="rounded-full ">
                <ChevronLeft className="h-5 w-5" />
              </div>
            </Link>
          </div>
          {restaurant.image && (
            <div className="relative w-full sm:w-48 h-10">
              <Image
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="relative flex justify-end items-center mr-0">
            <LanguageToggle />
          </div>
        </div>
      </div>
      {/* <div className="container px-4 py-3 max-w-screen-lg"> */}
      <div className="container mx-auto px-4 py-2">
        <Suspense fallback={<Loader className="mx-auto py-0" />}>
          {/* <pre>{JSON.stringify(restaurant.menus, null, 2)}</pre> */}
          {/* Show menus if they exist and are not empty */}
          {restaurant.menus && restaurant.menus.length > 0 ? (
            <RestaurantMenus
              menus={restaurant.menus}
              restaurantId={restaurant.id}
            />
          ) : (
            <RestaurantMenuContainer restaurantId={restaurant.id} />
          )}
          {/* <RestaurantMenuContainer restaurantId={restaurant.id} /> */}
        </Suspense>
      </div>
    </main>
  );
}
