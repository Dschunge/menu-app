"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import LanguageToggle from "../language-toggle";
import { useLanguage } from "../providers/language-provider";
import { Restaurant } from "@/lib/generated/modelSchema/RestaurantSchema";
import { ThemeToggle } from "../theme-toggle";
import { VelocityScroll } from "../eldoraui/scrollbasedvelocity";
import { InfiniteSlider } from "../ui/infinite-slider";

interface ResaturanMainPageProps {
  restaurants?: Restaurant[];
}

export default function ResaturanMainPage({
  restaurants = [],
}: ResaturanMainPageProps) {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sushi-teppanaky-background.png"
          alt="Restaurant background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Language Toggle */}
      <div className="absolute flex items-center top-4 right-4 z-20">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-start p-6 text-center relative z-10">
        {/* Company Logo - Much smaller */}
        <div className="mb-4 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
            <Image
              src="https://res.cloudinary.com/dgfgt8hwr/image/upload/v1717262421/diriahms/eyxtuhxiulrhrowp8jmq.png"
              alt="Culinary Ventures Logo"
              width={40}
              height={40}
              className="h-72 w-auto"
            />
          </div>
          {/* <h2 className="ml-2 text-sm text-white/80 font-light">
            Culinary Ventures
          </h2> */}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {t(
            "Welcome to Our Restaurants",
            "Bienvenido a nuestros restaurantes"
          )}
        </h1>
        <p className="text-3xl text-white/90 mb-12 max-w-2xl mx-10">
          {t(
            "Experience exceptional dining at our two unique locations. Choose a restaurant to explore our menu.",
            "Disfrute de una experiencia gastronómica excepcional en nuestros dos exclusivos locales. Elija un restaurante para explorar nuestro menú."
          )}
        </p>

        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group relative overflow-hidden rounded-xl border bg-white/10 backdrop-blur-sm p-2 flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                {restaurant.image && (
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white">
                  {t(restaurant.name, restaurant.name || "")}
                </h2>
                <p className="text-white/80 mb-4 flex-grow">
                  {t(
                    restaurant.descriptionshort || "",
                    restaurant.descriptionshort_esp || ""
                  )}
                </p>

                <Button
                  className="w-full text-2xl"
                  variant={"destructive"}
                  asChild
                >
                  <Link
                    href={`/restaurants/${restaurant.id}`}
                    className="mt-auto"
                  >
                    {t("Visit", "Visite")} {restaurant.name}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <InfiniteSlider>
        <div className="text-white text-xl">Your sliding content here</div>
      </InfiniteSlider> */}
      <InfiniteSlider gap={24} reverse speed={50}>
        <img
          src="https://res.cloudinary.com/dzywjg4tp/image/upload/v1745853525/fkh03ezsfwlqrwg7wwff.png"
          alt="Apple Music logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://res.cloudinary.com/dzywjg4tp/image/upload/v1745701317/l3poljwuzgnbpxrf4sns.png"
          alt="Chrome logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://res.cloudinary.com/dzywjg4tp/image/upload/v1745700999/nqlsoc3bmdsvhojqjdt1.png"
          alt="Strava logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://res.cloudinary.com/dzywjg4tp/image/upload/v1745700034/jnxr5hqawsbeiq8ghksp.png"
          alt="Nintendo logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://res.cloudinary.com/dzywjg4tp/image/upload/v1745697353/fhbtd8tmpbj42xm8ejor.png"
          alt="Jquery logo"
          className="h-[120px] w-auto"
        />
        <img
          src="https://res.cloudinary.com/dzywjg4tp/image/upload/v1745697252/avpr0zbcrmj71sfx343w.png"
          alt="Prada logo"
          className="h-[120px] w-auto"
        />
      </InfiniteSlider>

      <footer className="border-t border-white/20 py-6 text-center text-sm text-white/70 relative z-10">
        {/* <VelocityScroll
          text={"Today at Pelicano. Fresh Fish arrived"}
          className="text-2xl"
          default_velocity={2}
        /> */}
        © {new Date().getFullYear()} Grupo Diria. All rights reserved.
      </footer>
    </main>
  );
}
