import React from 'react';
import "./style.css";

const Calculation = (props) => {
  const { formData, count } = props;

 //Ekstra malzemelerin toplam tutarını hesaplıyor.
  const calculateIngredientPrice = () => {
    const ingredientTotal = formData.ingredients.length; //ekstra malzeme sayısı
    const totalPrice = 5 * ingredientTotal; // ekstra malzeme toplam tutarı

    const formattedTotalPrice = formatAsCurrency(totalPrice);

    return formattedTotalPrice;
  }

  //Tüm siparişin toplam tutarını hesaplıyor.
const calculateTotalPrice = () => {
    const totalIngredientsCounts = formData.ingredients.length;//ekstra malzeme sayısı
    const totalIngredientsPrice =  totalIngredientsCounts * 5;// ekstra malzeme toplam tutarı

    const pizzaPrice = 85.5 * count;// pizza adeti * pizza fiyatı

    const totalPrice = pizzaPrice + totalIngredientsPrice;

    const formattedTotalPrice = formatAsCurrency(totalPrice); // parayı formatlı göster lira sembolınü koy.

    return formattedTotalPrice;
  }


//Para birimini 25.00₺ formatına göre düzenleyen fonksiyon.
 const formatAsCurrency = (amount) => {
    const formattedAmount = amount.toLocaleString('tr-TR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    
      return `${formattedAmount}₺`; // formatlanan tutarın sonuna TL simgesi ekleme
  }
  


  return (
    <div className="summaryCard">
    <p className='summaryCardTitle'>Sipariş Toplamı</p>
    <div className="summaryValueGroup">
      <div className="summaryValueGroupTitle">Seçimler</div>
      <div className="summaryValueGroupValue">{calculateIngredientPrice()}</div>
    </div>
    <div className="summaryValueGroup summaryValueGroup-red">
      <div className="summaryValueGroupTitle">Toplam</div>
      <div className="summaryValueGroupValue">{calculateTotalPrice()}</div>
    </div>
  </div>
  );
};

export default Calculation;
