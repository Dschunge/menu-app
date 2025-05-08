import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Flame, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "./providers/language-provider";
//import type { Dish } from "@/types/dish"

interface DishCardProps {
  restaurantId: string;
  dish: any;
  viewMode: "list" | "grid";
}

export function DishCardNew({ restaurantId, dish, viewMode }: DishCardProps) {
  const { t } = useLanguage();
  const {
    name,
    name_esp,
    description,
    description_esp,
    price,
    isNew,
    isPopular,
    image,
    id,
  } = dish;

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 h-48">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 192px"
              priority
            />
          </div>
          <CardContent className="flex-1 p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{t(name, name_esp)}</h3>
                <div className="flex items-center gap-2 mt-1">
                  {isNew && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Sparkles className="h-3 w-3" />
                      New
                    </Badge>
                  )}
                  {isPopular && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Flame className="h-3 w-3 text-orange-500" />
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-lg font-bold">${price.toFixed(2)}</div>
            </div>
            <p className="text-muted-foreground mt-3 line-clamp-3">
              {t(description, description_esp)}
            </p>
            <div className="mt-4 flex justify-end">
              <Link
                href={`/restaurants/${restaurantId}/dish/${dish.id}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                {t("View details", "Ver detalles")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link
        href={`/restaurants/${restaurantId}/dish/${dish.id}`}
        //className="inline-flex items-center text-lg font-medium text-primary hover:underline"
      >
        <div className="relative w-full h-48 mt-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            {isNew && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                New
              </Badge>
            )}
            {isPopular && (
              <Badge
                variant="outline"
                className="bg-white/80 backdrop-blur-sm flex items-center gap-1"
              >
                <Flame className="h-3 w-3 text-orange-500" />
                Popular
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold">{t(name, name_esp)}</h3>
            <div className="text-lg font-bold">${price.toFixed(2)}</div>
          </div>
          <p className="text-xl text-muted-foreground line-clamp-3">
            {t(description, description_esp)}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="mt-auto pt-4 flex justify-end">
        <Link
          href={`/restaurants/${restaurantId}/dish/${dish.id}`}
          className="inline-flex items-center text-lg font-medium text-primary hover:underline"
        >
          {t("View details", "Ver detalles")}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
