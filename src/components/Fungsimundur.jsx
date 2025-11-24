// src/components/Fungsimundur.jsx

import { useState, useEffect } from "react";

// --- 1. TimeBox Component (Styling for SOLID White Text) ---
const TimeBox = ({ value, label }) => {
  return (
    // Only use the flex-col and centering classes, let Flexbox handle the width
    <div className="flex flex-col items-center overflow-hidden md:w-40  md:mx-auto lg:w-60 justify-center">
      <span
        // Using arbitrary value text-[12px] for mobile, which is usually too small.
        // I recommend using standard Tailwind sizes (text-xl, text-2xl, etc.) for better responsiveness.
        className="text-2xl md:text-7xl lg:text-9xl font-poppins font-light text-white  overflow-hidden tabular-nums tracking-wider"
      >
        {value}
      </span>

      <span className="text-xs md:text-lg lg:text-lg font-poppins text-white mt-1 justify-center overflow-hidden">
        {label}
      </span>
    </div>
  );
};

// --- 2. Utility Function to Calculate Time Left ---
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

// --- 3. Main Component (Fungsimundur) ---
const targetDate = "June 15, 2026 18:00:00"; // <-- Set your target date here!

export default function Fungsimundur() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timer);
        setIsFinished(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }
    const value = String(timeLeft[interval]).padStart(2, "0");
    return (
      <TimeBox key={interval} value={value} label={interval.toUpperCase()} />
    );
  });

  return (
    // Alignment classes (justify-center and items-center) prevent the "miring-miring" issue
    <div className="flex justify-center items-center p-2 w-max mx-auto  overflow-hidden">
      {isFinished ? (
        <h1 className="text-4xl font-bold text-white">COUNTDOWN FINISHED!</h1>
      ) : (
        <div className="flex space-x-6 md:space-x-12">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span className="text-white">Loading...</span>
          )}
        </div>
      )}
    </div>
  );
}
