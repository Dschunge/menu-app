"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (en: string, es: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get the language from localStorage, default to English
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Initialize language from localStorage when component mounts (client-side only)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("preferredLanguage", newLanguage)
  }

  // Helper function to get text in the current language
  const t = (en: string, es: string) => {
    return language === "en" ? en : es
  }

  // Prevent hydration mismatch by using a consistent initial render
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "en",
          toggleLanguage: () => {},
          t: (en) => en,
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

// This is a custom hook that components can use to access the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

