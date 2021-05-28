import React, { useState} from 'react';
import posts from './posts'
// Modifica el componente App para implmentar la funcionalidad requerida
export default function App() {
  const [filterData,setFilterData] = useState(posts);

  const handleChange = (value) => {
    let result = posts.filter((e) => (e.title.toUpperCase().includes(value)));
    setFilterData(result)
  }

  return (
    <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda"
          onChange={(element) => {handleChange(element.target.value.toUpperCase())
          }}/>
        </div>
        <ul>
        
          {
          filterData.map((element, index) => (
          <li key={index}>
            <a href={element.url}><img src={element.image}/></a>
            <p>{ element.title }</p>
          </li>
          ))
          }
        </ul>
    </div>
  )
}

