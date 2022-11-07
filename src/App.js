import logo from './chuck_norris_gif.gif';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios'


function App() {
  const [fact, setFact] = useState("");
  async function getFact()
  {
      const urlAPI = "https://api.chucknorris.io/jokes/random";
      axios.request(urlAPI)
      .then(respone => setFact(respone.data.value))
      .catch(error => console.log(error))
  }
  const [categories, setCategories] = useState("");
  async function getCategoryList()
  {
      const urlAPI = "https://api.chucknorris.io/jokes/categories";
      let listCategory = "";
      axios.request(urlAPI)
      //.then(response => setCategories(response.data))
      .then(response => setCategories(       ))
      .catch(error => console.log(error))
  }
  const [categoryfact, setCategoryFact] = useState("");
  async function getCategoryFact(){
    
  }
  return (
    <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Random Chuck Norris Fact</h1>
          <h2>{fact}</h2>
          <button type="button" onClick={() => {
            getFact();
          }}>New Fact</button>
        </div>
        <hr class="solid"/>
        <div>
          <h1>Categories</h1>
// Aqui va codigo inestable
        <button type="button" onClick={() => {
            getCategoryList();
          }}>Test</button>
        </div>


    </div>
  );
}

export default App;

/*Codigo inestable para traer la lista de categorias, no logre estabiliarlo asi que aqui quedo mi asignacion
<ul>
  {categories.map(category => (
    <div>
      <li>{category}</li>
      </div>
  ))}
  </ul>*/