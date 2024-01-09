import React from 'react'
import Button from '../../components/Button'
import "./style.css";

export default function HomePage (){
    const handleOnClick = () => { 
         alert("Woo!")
    }

    return (
       <div className='bgMainDiv'>
        <Button text="ACIKTIM" onClick={handleOnClick} />
       </div>
    )
}