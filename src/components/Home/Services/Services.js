import React from 'react'
import '../../../css/Home/Services.css'
import PricingTable from './PricingTable'

function Services() {
  return (
    <div className='services'>
      {/* <h1>Services</h1> */}

      <div className="services__Title">
        <h2>Tailored Grooming Services to Meet Your Dog's Unique Needs</h2>
      </div>

      <div className="services__body">
        <p>
        We offer a range of customized grooming services designed to meet 
        your dog's specific requirements. From refreshing baths using premium 
        shampoos to nail trimming, nail grinding, and others, we ensure your pup 
        looks and feels their best. Our services are personalized, gentle, and 
        delivered with love to provide a positive grooming experience. 
        </p>
      </div>

      <div className="pricing__section">
        <div className="pricing__title">
            <h3>Grooming That Fits Your Budget</h3>
            <PricingTable />
        </div>
      </div>
      
    </div>
  )
}

export default Services
