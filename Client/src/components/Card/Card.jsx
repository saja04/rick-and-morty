import style from './Card.module.css'
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {addFavorite, removeFavorite} from "../../redux/actions";
import { NavLink } from 'react-router-dom';

export function Card(props) {
   const navigate = useNavigate();
   const {character, onClose, addFavorite, removeFavorite, favorites} = props;
   const {image, name, species, gender, id, status} = character;

   const [closeBtn, setCloseBtn] = useState(true);
   const [fav, setFav] = useState(false);

   useEffect(() => {
      favorites.forEach((fav) => {
        if (fav.id === id) {
          setFav(true);
        }
      });
    }, [favorites]);
  
    function navigateHandler() {
      navigate(`/detail/${character.id}`);
    }
  
    function handleFavorite(character) {
      if (!fav) {
        addFavorite(character);
        setFav(true);
      } else {
        removeFavorite(character);
        setFav(false);
      }
    }
  
   return (
       <div className={style.card}>
         <button className={style.cerrar} onClick={()=>{onClose(id)}}>X</button> 
         {fav ? (
          <button onClick={() => handleFavorite(character.id)}>❤️</button>
        ) : (
          <button onClick={() => handleFavorite(character)}>🤍</button>
        )}

         <button className={style.boton1}><NavLink className={style.NavLink} to={`/detail/${id}`}>{name}</NavLink></button>
         <div className={style.detail}>
            <img className={style.image} src={image} alt={name}/> 
         </div>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
       </div>
      
   );
}
const mapDispatchToProps = (dispatch) => {
   return {
     addFavorite: (character) => dispatch(addFavorite(character)),
 
     removeFavorite: (id) => dispatch(removeFavorite(id)),
   };
 };
 
 const mapStateToProps = (state) => {
   return {
     favorites: state.myFavorites,
   };
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
 
