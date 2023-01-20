import styles from '@/styles/card.module.css'

export const GodFatherCard = () => {
  return (
    <div className={styles.godFatherCard}>
      <div 
        className={styles.avatar}
        style={{
          backgroundColor: '#3e4bff'
        }}  
      >
        D
      </div>

      <p className={styles.godFatherCard__name}>ARMEL DILANE KOMBOU M.</p>
      <p className={styles.godFatherCard__level}>(Master 1)</p>
    </div>
  )
}