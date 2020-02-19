import { useState, useEffect } from 'react';

export default function useMessage(condition) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 500);
  }, [condition])

  return isVisible;
}
