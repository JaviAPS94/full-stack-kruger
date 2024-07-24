import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, PokemonImage, PokemonName } from "./styles";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        //este primer servicio es para traer el listado de pokemon
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );

        //arreglo de pokemon con el nombre y la url del detalle
        const { results } = response.data;

        const pokemonWithDetails = results.map((pokemon) =>
          axios.get(pokemon.url)
        );

        const pokemonResponse = await Promise.all(pokemonWithDetails);

        setPokemon(pokemonResponse);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Container>
      {pokemon.map((item) => (
        <Card key={item.data.id}>
          <PokemonImage
            src={item.data.sprites.front_default}
            alt={item.data.name}
          />
          <PokemonName>{item.data.name}</PokemonName>
        </Card>
      ))}
    </Container>
  );
}

export default PokemonList;
