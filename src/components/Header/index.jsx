import React, {useState} from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  
    if (location.pathname === '/pizza') {
     show==false && setShow(true);
    } else {
     show==true && setShow(false);
    }
 


  return (
    <div className='headerMain'>
       <img src="../../logo.svg" />
       {show && (
        <div className='headerMainInfo'>
          <p className='headerMainInfoTitle'>Ana Sayfa &nbsp;-&nbsp;</p>
          <p className='headerMainInfoDesc'>Sipariş Oluştur </p>
       </div>
       )}
    </div>
  );
};

export default Header;
