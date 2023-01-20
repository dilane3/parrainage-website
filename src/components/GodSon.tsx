import styles from "@/styles/card.module.css";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { sleep } from "@/utils";

type GodSonCardProps = {
  index: number;
  data: {
    id: number;
    name: string;
    color: string;
  },
  action: string;
};

export const GodSonCard = ({ index, data, action }: GodSonCardProps) => {
  // State
  const [translateY, setTranslateY] = useState(-100);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (action === "show") {
      (async () => {
        await sleep(2000 * data.id);

        setTranslateY(0);
        setOpacity(1);
      })();
    } else if (action === "hidden") {
      (async () => {
        await sleep(300);

        setTranslateY(-100);
        setOpacity(0);
      })();
    }
  }, [action]);
  

  // Some handlers
  const getPosition = (index: number) => {
    switch (index) {
      case 0:
        return {
          left: 30,
          bottom: 50,
        };

      case 1:
        return {
          right: 30,
          bottom: 50,
        };

      case 2:
        return {
          left: 30,
          bottom: 170,
        };

      case 3:
        return {
          right: 30,
          bottom: 170,
        };

      case 4: {
        return {
          left: 30,
          bottom: 290,
        };
      }

      case 5: {
        return {
          right: 30,
          bottom: 290,
        };
      }

      default:
        return {
          left: 30,
          bottom: 70,
        };
    }
  };

  return (
    <motion.div
      className={styles.godSonCard}
      style={getPosition(index)}
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity, translateY }}
      transition={{ duration: 1, delay: 2, type: "time" }}
    >
      <div
        className={styles.avatar}
        style={{
          backgroundColor: data.color,
        }}
      >
        {data.name[0].toUpperCase()}
      </div>

      <div className={styles.godSonCard__info}>
        <p className={styles.godSonCard__name}>{ data.name.toUpperCase() }</p>
        {/* <p className={styles.godSonCard__level}>( { data.level.toUpperCase() } )</p> */}
      </div>
    </motion.div>
  );
};
