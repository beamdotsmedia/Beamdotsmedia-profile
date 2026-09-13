import { useState, useEffect } from 'react';

export const useCustomImage = (defaultSrc: string, storageKey: string) => {
  const [src, setSrc] = useState(defaultSrc);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setSrc(saved);
  }, [storageKey]);

  return { src, setSrc };
};
