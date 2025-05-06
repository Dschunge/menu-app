"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Sparkles, ArrowLeft } from "lucide-react";
import type { Dish } from "@/lib/generated/modelSchema";

interface DishContentProps {
  restuarantId: string;
  dish: Dish;
  relatedDishes: Dish[];
}

export default function DishContent({
  restuarantId,
  dish,
  relatedDishes,
}: DishContentProps) {
  //const dish = dishes.find((d) => d.id === params.id)

  if (!dish) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href={`/restaurants/${restuarantId}`}
        className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to menu
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={dish.image || "/placeholder.svg"}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{dish.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                {dish.isNew && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Sparkles className="h-3 w-3" />
                    New
                  </Badge>
                )}
                {dish.isPopular && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Flame className="h-3 w-3 text-orange-500" />
                    Popular
                  </Badge>
                )}
              </div>
            </div>
            {/* <div className="text-2xl font-bold">${dish.price.toFixed(2)}</div> */}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description:</h2>
            <p className="text-xl text-muted-foreground">{dish.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Dietary Information</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span>Vegetarian</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <span>Spicy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <span>Contains nuts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span>Gluten-free</span>
              </div>
            </div>
          </div>

          {/* <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto">
              Add to order
            </Button>
          </div> */}
        </div>
      </div>
    </main>
  );
}

// import { ArrowLeft, Clock } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useLanguage } from "@/components/providers/language-provider";
// import DishCard from "@/components/dish-card-vertical";
// import { FavoritesButton } from "@/components/favorites-button";
// import type { Dish } from "@/lib/generated/prisma/client";

// interface DishContentProps {
//   dish: Dish;
//   relatedDishes: Dish[];
// }

// export default function DishContent({ dish, relatedDishes }: DishContentProps) {
//   const { language } = useLanguage();

//   const displayName =
//     language === "en" ? dish.name : dish.name_esp || dish.name;
//   const displayDescription =
//     language === "en"
//       ? dish.description
//       : dish.description_esp || dish.description;

//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-10 border-b border-muted bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20">
//         <div className="container flex h-16 items-center gap-4 py-4">
//           <Button variant="ghost" size="icon" asChild>
//             <Link href="/menu">
//               <ArrowLeft className="h-5 w-5" />
//               <span className="sr-only">
//                 {language === "en" ? "Back to menu" : "Volver al menú"}
//               </span>
//             </Link>
//           </Button>
//           <h1 className="text-xl font-bold">{displayName}</h1>
//         </div>
//       </header>

//       <main className="flex-1">
//         <div className="container py-6">
//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="relative aspect-square overflow-hidden rounded-xl">
//               <Image
//                 src={dish.image || "/placeholder.svg?height=600&width=600"}
//                 alt={displayName}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority
//               />
//               {dish.isNew && (
//                 <Badge
//                   className="absolute left-4 top-4"
//                   style={{ backgroundColor: "#10b981", borderColor: "#10b981" }}
//                 >
//                   {language === "en" ? "New" : "Nuevo"}
//                 </Badge>
//               )}
//               {dish.isPopular && (
//                 <Badge
//                   variant="secondary"
//                   className="absolute left-4 top-14"
//                   style={{
//                     backgroundColor: "#f59e0b",
//                     borderColor: "#f59e0b",
//                     color: "black",
//                   }}
//                 >
//                   {language === "en" ? "Popular" : "Popular"}
//                 </Badge>
//               )}
//             </div>

//             <div className="flex flex-col">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-3xl font-bold">{displayName}</h1>
//                   {dish.name_esp && dish.name_esp !== dish.name && (
//                     <p className="text-sm text-muted-foreground">
//                       {language === "en" ? dish.name_esp : dish.name}
//                     </p>
//                   )}
//                 </div>
//                 {/* <FavoritesButton dishId={dish.id} dishName={displayName} /> */}
//               </div>

//               <div className="mt-2 flex items-center gap-2">
//                 <Badge variant="outline">
//                   {language === "en" ? "Category" : "Categoría"}
//                 </Badge>
//                 {dish.dietaryInfo &&
//                   dish.dietaryInfo.map((info) => (
//                     <Badge key={info} variant="secondary">
//                       {info}
//                     </Badge>
//                   ))}
//               </div>

//               <div className="mt-4 flex items-center gap-2">
//                 <Clock className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-sm text-muted-foreground">
//                   {language === "en"
//                     ? `${dish.prepTime} mins prep time`
//                     : `${dish.prepTime} mins tiempo de preparación`}
//                 </span>
//               </div>

//               <div className="mt-6 flex items-center gap-2">
//                 <p className="text-2xl font-bold">${dish.price.toFixed(2)}</p>
//                 {dish.unit && (
//                   <p className="text-sm text-muted-foreground">{dish.unit}</p>
//                 )}
//               </div>

//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold">
//                   {language === "en" ? "Description" : "Descripción"}
//                 </h3>
//                 <p className="mt-2 text-muted-foreground">
//                   {displayDescription}
//                 </p>
//               </div>

//               {dish.allergens && dish.allergens.length > 0 && (
//                 <div className="mt-6">
//                   <h3 className="text-lg font-semibold">
//                     {language === "en" ? "Allergens" : "Alérgenos"}
//                   </h3>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {dish.allergens.map((allergen) => (
//                       <Badge key={allergen} variant="destructive">
//                         {allergen}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {relatedDishes.length > 0 && (
//             <div className="mt-12">
//               <h2 className="mb-6 text-2xl font-bold">
//                 {language === "en"
//                   ? "You Might Also Like"
//                   : "También Te Puede Gustar"}
//               </h2>
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {relatedDishes.map((dish) => (
//                   <DishCard key={dish.id} dish={dish} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }
