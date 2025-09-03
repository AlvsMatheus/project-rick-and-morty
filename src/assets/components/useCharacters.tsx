import { useState, useEffect } from "react";

export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    origin: {
        name: string;
        url: string;
    }
    gender: string;
}

export const useCharacters = (limit: number = 5) => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
               const res = await fetch("https://rickandmortyapi.com/api/character");
               const data = await res.json()
               setCharacters(data.results.slice(0, limit));
            } catch(err) {
                setError("Erro: Não conseguimos puxar os dados")
            } finally {
                setLoading(false)
            }
        }
        fetchCharacter();
    }, [limit])
    return { characters, loading, error }
}