import { RefObject, useEffect } from 'react';

interface HookProps {
  ref: RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
}

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
