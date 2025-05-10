"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, Grid2X2, List, Search } from "lucide-react";
import { DishCardNew } from "./dis-card-new";
import { Button } from "./ui/button";
import { useLanguage } from "./providers/language-provider";
import {
  Category,
  Subcategory,
  SubSubcategory,
  Dish,
} from "@/lib/generated/modelSchema";
import { InactivityRedirect } from "./inactivity-redirect";
import { Card, CardContent } from "./ui/card";

// Define types for our hierarchical structure
// type SubSubCategory = {
//   id: string;
//   name: string;
//   dishes: any[];
// };

// type SubCategory1 = {
//   id: string;
//   name: string;
//   dishes: any[];
//   subSubcategories: SubSubCategory[];
// };

export type SubCategoryWithSubSubCategories = Subcategory & {
  dishes: Dish[];
  subSubcategories: (SubSubcategory & { dishes: Dish[] })[];
};

// export type Category1 = {
//   id: string;
//   name: string;
//   //name_esp: string;
//   dishes: any[];
//   subcategories: Subcategory[];
// };

export type CategoriesWithSubCategories = Category & {
  // id: string;
  // name: string;
  dishes: Dish[];
  subcategories: SubCategoryWithSubSubCategories[];
};

interface RestaurantMenuProps {
  restaurantId?: string;
  categories: CategoriesWithSubCategories[];
}

export function RestaurantMenu({
  restaurantId,
  categories,
}: RestaurantMenuProps) {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  // Navigation state
  const [activeCategory, setActiveCategory] =
    useState<CategoriesWithSubCategories | null>(categories[0] || null);

  const [activeSubcategory, setActiveSubcategory] =
    useState<SubCategoryWithSubSubCategories | null>(null);

  const [activeSubSubcategory, setActiveSubSubcategory] = useState<
    (SubSubcategory & { dishes: Dish[] }) | null
  >(null);

  const [navigationLevel, setNavigationLevel] = useState<
    "category" | "subcategory" | "subsubcategory"
  >("category");
  const [searchQuery, setSearchQuery] = useState("");

  // Reset navigation when component mounts
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0]);
      setActiveSubcategory(null);
      setActiveSubSubcategory(null);
      setNavigationLevel("category");
    }
  }, [categories]);

  // Handle category selection
  const handleCategorySelect = (category: CategoriesWithSubCategories) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
    setActiveSubSubcategory(null);
    setNavigationLevel("category");
  };

  // Handle subcategory selection
  const handleSubcategorySelect = (
    subcategory: SubCategoryWithSubSubCategories
  ) => {
    setActiveSubcategory(subcategory);
    setActiveSubSubcategory(null);
    setNavigationLevel("subcategory");
  };

  // Handle subsubcategory selection
  const handleSubSubcategorySelect = (
    subSubcategory: SubSubcategory & { dishes: Dish[] }
  ) => {
    setActiveSubSubcategory(subSubcategory);
    setNavigationLevel("subsubcategory");
  };

  // Handle navigation back
  const handleNavigateBack = () => {
    if (navigationLevel === "subsubcategory") {
      setActiveSubSubcategory(null);
      setNavigationLevel("subcategory");
    } else if (navigationLevel === "subcategory") {
      setActiveSubcategory(null);
      setNavigationLevel("category");
    }
  };

  // Get current dishes to display based on navigation level
  const getCurrentDishes = () => {
    if (navigationLevel === "subsubcategory" && activeSubSubcategory) {
      return activeSubSubcategory ? activeSubSubcategory.dishes : [];
    } else if (navigationLevel === "subcategory" && activeSubcategory) {
      return activeSubcategory.dishes;
    } else if (navigationLevel === "category" && activeCategory) {
      return []; // activeCategory.dishes;
    }
    return [];
  };

  // Get current navigation items based on navigation level
  const getNavigationItems = () => {
    if (navigationLevel === "category" && activeCategory) {
      return activeCategory.subcategories;
    } else if (navigationLevel === "subcategory" && activeSubcategory) {
      return activeSubcategory.subSubcategories;
    }
    return [];
  };

  // Get current title based on navigation level
  const getCurrentTitle = () => {
    if (navigationLevel === "subsubcategory" && activeSubSubcategory) {
      return t(activeSubSubcategory.name, activeSubcategory?.name_esp || "");
    } else if (navigationLevel === "subcategory" && activeSubcategory) {
      return t(activeSubcategory.name, activeSubcategory?.name_esp || "");
    } else if (navigationLevel === "category" && activeCategory) {
      return t(activeCategory.name, activeCategory?.name_esp || "");
    }
    return "Menu";
  };

  // Get current title based on navigation level
  const getCurrentDescription = () => {
    if (navigationLevel === "subsubcategory" && activeSubSubcategory) {
      return t(
        activeSubSubcategory?.description || "",
        activeSubcategory?.description_esp || ""
      );
    } else if (navigationLevel === "subcategory" && activeSubcategory) {
      return t(
        activeSubcategory?.description || "",
        activeSubcategory?.description_esp || ""
      );
    } else if (navigationLevel === "category" && activeCategory) {
      return t(
        activeCategory?.description || "",
        activeCategory?.description_esp || ""
      );
    }
    return "Menu";
  };

  // Filter dishes by search query
  const filteredDishes = searchQuery
    ? getCurrentDishes().filter(
        (dish) =>
          dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dish.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : getCurrentDishes();

  // Debug information
  console.log("Navigation Level:", navigationLevel);
  console.log("Active Category:", activeCategory?.name);
  console.log("Active Subcategory:", activeSubcategory?.name);
  console.log("Active SubSubcategory:", activeSubSubcategory?.name);
  console.log("Current Dishes:", getCurrentDishes().length);
  console.log("Navigation Items:", getNavigationItems().length);

  return (
    <div className="">
      {/* Search bar */}
      {/* <div className="mb-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-3 py-2 text-sm border rounded-full w-full focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div> */}

      {/* Top-level categories */}
      <div className="relative mb-3">
        <div className="overflow-x-auto no-scrollbar py-1">
          <div className="flex ">
            {categories.map((category) => (
              <Button
                key={category.id}
                //variant={activeCategory?.id === category.id ? "link" : "ghost"}
                variant={
                  activeCategory?.id === category.id ? "default" : "ghost"
                }
                //size="lg"
                onClick={() => handleCategorySelect(category)}
                aria-label="List view"
                className="flex items-center gap-2 text-xl"
              >
                {/* <List className="h-4 w-4" /> */}
                <span className="hidden sm:inline">
                  {t(category.name || "", category.name_esp || "")}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation header with back button */}
      {(navigationLevel === "subcategory" ||
        navigationLevel === "subsubcategory") && (
        <div className="flex items-center mb-3">
          <button
            onClick={handleNavigateBack}
            className="mr-2 p-0 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold">
            {/* {navigationLevel === "subcategory"
              ? `${t(
                  activeCategory?.name || "",
                  activeCategory?.name_esp || ""
                )} / ${t(
                  activeSubcategory?.name || "",
                  activeSubcategory?.name_esp || ""
                )}`
              : `${t(
                  activeCategory?.name || "",
                  activeCategory?.name_esp || ""
                )} / ${t(
                  activeSubcategory?.name || "",
                  activeSubcategory?.name_esp || ""
                )} / ${t(
                  activeSubSubcategory?.name || "",
                  activeSubSubcategory?.name_esp || ""
                )}`} */}
            {navigationLevel === "subcategory"
              ? ` ${t(
                  activeSubcategory?.name || "",
                  activeSubcategory?.name_esp || ""
                )}`
              : `${t(
                  activeSubcategory?.name || "",
                  activeSubcategory?.name_esp || ""
                )} / ${t(
                  activeSubSubcategory?.name || "",
                  activeSubSubcategory?.name_esp || ""
                )}`}
          </h2>
        </div>
      )}

      {/* Subcategories or SubSubcategories */}
      {getNavigationItems().length > 0 && (
        <div className="flex items-center mb-3">
          <div className="overflow-x-auto no-scrollbar py-0">
            <div className="flex  pb-0">
              {navigationLevel === "category" &&
                activeCategory?.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategorySelect(subcategory)}
                    className="px-5 py-0 rounded-lg whitespace-nowrap text-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {t(subcategory.name, subcategory.name_esp || "")}
                  </button>
                ))}

              {/* {navigationLevel === "subcategory" &&
                activeSubcategory?.subSubcategories.map((subSubcategory) => (
                  <button
                    key={subSubcategory.id}
                    onClick={() => handleSubSubcategorySelect(subSubcategory)}
                    className="px-5 py-0 rounded-lg whitespace-nowrap text-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {t(subSubcategory.name, subSubcategory.name_esp || "")}
                  </button>
                ))} */}
            </div>
          </div>
        </div>
      )}

      {/* Dishes section */}
      <div className="mt-0">
        <div className="flex justify-end mb-2">
          {/* <div className="bg-muted rounded-lg p-1 inline-flex">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              aria-label="List view"
              className="flex items-center gap-2"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">{t("List", "Lista")}</span>
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              className="flex items-center gap-2"
            >
              <Grid2X2 className="h-4 w-4" />
              <span className="hidden sm:inline">{t("Grid", "Rejilla")}</span>
            </Button>
          </div> */}
        </div>

        {searchQuery ? (
          <div>
            <h3 className="font-medium text-lg mb-3">
              {t("Search Results", "Resultados de la búsqueda")}
            </h3>
            {filteredDishes.length > 0 ? (
              <div
                className={
                  viewMode === "list"
                    ? "grid gap-4"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                }
              >
                {filteredDishes.map((dish) => (
                  // <DishCard key={dish.id} dish={dish} />
                  <DishCardNew
                    key={dish.id}
                    restaurantId={restaurantId || ""}
                    dish={dish}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center py-4 text-gray-500">
                No dishes found matching "{searchQuery}"
              </p>
            )}
          </div>
        ) : (
          <div>
            {/* <h3 className="font-medium text-lg mb-3">{getCurrentTitle()}</h3> */}
            <Card
              className={getCurrentDescription().length > 0 ? "mb-4" : "hidden"}
            >
              {/* <CardHeader></CardHeader> */}
              <CardContent className="">
                <div className="flex items-center justify-center mt-4">
                  <h2 className="text-xl">{getCurrentDescription()}</h2>
                </div>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
            {filteredDishes.length > 0 ? (
              <div
                className={
                  viewMode === "list"
                    ? "grid gap-4"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                }
              >
                {filteredDishes.map((dish) => (
                  // <DishCard key={dish.id} dish={dish} />
                  <DishCardNew
                    key={dish.id}
                    restaurantId={restaurantId || ""}
                    dish={dish}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <p className="text-xl text-center py-32 text-gray-500">
                {t(
                  "Please select a subcategory to view dishes.",
                  "Por favor, seleccione una subcategoría para ver los platos."
                )}
              </p>
            )}
          </div>
        )}
      </div>
      {/* Inactivity redirect component - 60 second timeout */}
      {/* <InactivityRedirect timeoutInSeconds={160} redirectPath="/" /> */}
    </div>
  );
}
