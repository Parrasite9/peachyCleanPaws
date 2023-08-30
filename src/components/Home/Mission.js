import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import '../../css/Home/Mission.css'

function Mission() {
  return (
    <div className='mission'>
      <div className="paw__print">
        <PetsIcon />
      </div>

      <div className="mission__section__title">
        <h1>Our Mission</h1>
      </div>

      <div className="mission__section__body">
        <p>Our mission and passion for dogs drives us to provide 
            the best care possible. We treat every dog as if they were our own, 
            showering them with love and attention during each visit.</p>
      </div>

      <div className="mission__learn__more">
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Mission
