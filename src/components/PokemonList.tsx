import { useEffect, useState } from 'react';
import { Detail } from '../App';

interface Props {
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;

  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList: React.FC<Props> = props => {
  const { name, id, image, viewDetail, setViewDetail, abilities } = props;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(id === viewDetail?.id);
  }, [viewDetail]);

  return (
    <div>
      {isSelected && (
        <section>
          <div className="detail-container">
            <p className="detail-close">X</p>
            <div className="detail-info">
              <img src={image} alt={name} className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Abilities:</p>
              {abilities?.map((ab: any, i) => {
                return <div key={i}>{ab.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      )}
      {!isSelected && (
        <section className="pokemon-list-container">
          <p className="pokemon-name"></p>
          <img src={image} alt={name} />
        </section>
      )}
    </div>
  );
};
export default PokemonList;
