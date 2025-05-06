"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, Search } from "lucide-react";
import DishCard from "@/components/dish-card_old";
import { Button } from "./ui/button";

// Define types for our hierarchical structure
type SubSubCategory = {
  id: string;
  name: string;
  dishes: any[];
};

type SubCategory = {
  id: string;
  name: string;
  dishes: any[];
  subSubcategories: SubSubCategory[];
};

type Category = {
  id: string;
  name: string;
  dishes: any[];
  subcategories: SubCategory[];
};

interface RestaurantMenuProps {
  categories: Category[];
}

export default function RestaurantMenu({ categories }: RestaurantMenuProps) {
  // Navigation state
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    categories[0] || null
  );
  const [activeSubcategory, setActiveSubcategory] =
    useState<SubCategory | null>(null);
  const [activeSubSubcategory, setActiveSubSubcategory] =
    useState<SubSubCategory | null>(null);
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
  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
    setActiveSubSubcategory(null);
    setNavigationLevel("category");
  };

  // Handle subcategory selection
  const handleSubcategorySelect = (subcategory: SubCategory) => {
    setActiveSubcategory(subcategory);
    setActiveSubSubcategory(null);
    setNavigationLevel("subcategory");
  };

  // Handle subsubcategory selection
  const handleSubSubcategorySelect = (subSubcategory: SubSubCategory) => {
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
      return activeSubSubcategory.dishes;
    } else if (navigationLevel === "subcategory" && activeSubcategory) {
      return activeSubcategory.dishes;
    } else if (navigationLevel === "category" && activeCategory) {
      return activeCategory.dishes;
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
      return activeSubSubcategory.name;
    } else if (navigationLevel === "subcategory" && activeSubcategory) {
      return activeSubcategory.name;
    } else if (navigationLevel === "category" && activeCategory) {
      return activeCategory.name;
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
    <div>
      {/* Search bar */}
      <div className="mb-4">
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
      </div>

      {/* Top-level categories */}
      <div className="relative mb-3">
        <div className="overflow-x-auto no-scrollbar py-1">
          <div className="flex ">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className={`px-5 rounded-lg whitespace-nowrap text-lg font-semibold transition-colors ${
                  activeCategory?.id === category.id
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                // variant={
                //   activeCategory?.id === category.id ? "link" : "secondary"
                // }
                //size="lg"
                aria-label={`Select ${category.name}`}
                title={`Select ${category.name}`}
              >
                {category.name}
              </button>
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
            {navigationLevel === "subcategory"
              ? `${activeCategory?.name} / ${activeSubcategory?.name}`
              : `${activeCategory?.name} / ${activeSubcategory?.name} / ${activeSubSubcategory?.name}`}
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
                    {subcategory.name}
                  </button>
                ))}

              {navigationLevel === "subcategory" &&
                activeSubcategory?.subSubcategories.map((subSubcategory) => (
                  <button
                    key={subSubcategory.id}
                    onClick={() => handleSubSubcategorySelect(subSubcategory)}
                    className="px-5 py-0 rounded-lg whitespace-nowrap text-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {subSubcategory.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Dishes section */}
      <div className="mt-10">
        {searchQuery ? (
          <div>
            <h3 className="font-medium text-lg mb-3">Search Results</h3>
            {filteredDishes.length > 0 ? (
              <div className="grid gap-4">
                {filteredDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
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
            <h3 className="font-medium text-lg mb-3">{getCurrentTitle()}</h3>
            {filteredDishes.length > 0 ? (
              <div className="grid gap-4">
                {filteredDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            ) : (
              <p className="text-center py-4 text-gray-500">
                No dishes available in this section
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
