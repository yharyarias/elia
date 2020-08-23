import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <div className="card-header"><p className="card-header-text">{props.textHead}</p></div>
      <div className="card-user">
        <img src={props.img} alt="user" className="card-circle" width="62" height="62" />
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-type">{props.type}</div>
      <div className="card-price">{props.price}</div>
    </div>
  );
}

export default Card;