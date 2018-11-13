import React, { Component } from 'react'

const IngredientsCard = (props) => (
  <div>
    <li><strong>{props.proportion.ingredient_name}: </strong> {props.proportion.amount}</li>
  </div>
);

export default IngredientsCard;
