"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Spanish" : "Switch to English"}
    >
      <span className="text-3xl">{language === "en" ? "🇺🇸" : "🇨🇷"}</span>
    </Button>
  );
}

export default LanguageToggle;
