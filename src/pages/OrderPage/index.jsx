import React, { useState, useEffect } from 'react'
import "./style.css";
import { Card, Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '../../components/Button';
import axios from 'axios';
import  Calculation from '../../components/Calculation';

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

  const sizeOptions = {
    S: "S",
    M: "M",
    L: "L"
  }

export default function OrderPage (props){
   const {formDataOnChange, formData, count, countOnChange } = props;

 

    function handleChange(event) {
        const { name, value, checked } = event.target;
        let ingredients = formData?.ingredients || [];
      
        if (name === "ingredient") {//Ek malzeme kontrolü
          if (!checked) {
            ingredients = ingredients.filter((ing) => ing !== value);//Seçmekten vazgeçti ise sil/seçimi kaldır
          } else if (ingredients.length >= 10) {
            return;//Hali hazırda 10'dan fazla seçili ise bir işlem yapma
          } else {
            ingredients = [...ingredients, value];//Seçti ve seçili sayısı 10'dan fazla değil ise ekle
          }
        }
      
        const data = { ...formData, [name]: value, ingredients };
        formDataOnChange(data);
      }
     

      const writeOrderSummary = () => {
        axios.post('https://reqres.in/api/users', formData)
        .then(response => {
            console.log('response', response);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
       /* console.log("SİPARİŞ ÖZETİ");
        console.log("Müşteri İsmi:", formData.name);
        console.log("Pizza Adı:", "Position Absolute Acı Pizza");
        console.log("Pizza Sayısı:", count);
        console.log("Seçilen Malzemeler:", formData.ingredients.join(', '));
        console.log("Hamur Seçimi:", formData.hamur);
        console.log("Boyut:", sizeOptions[formData.size]);
        console.log("Toplam Tutar:", calculateTotalPrice());
      
      */
      }

      useEffect(() => {
        axios.get('https://reqres.in/api/users')
          .then(response => {
            const rastgeleNumara = () => Math.floor(Math.random() * 6);
            const index = rastgeleNumara();
            const firstUserName = response.data.data[index].first_name ?? "Aleyna";

            const data = { ...formData, name: firstUserName };
            formDataOnChange?.(data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      }, []);

   

      const handleCountChange = (value) =>  {
        countOnChange(value);
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
            <Form onSubmit={onsubmit} id="pizza-form">

            <div className='sizeSelection'>
            <FormGroup id="size-radio">
            <p className='sizeSelectionTitle'>Boyut seç <span className='sizeSelectionRedTitle'>*</span></p>
            <div className='sizeSelectionOption'>
            <Input
              id="kucukBoy"
              name="size"
              type="radio"
              value={"S"}
              onChange={handleChange}
              checked={formData.size == "S"}
            />
            <Label for="kucukBoy">S</Label>
            </div>
            <div className='sizeSelectionOption'>
            <Input
              id="ortaBoy"
              name="size"
              type="radio"
              value={"M"}
              onChange={handleChange}
              checked={formData.size == "M"}
            />
            <Label for="ortaBoy">M</Label>
            </div>
            <div className='sizeSelectionOption'>
            <Input
              id="buyukBoy"
              name="size"
              type="radio"
              value={"L"}
              onChange={handleChange}
              checked={formData.size == "L"}
            />
            <Label for="buyukBoy">L</Label>
            </div>
            </FormGroup>
            <FormGroup>
            <Label for="hamurSec" className='sizeSelectionTitle'>Hamur Seç <span className='sizeSelectionRedTitle'>*</span></Label> <br />
            <Input
              id="hamur"
              name="hamur"
              placeholder="-Hamur Kalınlığı Seç-"
              type="select"
              value={formData.hamurSec}
              onChange={handleChange}
            >
              <option disabled value="" selected>-Hamur Kalınlığı Seç-</option>
              <option>Süpper İnce</option>
              <option>İnce Kenar</option >
              <option>Normal</option>
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
                onChange={handleChange}
              />
              {ingredient}
            </label>
           ))}
             </FormGroup>

            <FormGroup className='orderMessage-Name'>
            <Label for="name" className='orderMessageTitle'>İsim</Label><br />
            <Input
               id="name-input"
               name="name"
               placeholder="İsminizi Giriniz!"
               type="input"
               className="customerMessage"
               value={formData.name}
               onChange={handleChange}
               size={100}
               autocomplete="off"
            />
          </FormGroup>

         <FormGroup className='orderMessage'>
            <Label for="message" className='orderMessageTitle'>Sipariş Notu</Label><br />
            <Input
               id="malzemeler-checkbox"
               name="message"
               placeholder="Siparişine eklemek istediğin bir not var mı?"
               type="input"
               className="customerMessage"
               value={formData.message}
               onChange={handleChange}
               size={100}
               autocomplete="off"
            />
          </FormGroup>
          <div className="orderConfirm">
            <div className="orderCounter">
              <button className="orderCounterButton" type="button" onClick={() => handleCountChange(count > 1 ? count - 1 : 1)}>
                -
              </button>
              <button disabled className="totalCounter orderCounterButton">
                {count}
              </button>
              <button className="orderCounterButton" type='button' onClick={() => handleCountChange(count + 1)}>
                +
              </button>
            </div>
            <div className="orderSummary">
              <Calculation formData={formData} count={count}></Calculation>
              <Button onClick={writeOrderSummary} id="order-button" text="SİPARİŞ VER" to="/result" style={{ borderRadius: 6, height: "66px", width: "100%" }}  />
            </div>
          </div>
            </Form>

            </div>
            </div>
        </div>
    )
}