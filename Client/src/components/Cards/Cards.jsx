import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
      <div className={style.cards}>
        {characters.map((character) => (
          <Card  character={character} onClose={onClose} id={characters.id}/>
        ))}
      </div>
   )
}
