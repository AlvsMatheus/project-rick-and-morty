import { useEffect, useState } from "react"
import { useCharacters } from "./components/useCharacters";


const NavBar = () => {
    const [search, setSearch] = useState<string>('');
    const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);
    const q = search.toLowerCase();
    const { characters } = useCharacters(10);
    

    useEffect(() => {
        const filtering = () => {
            const filtered = characters.filter(character => 
                character.name.toLowerCase().startsWith(q)
            );
            setFilteredCharacters(filtered)
        }
        filtering();
    }, [q,characters])

  return (
    <section className="hidden z-20 md:flex justify-center items-center fixed top-0 left-0 w-full h-20 p-5 bg-gradient-to-b from-black to-transparent">
        <div className="relative flex items-center justify-start w-[40%] h-10 bg-green-400 backdrop-blur-2xl rounded-2xl">
            <label 
            className="sr-only"
            htmlFor="isearch"></label>
            <input 
            id="isearch" 
            type="text"
            placeholder="Digite o nome do personagem"
            className="ps-2 w-full focus:outline-none" 
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            
            />
            {
                search && search.length > 0 && (
                <div className="group absolute flex flex-col top-11 left-0 w-full">
                    {filteredCharacters.map((item) => (
                            <div className="bg-green-400 hover:bg-green-500 p-2 text-md font-light">
                                <a
                                onClick = {() => setSearch('')}
                                href={`#character-${item.id}`}
                                key={item.id}
                                className="text-black ">
                                    {item.name}
                                </a>
                            </div>
                        ))}
                </div>
                )
            }
        </div>

    </section>
  )
}

export default NavBar
