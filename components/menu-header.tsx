"use client";
import Link from "next/link";
import { useLanguage } from "./providers/language-provider";
import { ChevronLeft } from "lucide-react";
import { Restaurant } from "@/lib/prisma/client";
import LanguageToggle from "./language-toggle";
import Image from "next/image";

interface DishCardProps {
  restaurant: Restaurant;
}

export function MenuHeader({ restaurant }: DishCardProps) {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 max-w-screen">
      <div className="flex items-center justify-between py-3 w-full">
        <div className="relative flex justify-end items-center">
          <Link href="/" className="mr-0">
            <div className="rounded-full flex items-center text-xl">
              <ChevronLeft className="h-7 w-7" />
              {t("Back", "Back")}
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
  );
}
