"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface InactivityTimerIndicatorProps {
  timeoutInSeconds: number;
}

export function InactivityTimerIndicator({
  timeoutInSeconds,
}: InactivityTimerIndicatorProps) {
  const [secondsLeft, setSecondsLeft] = useState(timeoutInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const resetTimer = () => {
      setSecondsLeft(timeoutInSeconds);
    };

    // Reset timer on user activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mousedown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("touchmove", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    window.addEventListener("scroll", resetTimer);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("mousedown", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("touchmove", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [timeoutInSeconds]);

  // Only show the indicator when less than 30 seconds remain
  if (secondsLeft > 30) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm z-50">
      <Clock className="h-4 w-4" />
      <span>
        Returning to home in {secondsLeft}{" "}
        {secondsLeft === 1 ? "second" : "seconds"}
      </span>
    </div>
  );
}
