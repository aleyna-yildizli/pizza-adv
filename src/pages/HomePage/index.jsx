import React from 'react'
import Button from '../../components/Button'
import "./style.css";

export default function HomePage () {
    return (
       <div className='bgMainDiv'>
        <div className='homePageBody'>
            <p className="homePageBodyDescription">KOD ACIKTIRIR PİZZA, DOYURUR</p>
            <Button id="order-pizza" text="ACIKTIM-adv" to="/pizza" style={{ borderRadius: 50, top: 0 }}  />
        </div>
       </div>
    )
}