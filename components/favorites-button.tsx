"use client";

import type React from "react";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/lib/hooks/use-favorites";
import { useLanguage } from "@/components/providers/language-provider";
import { toast } from "@/hooks/use-toast";
import type { ButtonProps } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

interface FavoritesButtonProps extends Omit<ButtonProps, "onClick"> {
  dishId: string;
  dishName: string;
  showText?: boolean;
}

export function FavoritesButton({
  dishId,
  dishName,
  variant = "ghost",
  size = "icon",
  showText = false,
  className,
  ...props
}: FavoritesButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { language } = useLanguage();
  const queryClient = useQueryClient();

  const isFav = isFavorite(dishId);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Optimistically update the UI
    queryClient.setQueryData(["favorites"], (oldData: string[] = []) => {
      if (isFav) {
        return oldData.filter((id) => id !== dishId);
      } else {
        return [...oldData, dishId];
      }
    });

    // Perform the actual update
    toggleFavorite(dishId);

    if (!isFav) {
      toast({
        title: language === "en" ? "Added to favorites" : "Añadido a favoritos",
        description:
          language === "en"
            ? `${dishName} has been added to your favorites`
            : `${dishName} ha sido añadido a tus favoritos`,
      });
    } else {
      toast({
        title:
          language === "en"
            ? "Removed from favorites"
            : "Eliminado de favoritos",
        description:
          language === "en"
            ? `${dishName} has been removed from your favorites`
            : `${dishName} ha sido eliminado de tus favoritos`,
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleFavorite}
      className={`${isFav ? "text-red-500 hover:text-red-600" : ""} ${
        className || ""
      }`}
      {...props}
    >
      <Heart className={`h-5 w-5 ${isFav ? "fill-current" : ""}`} />
      {showText && (
        <span className="ml-2">
          {isFav
            ? language === "en"
              ? "Remove from Favorites"
              : "Quitar de Favoritos"
            : language === "en"
            ? "Add to Favorites"
            : "Añadir a Favoritos"}
        </span>
      )}
      <span className="sr-only">
        {isFav
          ? language === "en"
            ? "Remove from favorites"
            : "Quitar de favoritos"
          : language === "en"
          ? "Add to favorites"
          : "Añadir a favoritos"}
      </span>
    </Button>
  );
}
