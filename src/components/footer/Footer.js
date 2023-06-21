import React from  'react'
import "./Footer.css";
function Footer(){
    return(<footer>
        <p>Made by Shamshad</p>
        <p className='copyright'>Copyright {new Date().getFullYear()}</p>
       </footer>
    );
}
export default Footer;