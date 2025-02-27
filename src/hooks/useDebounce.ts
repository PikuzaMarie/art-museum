import { useState, useEffect } from 'react';

interface UseDebounceProps {
  value: string;
  delay: number;
}

/**
 * Custom hook that debounces a value
 *
 * @param {Object} props - the properties object
 * @param {any} props.value - the value to be debounced
 * @param {number} props.delay - the delay time in millisecond
 *
 * @returns {any} - the debounced value
 */
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
