import { useState, useEffect } from 'react'

export default function(watch){
  const [color, setColor] = useState('pink');

  const getRandomColor = () => {
    const colors = ['#f8a5c2', '#f7d794', '#f3a683', '#D1C4E9', '#D7CCC8'];
    const randomIndex = Math.floor(Math.random() * Math.floor(colors.length));
  
    return colors[randomIndex];
  };

  useEffect(() => {
    setColor(getRandomColor());
    localStorage.setItem('hooksTodo', JSON.stringify(watch));
  }, [watch]);

  return color;
}
