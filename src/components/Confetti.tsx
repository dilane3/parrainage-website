import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Confetti = () => {
  const { width, height } = useWindowSize(1400, 1200);

  // State
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (animating) {
      sleep(10000);
    } else {
      setAnimating(true);
    }
  }, [animating]);

  const sleep = async (time: number) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        setAnimating(false);

        resolve(true);
      }, time)
    );
  };

  return (
    <>
      {animating && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={5000}
          gravity={0.1}
          wind={0.05}
          initialVelocityY={30}
        />
      )}
    </>
  );
};
