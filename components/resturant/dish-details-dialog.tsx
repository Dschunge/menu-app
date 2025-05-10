"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Flame, Sparkles, X } from "lucide-react";
import type { Dish } from "@/lib/prisma/client";

interface DishDetailsDialogProps {
  dish: Dish | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  menuName?: string;
  coursePosition?: number;
}

export function DishDetailsDialog({
  dish,
  open,
  onOpenChange,
  menuName,
  coursePosition,
}: DishDetailsDialogProps) {
  if (!dish) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1200px] w-[95vw] max-h-[95vh] overflow-y-auto p-0">
        <DialogHeader className="p-8 pb-0">
          <div className="flex items-start justify-between">
            <div>
              {menuName && coursePosition && (
                <div className="text-sm text-muted-foreground mb-1">
                  {menuName} • Course {coursePosition}
                </div>
              )}
              <DialogTitle className="text-4xl">{dish.name}</DialogTitle>
              <div className="flex items-center gap-2 mt-3">
                {dish.isNew && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 text-sm py-1"
                  >
                    <Sparkles className="h-3 w-3" />
                    New
                  </Badge>
                )}
                {dish.isPopular && (
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 text-sm py-1"
                  >
                    <Flame className="h-3 w-3 text-orange-500" />
                    Popular
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="p-8 pt-6">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10">
            <div className="relative w-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] w-full">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <DialogDescription className="text-foreground text-2xl leading-relaxed">
                {dish.description}
              </DialogDescription>

              <div className="mt-6 border-t pt-6">
                <div className="text-3xl font-bold">
                  ${dish.price.toFixed(2)}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-5">
                  Dietary Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-500"></div>
                    <span className="text-lg">Vegetarian</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-500"></div>
                    <span className="text-lg">Spicy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
                    <span className="text-lg">Contains nuts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                    <span className="text-lg">Gluten-free</span>
                  </div>
                </div>
              </div>

              {menuName && (
                <div className="mt-auto pt-8">
                  <p className="text-base text-muted-foreground">
                    This dish is part of the {menuName} menu.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
