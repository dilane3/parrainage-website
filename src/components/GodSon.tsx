import styles from "@/styles/card.module.css";

type GodSonCardProps = {
  index: number;
};

export const GodSonCard = ({ index }: GodSonCardProps) => {
  const getPosition = (index: number) => {
    switch (index) {
      case 0:
        return {
          left: 0,
          bottom: 70,
        };

      case 1:
        return {
          left: 0,
          top: 70,
        };

      case 2:
        return {
          right: 0,
          bottom: 70,
        };

      case 3:
        return {
          right: 0,
          top: 70,
        };

      default:
        return {
          left: 0,
          bottom: 70,
        };
    }
  };

  return (
    <div
      className={styles.godSonCard}
      style={getPosition(index)}
    >
      <div
        className={styles.avatar}
        style={{
          backgroundColor: "#3e4bff",
        }}
      >
        D
      </div>

      <div className={styles.godSonCard__info}>
        <p className={styles.godSonCard__name}>ALEX MARTIN MELINGA</p>
        <p className={styles.godSonCard__level}>(Licence 1)</p>
      </div>
    </div>
  );
};
