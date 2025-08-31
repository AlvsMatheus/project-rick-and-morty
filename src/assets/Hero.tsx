import { useCharacters } from "./components/useCharacters"

const Hero = () => {

  const { characters, loading, error } = useCharacters(5);
  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      {
        characters.map((person) => (
          <article 
          key={person.id}
          className="flex flex-col justify-evenly items-center relative px-10 h-[160dvh] md:h-[300dvh] lg:h-[160dvh] w-[100%] bg-black">
            <section className="flex flex-col h-[50%] justify-center items-center gap-20">
              <h1 className="font-rick text-rick-border text-7xl">{person.name}</h1>
              <img className="w-100 h-90" src={person.image} alt={person.name} />
            </section>
            <section className="flex p-10 lg:h-100 lg:w-[90%] flex-wrap bg-white/10 rounded-3xl backdrop-blur-lg">
                  <ul className="flex w-full h-full">
                    <li className="flex flex-col md:flex-wrap w-full gap-20">
                      <div className="flex gap-4 justify-start items-center">
                        <p className="font-rick text-rick-border text-5xl">Status:</p>
                        <span className="text-white font-bold text-2xl">{person.status}</span>
                      </div>
                      <div className="flex gap-4 justify-start items-center">
                        <p className="font-rick text-rick-border text-5xl">Gender:</p>
                        <span className="text-white font-bold text-2xl">{person.gender}</span>
                      </div>
                      <div className="flex gap-4 justify-start items-center">
                        <p className="font-rick text-rick-border text-5xl">Origin:</p>
                        <span className="text-white font-bold text-2xl">{person.origin.name}</span>
                      </div>
                    </li>
                  </ul>
            </section>
          </article>
        ))
      }
   
    </section>
  )
}

export default Hero
