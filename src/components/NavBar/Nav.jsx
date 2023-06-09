import SearchBar from "../SearchBar/SearchBar"
import { Link, NavLink } from "react-router-dom"
import style from './Nav.module.css'

 function Nav({onSearch}) {
    return(
        <div className={style.navigator}>
            <button className={style.home}><NavLink className={style.nav2} to='/home'>Home</NavLink></button>
            <button className={style.home}><NavLink to="/favorites" className={style.nav2}>Favs</NavLink></button>
            <SearchBar onSearch={onSearch}/>
            <button className={style.about}><NavLink className={style.nav1} to='/about'>About</NavLink></button>
        </div>
    )
    
}
export default Nav