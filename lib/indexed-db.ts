// IndexedDB wrapper for offline storage
const DB_NAME = "restaurant-menu-db"
const DB_VERSION = 1

// Define stores (tables)
const STORES = {
  DISHES: "dishes",
  CATEGORIES: "categories",
  FAVORITES: "favorites",
}

// Initialize the database
export async function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = (event) => {
      console.error("IndexedDB error:", event)
      reject("Error opening database")
    }

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      resolve(db)
    }

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result

      // Create object stores
      if (!db.objectStoreNames.contains(STORES.DISHES)) {
        db.createObjectStore(STORES.DISHES, { keyPath: "id" })
      }

      if (!db.objectStoreNames.contains(STORES.CATEGORIES)) {
        db.createObjectStore(STORES.CATEGORIES, { keyPath: "id" })
      }

      if (!db.objectStoreNames.contains(STORES.FAVORITES)) {
        db.createObjectStore(STORES.FAVORITES, { keyPath: "id" })
      }
    }
  })
}

// Generic function to add items to a store
export async function addItems<T>(storeName: string, items: T[]): Promise<void> {
  const db = await initDB()

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite")
    const store = transaction.objectStore(storeName)

    transaction.oncomplete = () => {
      resolve()
    }

    transaction.onerror = (event) => {
      console.error(`Error adding items to ${storeName}:`, event)
      reject(`Error adding items to ${storeName}`)
    }

    // Add each item to the store
    items.forEach((item) => {
      store.put(item)
    })
  })
}

// Generic function to get all items from a store
export async function getAllItems<T>(storeName: string): Promise<T[]> {
  const db = await initDB()

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly")
    const store = transaction.objectStore(storeName)
    const request = store.getAll()

    request.onsuccess = () => {
      resolve(request.result as T[])
    }

    request.onerror = (event) => {
      console.error(`Error getting items from ${storeName}:`, event)
      reject(`Error getting items from ${storeName}`)
    }
  })
}

// Generic function to get an item by ID
export async function getItemById<T>(storeName: string, id: string): Promise<T | null> {
  const db = await initDB()

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly")
    const store = transaction.objectStore(storeName)
    const request = store.get(id)

    request.onsuccess = () => {
      resolve((request.result as T) || null)
    }

    request.onerror = (event) => {
      console.error(`Error getting item from ${storeName}:`, event)
      reject(`Error getting item from ${storeName}`)
    }
  })
}

// Specific functions for dishes
export async function cacheDishes(dishes: any[]): Promise<void> {
  return addItems(STORES.DISHES, dishes)
}

export async function getCachedDishes(): Promise<any[]> {
  return getAllItems(STORES.DISHES)
}

// Specific functions for categories
export async function cacheCategories(categories: any[]): Promise<void> {
  return addItems(STORES.CATEGORIES, categories)
}

export async function getCachedCategories(): Promise<any[]> {
  return getAllItems(STORES.CATEGORIES)
}

// Specific functions for favorites
export async function saveFavorites(favorites: string[]): Promise<void> {
  // Convert array of IDs to array of objects with ID
  const favoritesObjects = favorites.map((id) => ({ id }))
  return addItems(STORES.FAVORITES, favoritesObjects)
}

export async function getFavorites(): Promise<string[]> {
  const favorites = await getAllItems<{ id: string }>(STORES.FAVORITES)
  return favorites.map((fav) => fav.id)
}

