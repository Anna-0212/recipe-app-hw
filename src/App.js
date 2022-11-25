import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
import video from './video2.mp4';
import { useEffect, useState } from 'react';

function App() {

  const MY_ID = "7addc5ec";
  const MY_KEY = "4ca43673a0d1a8e01ee6a462eb7c4aaf";


  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("tomat");

  useEffect(() => {
    const getRecipes = async () => {
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    // проверяем есть ли доступ
    // console.log(responce)
    const data = await responce.json();

    setMyRecipes(data.hits);
    // проверяем есть ли доступ к инфо в нужном нам формате и смотрим, как прописаны название, фото и т.д.
     //console.log(data) и потом console.log(data.hits)
    console.log(data)
    }

    getRecipes()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
    console.log(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return (
    <div className="App">
      
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>The Best Recipes for Every Day</h1>
        <h2>Find a Recipe</h2>
      </div>

      <div className="container-input">
        <form onSubmit={finalSearch}>
          <input className="search" placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
        </form>

        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" className="icons" alt="search"/>
        </button>
      </div>

      <div className='container'> 
        {myRecipes.map(element => (
          <MyRecipesComponent 
          label={element.recipe.label} 
          cuisine={element.recipe.cuisineType}
          image={element.recipe.image} 
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines} 
          meal={element.recipe.mealType}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
