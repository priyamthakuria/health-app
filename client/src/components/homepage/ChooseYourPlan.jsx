import React from 'react';
import '/src/styles/ChooseYourPlan.css';
import PlanCard from '../common/PlanCard';

function ChooseYourPlan() {
  const plans = [
    { name: 'Basic Plan', price: '$10/month', description: 'Basic access to mental health resources.' },
    { name: 'Premium Plan', price: '$30/month', description: 'Access to one-on-one therapy sessions.' },
    { name: 'Gold Plan', price: '$50/month', description: 'All-inclusive mental health support, including workshops.' },
    { name: 'Platinum Plan', price: '$80/month', description: 'Comprehensive therapy and mental wellness services.' },
    { name: 'Diamond Plan', price: '$100/month', description: 'Exclusive therapy and personal wellness coach.' },
    { name: 'Ultimate Plan', price: '$150/month', description: 'All-access pass with premium support and events.' },
  ];

  const handlePlanSelection = (plan) => {
    console.log(`Selected plan: ${plan.name}`);
    // Here you would handle plan selection, perhaps navigating to a checkout page
    // or showing a modal with more information
  };

  return (
    <div className="choose-your-plan">
      <h2>Choose Your Plan</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            onGetStarted={() => handlePlanSelection(plan)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChooseYourPlan;
