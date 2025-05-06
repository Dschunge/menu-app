import prisma from "@/lib/db";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";
import DishContent from "./dish-content";

interface DishPageProps {
  params: Promise<{
    id: string;
    dishId: string;
  }>;
}

export default async function DishPage({ params }: DishPageProps) {
  const { id, dishId } = await params;
  const dish = await prisma.dish.findUnique({
    where: { id: dishId, restaurantId: id },
  });

  //if (!dish) return;

  return (
    <div className="container px-4 py-3 h-screen max-w-screen-lg ">
      <Suspense fallback={<Loader className="mx-auto py-10 text-stone-50" />}>
        {/* <pre>{JSON.stringify(dish, null, 2)}</pre> */}
        {/* <div>{id}</div> */}
        {/* <div>{dish}</div> */}
        {dish && (
          <DishContent restuarantId={id} dish={dish} relatedDishes={[]} />
        )}
      </Suspense>
    </div>
  );
}
