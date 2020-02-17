import { useState, useEffect } from 'react';

export default function useMessage(condition) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;    
    setIsVisible(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsVisible(false), 500);
  }, [condition])

  return isVisible;
}

/*
    show message for 1 second after adding a new todo
    need to cleanup ?
  */