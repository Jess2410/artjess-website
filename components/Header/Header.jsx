import React,{useState} from 'react'
import Image from 'next/image'
import menu from '/public/images/menu.png'
import close from '/public/images/close.png'
import './Header.module.css'

export default function Header() {

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 

    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
     };
  return (

       <header className="header">
         <div className='navbar'>
            <a href="#" className="logo"></a>
            <div className={isActive ? "toggle" : "active"} onClick={ToggleClass }>
                <Image src={isActive ? menu : close} width={25} height={25} alt="icon"/>
            </div>
            <ul className="navigation">
                <li><a href="#" >Home</a></li>
                <li><a href="#about" >About</a></li>
                <li><a href="#gallery" >Gallery</a></li>
                <li><a href="#shop" >Shop</a></li>
                <li><a href="#contact" >Contact</a></li>
            </ul>
          </div>
          <div className="banner" id="home">
            <h2><span>Jess</span></h2>
            <h3>Illustrations<br/><span>Digital Painting</span></h3>
            <a href="">Enter</a>
            {/* <Image src={bgjess} alt="background"  layout="fill" /> */}
        </div>
        </header>
        
  )
}
