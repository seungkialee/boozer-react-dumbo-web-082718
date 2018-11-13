import React, { Component } from 'react';
// import CocktailIngredients from './CocktailIngredients'
import IngredientsCard from './IngredientsCard';
import Popup from "reactjs-popup";


class CocktailCard extends Component {
  constructor(){
    super();
    this.state= {
      ingredients: undefined
    }
  }

  componentWillMount(){
    fetch(`http://localhost:3000/api/v1/cocktails/${this.props.cocktailObj.id}`)
    //get the id into the fetch
    .then(resp=>resp.json())
    .then(data=>this.setState({ingredients: data}))
  }

render(){
  // console.log(this.state.ingredients)
  if(this.state.ingredients === undefined) {
    return(
      <h1>Loading...</h1>
    )
  } else {
    let proportions = this.state.ingredients.proportions
    let proportionsArray = proportions.map(proportionObj => (
      // console.log(proportionObj)
      <IngredientsCard key={proportionObj.id} proportion={proportionObj}/>
    ))
    // console.log("after", proportions)
    return(
      <div>
        <Popup
          trigger={<h1>
            <div>
              {this.props.cocktailObj.name}
            </div>
          </h1>}
          modal
          closeOnDocumentClick
        >
          <span>
            <h1>{this.props.cocktailObj.name}</h1>
            <p><strong>Description: </strong>{this.props.cocktailObj.description}</p>
            <p><strong>Instruction: </strong>{this.props.cocktailObj.instructions}</p>
            {proportionsArray}
          </span>
        </Popup>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      </div>
    );
  }
}
}
export default CocktailCard;
