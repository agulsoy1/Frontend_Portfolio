"use client";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function Background_Anim() {
  const particles = Array.from({ length: 100 }).map((_, index) => ({
    id: index,
    size: pseudoRandom(index * 4 + 1) * 20 + 15,
    delay: pseudoRandom(index * 4 + 2) * 5,
    x: pseudoRandom(index * 4 + 3) * 100,
    y: pseudoRandom(index * 4 + 4) * 100,
  }));

  return (
    <div className="absolute w-full h-screen inset-0 overflow-hidden">
      {particles.map(({ id, size, delay, x, y }) => (
        <div
          key={id}
          className="absolute opacity-25 m-5 bg-white rounded-[5px] fade-in pulse-in-out"
          style={{
            width: `${size.toFixed(2)}px`,
            height: `${size.toFixed(2)}px`,
            left: `${x.toFixed(2)}%`,
            top: `${y.toFixed(2)}%`,
            animationDelay: `${delay.toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}