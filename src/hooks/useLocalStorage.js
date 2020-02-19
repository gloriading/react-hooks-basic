import { useState } from 'react';

export default function(key, initialValue) {
  const [storage, setStorage] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } 
    
    return initialValue;
  });

  function setValue(valOrFunction) {
    const valueToStore = valOrFunction instanceof Function ? valOrFunction(storage) : valOrFunction;

    setStorage(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [storage, setValue];
}