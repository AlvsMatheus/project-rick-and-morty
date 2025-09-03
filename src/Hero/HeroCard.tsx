import type { Character } from "../assets/components/useCharacters"
import styles from "./HeroCard.styles";

interface HeroCardProp {
  character: Character;
}

const HeroCard = ({ character }: HeroCardProp) => {
  return (
    <article 
      id={`character-${character.id}`}
      className={styles.container}>
        <section className={styles.headerSection}>
            <h1 className={styles.characterName}>{character.name}</h1>
            <img className={styles.characterImage} src={character.image} alt={character.name} />
          </section>
          <section className={styles.infoSection}>
                <ul className={styles.infoList}>
                  <li className={styles.infoList}>
                    <div className={styles.infoListContainer}>
                      <p className={styles.infoLabel}>Status:</p>
                      <span className={styles.infoValue}>{character.status}</span>
                    </div>
                    <div className={styles.infoListContainer}>
                      <p className={styles.infoLabel}>Gender:</p>
                      <span className={styles.infoValue}>{character.gender}</span>
                    </div>
                    <div className={styles.infoListContainer}>
                      <p className={styles.infoLabel}>Origin:</p>
                      <span className={styles.infoValue}>{character.origin.name}</span>
                    </div>
                  </li>
                </ul>
          </section>
    </article>
  )
}

export default HeroCard
