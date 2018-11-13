import React, { Component } from 'react';

class CocktailForm extends Component {
  state={
    name: "",
    description: "",
    instructions: ""
  }

  changeHandler = (event) => {
      console.log(event.target.value);
      this.setState({
        [event.target.name]: event.target.value
      });
    };

render(){
  return(
    <div>
      <button onClick={this.props.clickHandler}  onSubmit={event => this.props.submitHandler(event, this.state)}>Back</button>
      <div>
        <form>
          <p>
            <input type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler} name="name"/>
          </p>
          <input type="text" placeholder="description" value={this.state.descriptioninstructions} onChange={this.changeHandler} name="description"/>
          <p>
            <input type="text" placeholder="instructions" value={this.state.instructions} onChange={this.changeHandler} name="instructions"/>
          </p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}



}

export default CocktailForm;
