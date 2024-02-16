import React from 'react';

const PricingCard = ({ title, price, features,features2 }) => {
  return (
    <div className="card">
      <h7 className="title">{title}</h7>
      <div className="price">{price}</div>
      <p>________________________________________________</p>
      <ul className="features">
        {features.map((features, index) => (
          <li key={index}> ✔️{features}</li>
        ))}
      </ul>
      <button className="btn">BUTTON</button>
    </div>
  );
};

export default PricingCard;
