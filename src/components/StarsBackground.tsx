"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

export function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        animationDelay: Math.random() * 5,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars-bg">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
      {/* Shooting stars */}
      <div
        className="shooting-star"
        style={{
          top: "20%",
          left: "10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="shooting-star"
        style={{
          top: "40%",
          left: "-5%",
          animationDelay: "5s",
        }}
      />
      <div
        className="shooting-star"
        style={{
          top: "60%",
          left: "5%",
          animationDelay: "10s",
        }}
      />
    </div>
  );
}
