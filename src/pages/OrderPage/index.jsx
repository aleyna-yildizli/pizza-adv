import React, { useState } from 'react'
import "./style.css";
import { Card, Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '../../components/Button';

const initialForm = {
 size: "",
 hamur: "",
 ingredients: [],
 message: ""
}

const ingredientOptions = [
    'Pepporini',
    'Sosis',
    'Kanada Jambonu',
    'Tavuk Izgara',
    'Soğan',
    'Domates',
    'Mısır',
    'Sucuk',
    'Jalepeno',
    'Sarımsak',
    'Biber',
    'Ton Balığı',
    'Ananas',
    'Kabak',
  ];

export default function OrderPage (){
    const [formData, setFormData] = useState(initialForm);
    const [count, setCount] = useState(1);

    function handleChange(event) {
        const { name, value, checked } = event.target;
        let ingredients = formData?.ingredients || [];
      
        if (name === "ingredient") {//Ek malzeme kontrolü
          if (!checked) {
            ingredients = ingredients.filter((ing) => ing !== value);//Seçmekten vazgeçti ise sil
          } else if (ingredients.length >= 10) {
            return;//Hali hazırda 10'dan fazla seçili ise bir işlem yapma
          } else {
            ingredients = [...ingredients, value];//Seçti ve seçili sayısı 10'dan fazla değil ise ekle
          }
        }
      
        setFormData({ ...formData, [name]: value, ingredients });
      }

      const formatAsCurrency = (amount) => {
        const formattedAmount = amount.toLocaleString('tr-TR', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
        
          return `${formattedAmount}₺`;
      }

      const calculateIngredientPrice = () => {
        const ingredientTotal = formData?.ingredients?.length ?? 0;
        const totalPrice = 5 * ingredientTotal;

        const formattedTotalPrice = formatAsCurrency(totalPrice);

        return formattedTotalPrice;

      }

      const calculateTotalPrice = () => {
        const totalIngredients = formData?.ingredients?.length ?? 0;
        const totalIngredientsPrice =  totalIngredients * 5;

        const pizzaPrice = 85.5 * count;

        const totalPrice = pizzaPrice + totalIngredientsPrice;

        const formattedTotalPrice = formatAsCurrency(totalPrice);

        return formattedTotalPrice;
      }

    return (
        <div className='orderPageMainDiv'>
            <div className='content'>
            <p className='title'>Position Absolute Acı Pizza</p>
            <div className='priceInfo'>
                <div className='priceInfo-begin'>
                  85.50₺
                </div>
                <div className='priceInfo-end'>
                    <span>4.9</span>
                    <span>(200)</span>
                </div>
            </div>
            <p className='description'>
             Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
            </p>
            <div className='formSection'>
            <Form onSubmit={onsubmit}>

            <div className='sizeSelection'>
            <FormGroup>
            <p className='sizeSelectionTitle'>Boyut seç *</p>
            <Input
              id="kucukBoy"
              name="size"
              type="radio"
              value={"kucukBoy"}
              onChange={handleChange}
              checked={formData.size == "kucukBoy"}
            />
            <Label for="kucukBoy">Küçük</Label>
            <br />
            <Input
              id="ortaBoy"
              name="size"
              type="radio"
              value={"ortaBoy"}
              onChange={handleChange}
              checked={formData.size == "ortaBoy"}
            />
            <Label for="ortaBoy">Orta</Label>
            <br />
            <Input
              id="buyukBoy"
              name="size"
              type="radio"
              value={"buyukBoy"}
              onChange={handleChange}
              checked={formData.size == "buyukBoy"}
            />
            <Label for="buyukBoy">Büyük</Label>
            </FormGroup>

             <FormGroup>
            <Label for="hamurSec" className='sizeSelectionTitle'>Hamur Seç *</Label> <br />
            <Input
              id="hamur"
              name="hamur"
              type="select"
              value={formData.hamurSec}
              onChange={handleChange}
            >
              <option>Normal</option>
              <option>İnce Kenar</option>
              <option>Kalın Kenar</option>
            </Input>
             </FormGroup>
             </div>

             <FormGroup>
              <div className='ingredientHeader'>
                <p className='ingredientTitle'>Ek Malzemeler</p>
                <p className='ingredientInfo'>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </div>
           
             {ingredientOptions.map((ingredient) => (
            <label className='ingredientOption'>
              <input
                type="checkbox"
                name='ingredient'
                value={ingredient}
                checked={formData?.ingredients?.includes(ingredient)}
                onChange={() => handleChange(event)}
              />
              {ingredient}
            </label>
           ))}
             </FormGroup>

         <FormGroup className='orderMessage'>
            <Label for="message" className='orderMessageTitle'>Sipariş Notu</Label><br />
            <Input
               id="message"
               name="message"
               placeholder="Siparişine eklemek istediğin bir not var mı?"
               type="input"
               className="customerMessage"
               value={formData.message}
               onChange={handleChange}
               size={100}
            />
          </FormGroup>
          <div className="orderConfirm">
            <div className="orderCounter">
              <button className="orderCounterButton" type="button" onClick={() => setCount((count) => count - 1)}>
                -
              </button>
              <button disabled className="totalCounter orderCounterButton">
                {count}
              </button>
              <button className="orderCounterButton" type='button' onClick={() => setCount((count) => count + 1)}>
                +
              </button>
            </div>
            <div className="orderSummary">
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
              <Button id="order-button" text="SİPARİŞ VER" to="/result" style={{ borderRadius: 6, height: "66px", width: "100%" }}  />
            </div>
          </div>
            </Form>

            </div>
            </div>
        </div>
    )
}