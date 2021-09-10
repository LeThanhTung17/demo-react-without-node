function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const { useState, useEffect } = React;

const Star = () => {
  const [stars, setStars] = useState(INITIAL_STATE);
  const [count, setCount] = useState(0);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((v) => v + 1);
    }, 1000);
    () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};
