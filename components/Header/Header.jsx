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

    <div>
       <header>
            <a href="#" className="logo">Art of Jess</a>
            <div className={isActive ? "toggle" : "active"} onClick={ToggleClass }>
                <Image src={isActive ? menu : close} width={25} height={25} alt="icon"/>
            </div>
            <ul className="navigation">
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Characters</a></li>
                <li><a href="#" >Movies</a></li>
                <li><a href="#" >Games</a></li>
                <li><a href="#" >More</a></li>
            </ul>
        </header>
    </div>
  )
}
