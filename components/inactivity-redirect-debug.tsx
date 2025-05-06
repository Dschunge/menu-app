"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";

interface InactivityRedirectDebugProps {
  timeoutInSeconds: number;
  redirectPath: string;
}

export function InactivityRedirectDebug({
  timeoutInSeconds,
  redirectPath,
}: InactivityRedirectDebugProps) {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(timeoutInSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    console.log("InactivityRedirect mounted with timeout:", timeoutInSeconds);

    // Function to reset the timer
    const resetTimer = () => {
      console.log("Activity detected, resetting timer");
      setSecondsLeft(timeoutInSeconds);
      setIsActive(true);
    };

    // Set up the countdown interval
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        console.log("Seconds left:", prev - 1);
        // If we've reached 0, redirect and clear the interval
        if (prev <= 1) {
          console.log("Timer expired, redirecting to:", redirectPath);
          clearInterval(interval);
          router.push(redirectPath);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Set up event listeners for user activity
    const activityEvents = [
      "mousemove",
      "mousedown",
      "click",
      "keypress",
      "touchmove",
      "touchstart",
      "scroll",
    ];

    // Add all event listeners
    activityEvents.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    // Clean up on unmount
    return () => {
      console.log("InactivityRedirect unmounting, cleaning up");
      clearInterval(interval);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [timeoutInSeconds, redirectPath, router]);

  // Always show the indicator for debugging
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
