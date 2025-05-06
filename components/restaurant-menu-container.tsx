import prisma from "@/lib/db";
// import RestaurantMenu from "@/components/restaurant-menu_old";
import { RestaurantMenu } from "@/components/restaurant-menu";

// Generate sample dish images for demonstration
const dishImageTypes = [
  "german-sausage",
  "schnitzel",
  "pretzel",
  "beer",
  "german-food",
  "bavarian-meal",
];

export default async function RestaurantMenuContainer({
  restaurantId,
}: {
  restaurantId: string;
}) {
  // Get categories with subcategories, subsubcategories, and dishes for this restaurant
  const categories = await prisma.category.findMany({
    where: {
      restaurantId: restaurantId,
    },
    include: {
      subcategories: {
        include: {
          subSubcategories: {
            include: {
              dishes: true,
            },
            orderBy: {
              postition: "asc",
            },
          },
          dishes: true,
        },
        orderBy: {
          postition: "asc",
        },
      },

      dishes: true,
    },
    orderBy: {
      //name: "asc",
      postition: "asc",
    },
  });

  if (categories.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          No menu items available for this restaurant.
        </p>
      </div>
    );
  }

  console.log({ categories });

  // Add sample images to dishes for demonstration
  const categoriesWithImages = categories.map((category, catIndex) => ({
    ...category,
    dishes: category.dishes.map((dish, dishIndex) => ({
      ...dish,
      image:
        dish.image ||
        `/placeholder.svg?height=120&width=120&query=${
          dishImageTypes[(catIndex + dishIndex) % dishImageTypes.length]
        }`,
    })),
    subcategories: category.subcategories.map((subcategory, subIndex) => ({
      ...subcategory,
      dishes: subcategory.dishes.map((dish, dishIndex) => ({
        ...dish,
        image:
          dish.image ||
          `/placeholder.svg?height=120&width=120&query=${
            dishImageTypes[
              (catIndex + subIndex + dishIndex) % dishImageTypes.length
            ]
          }`,
      })),
      subSubcategories: subcategory.subSubcategories.map(
        (subSubcategory, subSubIndex) => ({
          ...subSubcategory,
          dishes: subSubcategory.dishes.map((dish, dishIndex) => ({
            ...dish,
            image:
              dish.image ||
              `/placeholder.svg?height=120&width=120&query=${
                dishImageTypes[
                  (catIndex + subIndex + subSubIndex + dishIndex) %
                    dishImageTypes.length
                ]
              }`,
          })),
        })
      ),
    })),
  }));

  return (
    <RestaurantMenu
      restaurantId={restaurantId}
      categories={categoriesWithImages}
    />
  );
}
