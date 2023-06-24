import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')


  function handleChange(event) {

    setId(event.target.value)
  }

   return (
     <div className={style.searchbar}>
       <input type="search" value={id} onChange={handleChange} className={style.input}/>
       <button onClick={() => {onSearch(id)} } className={style.boton}>Add</button>
     </div>
   );
 }
