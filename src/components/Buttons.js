import React, {useState} from 'react'



const myB = {
  fontFamily: 'Italiana',
  border:0.1 'solid' '#FFFFFF',
  margin: 20,
  width: 150,
  height: 40,
  color:'#FFFFFF',
  backgroundcolor: '#001a33',
  transition:'0.2s',
  fontweight:300,
  paddingVertical:0.35,
  paddingHorizontal:1.2,
  weight: 'bold',
  fontSize: 15
}

const myBHover = {
  fontFamily: 'Italiana',
  border:0.1 'solid' '#FFFFFF',
  margin: 20,
  width: 150,
  height: 40,
  color:'#000000',
  backgroundcolor: '#FFFFFF',
  transition:'0.2s',
  fontweight:300,
  paddingVertical:0.35,
  paddingHorizontal:1.2,
  weight: 'bold',
  fontSize: 15,
  cursor: 'pointer';
}

const Buttons = () => {


  return(
    <div>
    <button class='myB' onMouseEnter onClick={() => this.resetfunc('Bot Moving...',['Yes'])}>
    Switch Sides
    </button>
    <button class='myB' onClick={() => this.resetfunc('Your Move...',['No'])}>
    New Game
    </button>
    </div>
  )
}
