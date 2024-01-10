import React from 'react';
import "./style.css";

export default function ResultPage (props){
    const { formData } = props;
    const ingredients = formData.ingredients.join(', ');

    return (
        <div className='resultPageMainDiv'>
           <div className='resultPageMainDivContent'>
           <p className='resultPageMainDivTitle'>lezzetin yolda</p>
           <p className='resultPageMainDivDescription'>SİPARİŞ ALINDI</p>
           <p className='resultPageMainDivPizzaText'>Position Absolute Acı Pizza </p>
           <div className='cardOne'>
           <p className='resultPageMainDivPizzaBoyut'>Boyut: {formData.size} </p>
           <p className='resultPageMainDivPizzaHamur'>Hamur: {formData.hamur} </p>
           <p className='resultPageMainDivPizzaEk'>Ek Malzemeler:{ingredients} </p>
           </div>
           </div>
        </div>
    )
}