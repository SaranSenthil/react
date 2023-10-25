import React from 'react';


const PriceCard = (props) => {
  const { title, price, features, buttonText, onClick, strikeoutFeatures,description} = props;

  return (

    <div className="price-card">
      <h6>{title}</h6>
      <p className="price">{price}</p>
      <hr></hr>
      <ul className="features">
        {features.map((feature, index) => (
   
    <li key={index}>{feature.hasTick ? '✔  ' : '✗  '}
          
          <span className={feature.hasTick ? ' ' : 'strikeout'}>
          {feature.text}
          </span>
        </li>
  
     ))}
      </ul>
      
      <button className="select-button" onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default PriceCard;
