"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";

interface InactivityRedirectProps {
  timeoutInSeconds: number;
  redirectPath: string;
}

export function InactivityRedirect({
  timeoutInSeconds,
  redirectPath,
}: InactivityRedirectProps) {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(timeoutInSeconds);
  const [isActive, setIsActive] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const shouldRedirectRef = useRef(false);

  // Function to handle the redirect - separated from the timer logic
  const handleRedirect = useCallback(() => {
    router.push(redirectPath);
  }, [router, redirectPath]);

  // Reset timer function
  const resetTimer = useCallback(() => {
    setSecondsLeft(timeoutInSeconds);
    setIsActive(true);
    shouldRedirectRef.current = false;
  }, [timeoutInSeconds]);

  // Setup the countdown timer
  useEffect(() => {
    // Clear any existing interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Set up the interval
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        // If we've reached 0, mark for redirect but don't call router.push directly
        if (prev <= 1) {
          shouldRedirectRef.current = true;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeoutInSeconds]);

  // Handle the actual redirect in a separate effect
  useEffect(() => {
    if (shouldRedirectRef.current && secondsLeft === 0) {
      // Clear the interval before redirecting
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      // Use setTimeout to ensure this happens outside the render cycle
      const redirectTimeout = setTimeout(() => {
        handleRedirect();
      }, 0);

      return () => clearTimeout(redirectTimeout);
    }
  }, [secondsLeft, handleRedirect]);

  // Set up event listeners for user activity
  useEffect(() => {
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
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer]);

  // Only show the indicator when less than 30 seconds remain
  const showIndicator = secondsLeft <= 30 && isActive;

  return (
    <>
      {showIndicator && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm z-50">
          <Clock className="h-4 w-4" />
          <span>
            Returning to home in {secondsLeft}{" "}
            {secondsLeft === 1 ? "second" : "seconds"}
          </span>
        </div>
      )}
    </>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Clock } from "lucide-react";

// interface InactivityRedirectProps {
//   timeoutInSeconds: number;
//   redirectPath: string;
// }

// export function InactivityRedirect({
//   timeoutInSeconds,
//   redirectPath,
// }: InactivityRedirectProps) {
//   const router = useRouter();
//   const [secondsLeft, setSecondsLeft] = useState(timeoutInSeconds);
//   const [isActive, setIsActive] = useState(true);

//   useEffect(() => {
//     // Function to reset the timer
//     const resetTimer = () => {
//       setSecondsLeft(timeoutInSeconds);
//       setIsActive(true);
//     };

//     // Set up the countdown interval
//     const interval = setInterval(() => {
//       setSecondsLeft((prev) => {
//         // If we've reached 0, redirect and clear the interval
//         if (prev <= 1) {
//           clearInterval(interval);
//           router.push(redirectPath);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     // Set up event listeners for user activity
//     const activityEvents = [
//       "mousemove",
//       "mousedown",
//       "click",
//       "keypress",
//       "touchmove",
//       "touchstart",
//       "scroll",
//     ];

//     // Add all event listeners
//     activityEvents.forEach((event) => {
//       window.addEventListener(event, resetTimer);
//     });

//     // Clean up on unmount
//     return () => {
//       clearInterval(interval);
//       activityEvents.forEach((event) => {
//         window.removeEventListener(event, resetTimer);
//       });
//     };
//   }, [timeoutInSeconds, redirectPath, router]);

//   // Only show the indicator when less than 30 seconds remain
//   const showIndicator = secondsLeft <= 30 && isActive;

//   return (
//     <>
//       {showIndicator && (
//         <div className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm z-50">
//           <Clock className="h-4 w-4" />
//           <span>
//             Returning to home in {secondsLeft}{" "}
//             {secondsLeft === 1 ? "second" : "seconds"}
//           </span>
//         </div>
//       )}
//     </>
//   );
// }
