import { useEffect, useState } from "react";

type useCounterReturn = {
  startCountSeconds: () => void
  stopCountSeconds: () => void
  currentSeconds: number
  timeIsRunning: boolean
  clearCountSeconds: () => void
}

export function useCounter(initialSeconds?: number): useCounterReturn {
  const [currentSeconds, setCurrentSeconds] = useState(initialSeconds || 0);
  const [timeIsRunning, setTimeIsRunning] = useState(false);

  const count = initialSeconds ? currentSeconds - 1 : currentSeconds + 1

  useEffect(() => {
    // On first render, currentSeconds will be 0
    // The condition will be false and setTimeout() won't start
    if (timeIsRunning)
      var timer = setTimeout(() => setCurrentSeconds(count), 1000);
    return () => clearTimeout(timer);
  }, [timeIsRunning, currentSeconds]);

  const startCountSeconds = () => {
    setCurrentSeconds(count);
    setTimeIsRunning(true)
  }
  const stopCountSeconds = () => {
    setCurrentSeconds(currentSeconds);
    setTimeIsRunning(false)
  }
  const clearCountSeconds = () => {
    setCurrentSeconds(initialSeconds || 0);
    setTimeIsRunning(false)
  }

  return {
    startCountSeconds,
    stopCountSeconds,
    currentSeconds,
    timeIsRunning,
    clearCountSeconds
  }
}
