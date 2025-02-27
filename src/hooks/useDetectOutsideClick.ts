import { RefObject, useEffect } from 'react';

interface HookProps {
  ref: RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Custom hook that detects clicks outside the specified element
 *
 * @param {Object} props - properties
 * @param {Object} props.ref - reference to the element
 * @param {boolean} props.isOpen - indicates if the element is open
 * @param {Function} props.onClose - function to call when a click outside is detected
 *
 * @returns {void}
 */
export function useDetectOutsideClick({ ref, isOpen, onClose }: HookProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, ref]);
}
