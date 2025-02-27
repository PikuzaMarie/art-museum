import { useState, useEffect } from 'react';

interface UseDebounceProps {
  value: string;
  delay: number;
}

export function useDebounce({ value, delay }: UseDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}
