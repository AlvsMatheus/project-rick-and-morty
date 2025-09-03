import { useCharacters, } from "../assets/components/useCharacters"
import HeroCard from "./HeroCard";

const Hero = () => {
  const { characters, loading, error } = useCharacters(10);
  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      {
        characters.map((character) => (  
           <HeroCard key={character.id} character={character}/>
        ))
      }
    </section>
  )
}

export default Hero
