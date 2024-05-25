import { render } from '@czechitas/render';
import { Header } from '../components/Header/header.jsx';
import { Intro } from '../components/Intro/intro.jsx';
import { Pose } from '../components/Pose/pose.jsx';
import obrazek from '../img/yoga-pose.jpg';
import './style.css';

const text_stranky = {
    title: 'Jogíni',
    heading: 'Vítejte mezi Jogíny',
    text: 'Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem. Postupně se seznámíte se základními principy jógy, jak přístupovat k soubě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu svoje tělo, pocity a emoce.',
    src: 'img/yoga-pose.jpg'

}

document.querySelector('#app').innerHTML = render(

      <div className="app container">
        <Header title= {text_stranky.title}></Header> 
        
        <Intro heading = {text_stranky.heading} text = {text_stranky.text}></Intro> 
       
               <Pose src={obrazek}></Pose> 
      </div>
    )
  
  

  