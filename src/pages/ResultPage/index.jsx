import React from 'react';
import "./style.css";
import Calculation from '../../components/Calculation';
import { usePizzaForm } from '../../context';

export default function ResultPage () {
    const { formData, count } = usePizzaForm();
    const ingredients = formData.ingredients.join(', ');

    return (
        <div className='resultPageMainDiv'>
           <div className='resultPageMainDivContent'>
           <p className='resultPageMainDivTitle'>lezzetin yolda</p>
           <p className='resultPageMainDivDescription'>SİPARİŞ ALINDI</p>
           <p className='resultPageMainDivPizzaText'>Position Absolute Acı Pizza </p>
           <div className='resultPageSectionOne'>
           <div className='resultPageSectionOneWrapper'>
           <div className='resultPageSelectionInfo'>
           <p className='resultPageSelectionInfoText'>Boyut: </p>
           <p className='resultPageSelectionInfoValue'>{formData.size} </p>
           </div>
           <div className='resultPageSelectionInfo'>
           <p className='resultPageSelectionInfoText'>Hamur:</p>
           <p className='resultPageSelectionInfoValue'>{formData.hamur} </p>
           </div>
           <div className='resultPageSelectionInfo'>
           <p className='resultPageSelectionInfoText'>Ek Malzemeler:</p>
           <p className='resultPageSelectionInfoValue'>{ingredients} </p>
           </div>
           </div>
           </div>
           <div className='resultPageCalculation'>
           <Calculation formData={formData} count={count} style={{color:"white"}}></Calculation>
           </div>
           </div>
        </div>
    )
}