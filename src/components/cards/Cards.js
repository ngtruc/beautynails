import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import manikure from './manikure.jpg'
import nailart from './nailart.jpg'
import pedikure from './pedikure.jpg'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={manikure}
              text='Maniküre Service entfernt Ihre Nagelhaut ordentlich und Ihre Hande sieht sehr ordentlich aus'
              label='Maniküere'
              path='/services'
            />
            <CardItem
              src={pedikure}
              text='Mit Pediküre werden Ihre Füße gut gepflegt, die Nagelhaut und die Hornhaut werden sorfältig entfernt '
              label='Pedikuere'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={nailart}
              text='Mit unseren professionelle UV Gel Design werden Ihre Nagel mit gewünschen Design gemacht.'
              label='Nail Art'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;