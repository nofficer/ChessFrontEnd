import React from 'react'
import './index.css'


const turnindicatorStyle = {
  fontSize: 30,
  color:'white',
  marginLeft: 200,
  marginTop: 150,
  fontFamily: 'Italiana',

}

const rightStyle = {
  fontFamily: 'Italiana',
  fontStyle: 'italic',
  textAlign: 'Right',
  color:'white'
}

const ChessBoard = ({resetfunc,renderList}) => {
  return (
    <div className='bigbox'>
      <h1 style={turnindicatorStyle}>
       Bot Officer
      </h1>
      <h3 style={rightStyle}>
      CHESS ROBOT
      </h3>


    </div>
  )
}

export default ChessBoard
// 
// <div class='bigbox'>
//
//       <div class="turnindicator">
//         <h1>
//         Bot Officer
//         </h1>
//         <h3 class='right'>
//         CHESS ROBOT
//         </h3>
//         <div>
//           {this.props.turn}
//           </div>
//           <button class='myB' onClick={() => this.resetfunc('Bot Moving...',['Yes'])}>
//           Switch Sides
//           </button>
//           <button class='myB' onClick={() => this.resetfunc('Your Move...',['No'])}>
//           New Game
//           </button>
//           </div>
//         <div class="chessboard container">
//             {this.renderList(this.props.board)}
//         </div>
//
//
//       </div>
