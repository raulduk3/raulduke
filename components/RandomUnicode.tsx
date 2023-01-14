import React, { useRef, useEffect, useState } from 'react';

const easeOutQuad = t => t * (2 - t);

export default function RandomUnicode() {
  const canvasRe    f = useRef(null);
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let characters = [];

    setSize([window.innerWidth, window.innerHeight])

    const createCharacters = () => {
      const numberOfCharacters = Math.floor(Math.random() * (canvas.width / 10));

      for (let i = 0; i < numberOfCharacters; i++) {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        const z = Math.random();
        const character = String.fromCodePoint(Math.floor(Math.random() * 0x08200));

        characters.push({ x, y, z: z, character, velX: Math.random()-0.5, velY: Math.random()-0.5 });
      }
    };

    const drawCharacters = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      characters.forEach(({ x, y, z, character }) => {
        ctx.font = `${Math.floor(Math.random()*5)}px`;
        ctx.fillStyle = `rgba(0, 0, 0, ${z+0.2}})`;
        ctx.fillText(character, x, y);
      });
    };

    const updateCharacters = (delta) => {
      characters = characters.map(({ x, y, z, character, velX, velY }) => {
        const ease = easeOutQuad(delta);
        const randomX = velX + ((Math.random() - 1) * 0.00001) * ease;
        const randomY = velY + ((Math.random() - 1) * 0.00001) * ease;
        let newX = x + (randomX) * ease;
        let newY = y + (randomY) * ease;

        if (newX < 0)
        {
            newX = window.innerWidth;
        } else if (newX > window.innerWidth)
        {
            newX = 0;
        }

        if (newY < 0)
        {
            newY = window.innerHeight;
        } else if (newY > window.innerHeight)
        {
            newY = 0;
        }

        return { x: newX, y: newY, z:z, character, velX: randomX, velY: randomY };
      });
    };

    let start;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      updateCharacters(Math.min(progress / 1000, 1));
      drawCharacters();
      requestAnimationFrame(animate);
    };

    createCharacters();
    requestAnimationFrame(animate);
  }, []);

  return <canvas style={{position:'absolute', top:0, left:0, zIndex: -1}} ref={canvasRef} width={size[0]} height={size[1]} />;
};
