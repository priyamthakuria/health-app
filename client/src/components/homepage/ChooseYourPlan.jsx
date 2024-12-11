import React from 'react';
import '/src/styles/ChooseYourPlan.css';

function ChooseYourPlan() {
  const plans = [
    { name: 'Basic Plan', price: '$10/month', description: 'Basic access to mental health resources.' },
    { name: 'Premium Plan', price: '$30/month', description: 'Access to one-on-one therapy sessions.' },
    { name: 'Gold Plan', price: '$50/month', description: 'All-inclusive mental health support, including workshops.' },
    { name: 'Platinum Plan', price: '$80/month', description: 'Comprehensive therapy and mental wellness services.' },
    { name: 'Diamond Plan', price: '$100/month', description: 'Exclusive therapy and personal wellness coach.' },
    { name: 'Ultimate Plan', price: '$150/month', description: 'All-access pass with premium support and events.' },
  ];

  return (
    <div className="choose-your-plan">
      <h2>Choose Your Plan</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan-box" key={index}>
            <div className="plan-top">
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
            </div>
            <div className="plan-bottom">
              <p>{plan.description}</p>
              <button>Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseYourPlan;
