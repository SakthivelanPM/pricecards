import React from 'react';
import './App.css';
import PricingCard from './PricingCard';

function App() {
  return (
    <div className="App">
      <h1> Subscription Plans</h1>
      <div className="pricing-container">
        <PricingCard
          title="FREE"
          price="$0/month"
          features={['single user', '50gb storage', 'unlimited public projects','community access']}
          features2={['unlimited private projects','dedecated phone supprot','free subdomain','monthly status report']}
        />
        <PricingCard
          title="PLUS"
          price="$9/month"
          features={['5 users', '50gb storage','unlimited public project','community access','unlimited private projects','dedecated phone supprot','free subdomain']}
          features2={['monthly status report']}
        />
        <PricingCard
          title="PRO"
          price="$49/month"
          features={['unlimited users', '50gb storage','unlimited public project','community access','unlimited private projects','dedecated phone supprot','free subdomain','monthly status report']}
        />
      </div>
    </div>
  );
}

export default App;
