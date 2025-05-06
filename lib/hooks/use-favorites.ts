"use client"

import { useState, useEffect } from "react"
import { saveFavorites, getFavorites } from "@/lib/indexed-db"

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from IndexedDB on component mount
  useEffect(() => {
    async function loadFavorites() {
      try {
        // Try to load from IndexedDB first
        const storedFavorites = await getFavorites()
        setFavorites(storedFavorites)

        // Fallback to localStorage if IndexedDB fails
        if (!storedFavorites.length) {
          try {
            const localStorageFavorites = localStorage.getItem("favorites")
            if (localStorageFavorites) {
              const parsedFavorites = JSON.parse(localStorageFavorites)
              setFavorites(parsedFavorites)
              // Save to IndexedDB for future use
              await saveFavorites(parsedFavorites)
            }
          } catch (localStorageError) {
            console.error("Error loading favorites from localStorage:", localStorageError)
          }
        }
      } catch (error) {
        console.error("Error loading favorites:", error)
      }
      setIsLoaded(true)
    }

    loadFavorites()
  }, [])

  // Save favorites to IndexedDB whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        // Save to IndexedDB
        saveFavorites(favorites)

        // Also save to localStorage as backup
        localStorage.setItem("favorites", JSON.stringify(favorites))
      } catch (error) {
        console.error("Error saving favorites:", error)
      }
    }
  }, [favorites, isLoaded])

  // Add a dish to favorites
  const addFavorite = (dishId: string) => {
    setFavorites((prev) => {
      if (prev.includes(dishId)) {
        return prev
      }
      return [...prev, dishId]
    })
  }

  // Remove a dish from favorites
  const removeFavorite = (dishId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== dishId))
  }

  // Toggle a dish in favorites
  const toggleFavorite = (dishId: string) => {
    setFavorites((prev) => {
      if (prev.includes(dishId)) {
        return prev.filter((id) => id !== dishId)
      }
      return [...prev, dishId]
    })
  }

  // Check if a dish is in favorites
  const isFavorite = (dishId: string) => {
    return favorites.includes(dishId)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    isLoaded,
  }
}

