function MyRecipesComponent({label, cuisine, image, meal, ingredients, calories, healthLabels}) {
    return(<div className="container-recipe">
        
        <div className="container"> 
        <hr />
        <hr />
            <h3>{label}</h3>
        </div>
        <div className="container">
            <h4 className="uppercase" >cuisine: {cuisine}</h4>
        </div>
        <div className="container"> 
            <h5 className="uppercase">{meal}</h5>
        </div>

        <div className="container-mini">
            <div className="container"> 
                <img src={image} className="image" alt="food"/>
                <p>{calories.toFixed()} calories</p>
            </div>
        {/* <div className="container">  */}
            <ul className="list"> 
                {ingredients.map(ingredient => (
                    <li >
                    <img src="https://img.icons8.com/flat-round/512/checkmark.png" className="done" alt="done"/>
                    {ingredient}
                    </li>
                ))}
                
            </ul>
        {/* </div> */}
        
        </div>
        
    </div>)
}

export default MyRecipesComponent;