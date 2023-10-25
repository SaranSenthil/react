import React from 'react';
import PriceCard from './PriceCard';

const PriceCardList = () => {
  const cardsData = [
    {
      title: "FREE",
      price: "$0/month",
      features: [
        { text: "Single User", hasTick: true },
        { text: "50GB Storage", hasTick: true },
        { text: "Unlimited Public Projects", hasTick: true },
        { text: "Community Access", hasTick: true },
        { text: "Unlimited Private Projects", hasTick: false },
        { text: "Dedicated phone support", hasTick: false },
        { text: "Free Subdomain", hasTick: false },
        { text: "Monthly Status Reports", hasTick: false },
       
      ],
      buttonText: "Button",
    },
    {
        title: "PLUS",
        price: "$9/month",
        features: [
          { text: "Single User", hasTick: true },
          { text: "50GB Storage", hasTick: true },
          { text: "Unlimited Public Projects", hasTick: true },
          { text: "Community Access", hasTick: true },
          { text: "Unlimited Private Projects", hasTick: true },
          { text: "Dedicated phone support", hasTick: true },
          { text: "Free Subdomain", hasTick: true },
          { text: "Monthly Status Reports", hasTick: false },
         
        ],
        buttonText: "Button",
    },
    {
        title: "PRO",
    price: "$49/month",
    features: [
      { text: "Single User", hasTick: true },
      { text: "50GB Storage", hasTick: true },
      { text: "Unlimited Public Projects", hasTick: true },
      { text: "Community Access", hasTick: true },
      { text: "Unlimited Private Projects", hasTick: true },
      { text: "Dedicated phone support", hasTick: true },
      { text: "Free Subdomain", hasTick: true },
      { text: "Monthly Status Reports", hasTick: true },
     
    ],
    buttonText: "Button",
    }
  ];

  return (
    <div className="price-card-list">
      {cardsData.map((card, index) => (
        <PriceCard key={index} {...card} />
      ))}
    </div>
  );
};

export default PriceCardList;
