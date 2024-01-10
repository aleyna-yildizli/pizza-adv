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
           </div>
        </div>
    )
}