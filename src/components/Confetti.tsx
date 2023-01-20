import { sleep } from "@/utils";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

type ConfettiProps = {
  action: string
}

export const Confetti = ({ action }: ConfettiProps) => {
  const { width, height } = useWindowSize(1400, 1200);

  // State
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (action === "confetti") {
      (async () => {
        setAnimating(true);
        await sleep(10000);

        setAnimating(false);
      })()
    } else {
      setAnimating(false);
    }
  }, [action]);

  return (
    <>
      {animating && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={1000}
          gravity={0.1}
          wind={0.05}
          initialVelocityY={30}
        />
      )}
    </>
  );
};
