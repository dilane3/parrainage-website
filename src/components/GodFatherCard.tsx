import styles from "@/styles/card.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sleep } from "@/utils";

type GodFatherCardProps = {
  data: {
    id: number;
    name: string;
    level: string;
    color: string;
  };
  action: string;
};

export const GodFatherCard = ({ data, action }: GodFatherCardProps) => {
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.6)

  useEffect(() => {
    if (action === "show") {
      (async () => {
        await sleep(2000);

        setOpacity(1);
        setScale(1)
      })();
    } else if (action === "hidden") {
      (async () => {
        await sleep(300);

        setOpacity(0);
        setScale(0.6)
      })();
    }
  }, [action]);

  return (
    <motion.div
      className={styles.godFatherCard}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity, scale }}
      transition={{ duration: 1 }}
    >
      <div
        className={styles.avatar}
        style={{
          backgroundColor: data.color,
        }}
      >
        {data.name[0].toUpperCase()}
      </div>

      <p className={styles.godFatherCard__name}>{data.name.toUpperCase()}</p>
      <p className={styles.godFatherCard__level}>
        ( {data.level.toUpperCase()} )
      </p>
    </motion.div>
  );
};
