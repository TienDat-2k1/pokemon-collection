import { Pokemon, PokemonDetail } from '../interface';
import PokemonList from './PokemonList';
import './pokemon.css';
import { Detail } from '../App';

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = props => {
  const { pokemons, viewDetail, setViewDetail } = props;

  const selectPokemonHandler = (id: number) => {
    setViewDetail({
      id,
      isOpen: true,
    });
  };
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((pokemon, i) => (
          <div key={i} onClick={() => selectPokemonHandler(pokemon.id)}>
            <PokemonList
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
              abilities={pokemon.abilities}
              viewDetail={viewDetail}
              setViewDetail={setViewDetail}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
export default PokemonCollection;
