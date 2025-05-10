"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Flame } from "lucide-react";
import type { Dish, Menu } from "@/lib/generated/modelSchema";
import { useLanguage } from "../providers/language-provider";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "motion/react";
import { DishDetailsDialog } from "./dish-details-dialog";
import { set } from "date-fns";
import { InactivityRedirect } from "../inactivity-redirect";

// type MenuWithDishes = Menu & {
//   restaurantId: string;
//   menus: (Menu & { dishes: Dish[] })[];
// };

// type MenuWithDishes = Menu & {
//   restaurantId: string;
//   menus: (Menu & { dishes: Dish[] })[];
// };

interface RestaurantMenusProps {
  menus: any[];
  restaurantId: string;
}

export function RestaurantMenus({ menus, restaurantId }: RestaurantMenusProps) {
  const { t } = useLanguage();
  const [activeMenu, setActiveMenu] = useState(menus[0]?.id || "");
  const [openDialog, setOpenDialog] = useState(false);
  const [dish, setDish] = useState<Dish | null>(null);

  return (
    <>
      <DishDetailsDialog
        dish={dish}
        open={openDialog}
        onOpenChange={() => {
          console.log("onOpenChange");
          setOpenDialog(false);
        }}
      />

      <div className="w-full">
        <Tabs
          defaultValue={menus[0]?.id}
          className="w-full"
          onValueChange={setActiveMenu}
        >
          <div className="mb-8">
            <TabsList className="w-full h-auto flex flex-wrap gap-2">
              {menus.map((menu) => (
                <TabsTrigger
                  key={menu.id}
                  value={menu.id}
                  className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-lg"
                >
                  {t(menu.name, menu.name_esp)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menus.map((menu) => (
            <TabsContent key={menu.id} value={menu.id} className="w-full">
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl">
                        {t(menu.name, menu.name_esp)}
                      </CardTitle>
                      {/* <CardDescription className="mt-2">
                      {menu.description}
                    </CardDescription> */}
                    </div>
                    <div className="text-2xl font-bold">
                      ${menu.price.toFixed(2)} {t("per person", "por persona")}
                    </div>
                    <div className="text-xl flex items-center gap-2 mt-1">
                      {t(menu.description, menu.description_esp)}
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="space-y-6">
                {menu.dishes
                  //.slice()
                  .sort((a: Dish, b: Dish) => a.course_number - b.course_number)
                  .map((dish: Dish) => {
                    return (
                      <Card
                        key={dish.id}
                        className="overflow-hidden"
                        onClick={() => {
                          setDish(dish);
                          setOpenDialog(true);
                        }}
                      >
                        {/* <Link
                          href={`/restaurants/${restaurantId}/dish/${dish.id}`}
                          className="text-lg inline-flex items-center font-medium text-primary hover:underline"
                        > */}
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative w-full sm:w-48 h-48">
                            <Image
                              src={dish.image || "/placeholder.svg"}
                              alt={dish.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 192px"
                              priority
                            />
                          </div>
                          <CardContent className="flex-1 p-4 sm:p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-lg text-muted-foreground mb-1">
                                  {t("COURSE", "CURSO")} {dish.course_number}
                                </div>
                                <h4 className="text-2xl font-bold">
                                  {t(dish.name, dish.name_esp)}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                  {dish.isNew && (
                                    <Badge
                                      variant="secondary"
                                      className="flex items-center gap-1"
                                    >
                                      <Sparkles className="h-3 w-3" />
                                      {t("NEW", "NUEVO")}
                                    </Badge>
                                  )}
                                  {dish.isPopular && (
                                    <Badge
                                      variant="outline"
                                      className="flex items-center gap-1"
                                    >
                                      <Flame className="h-3 w-3 text-orange-500" />
                                      {t("POPULAR", "POPULAR")}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <p className="text-lg text-muted-foreground mt-3">
                              {t(dish.description, dish.description_esp)}
                            </p>
                            <div className="mt-4 flex justify-end">
                              <div
                                //href={`/restaurants/${restaurantId}/dish/${dish.id}`}
                                className="text-lg inline-flex items-center font-medium text-primary hover:underline"
                              >
                                {t("View details", "Ver detalles")}
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </div>
                            </div>
                          </CardContent>
                        </div>
                        {/* </Link> */}
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/* Inactivity redirect component - 60 second timeout */}
      <InactivityRedirect timeoutInSeconds={30} redirectPath="/" />
    </>
  );
}
