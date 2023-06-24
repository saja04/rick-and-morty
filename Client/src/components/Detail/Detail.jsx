import axios from "axios";
import style from './Detail.module.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(()=>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                 setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
    return setCharacter({});
}, [id]);

    return(
    <div className={style.container}>
        <div className={style.div1}>
        </div>
        <div className={style.texts}>
            <h1>Name: {character.name && character.name}</h1>
            <h2>Status: {character.status && character.status}</h2>
            <h2>Species: {character.species && character.species}</h2>
            <h2>Gener: {character.gender && character.gender}</h2>
            <h2>Origin: {character.origin?.name && character.origin?.name}</h2>
        </div>
        <div className={style.image}>
            <img src={character.image && character.image} alt=''></img>
        </div>
    </div> 
    )
    
}
export default Detail;