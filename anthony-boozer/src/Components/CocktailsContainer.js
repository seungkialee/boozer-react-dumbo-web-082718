import React, { Component } from 'react';
import CocktailCard from './CocktailCard';
import CocktailForm from './CocktailForm';

let cocktailsApi = `http://localhost:3000/api/v1/cocktails`
// let ingredientsApi = `http://localhost:3000/api/v1/cocktails/${id}`


class CocktailsContainer extends Component{

  constructor(props){
    super(props);
    this.state= {
      drinks: [],
      defaultPage: true
    };

  }

  componentDidMount(){
    fetch(cocktailsApi)
    .then(resp=>resp.json())
    .then(data=>this.setState({drinks: data}))
  }

  defaultPageHandler=(event)=>{
    if(this.state.defaultPage === true){
      this.setState({defaultPage: false}
    )} else {
      this.setState({defaultPage: true})
    }
  }

submitHandler=(event, object) => {
  event.preventDefault();
  console.log("submitting", object)
}



render(){
  const cocktails = this.state.drinks
  let cocktailCards = cocktails.map(cocktail => (
    <CocktailCard key={cocktail.id} cocktailObj={cocktail} />
  ));

  // console.log(this.state.ingredients)
  if (this.state.defaultPage === true) {
  return(
    <div>
      <div>
        <button onClick={this.defaultPageHandler}>To The Form!</button>
      </div>
      {cocktailCards}
    </div>
  )} else {
    return(
      <CocktailForm clickHandler={this.defaultPageHandler} submitHandler={this.submitHandler}/>
    )}
  }
}

export default CocktailsContainer;
