import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeMove, getBoard, botMove, makeTurn, resetGame, movelistaction} from '../actions'
import Fragment from 'react'
import TurnText from './TurnText'
import './index.css'



function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
  }

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

var mapper = {'a8': 0, 'b8': 1, 'c8': 2, 'd8': 3, 'e8': 4, 'f8': 5, 'g8': 6, 'h8': 7, 'a7': 8, 'b7': 9, 'c7': 10, 'd7': 11, 'e7': 12, 'f7': 13, 'g7': 14, 'h7': 15, 'a6'
: 16, 'b6': 17, 'c6': 18, 'd6': 19, 'e6': 20, 'f6': 21, 'g6': 22, 'h6': 23, 'a5': 24, 'b5': 25, 'c5': 26, 'd5': 27, 'e5': 28, 'f5': 29, 'g5': 30, 'h5': 31,
 'a4': 32, 'b4': 33, 'c4': 34, 'd4': 35, 'e4': 36, 'f4': 37, 'g4': 38, 'h4': 39, 'a3': 40, 'b3': 41, 'c3': 42, 'd3': 43, 'e3': 44, 'f3': 45, 'g3': 46, 'h3'
: 47, 'a2': 48, 'b2': 49, 'c2': 50, 'd2': 51, 'e2': 52, 'f2': 53, 'g2': 54, 'h2': 55, 'a1': 56, 'b1': 57, 'c1': 58, 'd1': 59, 'e1': 60, 'f1': 61, 'g1': 62,
 'h1': 63}

class App extends React.Component {
  componentDidMount(){
    this.moveList = []
    console.log("component did mount running")
    this.props.makeTurn('Your Move...')
  }


  async holdMove(a){
    var prevBoard = this.props.board
    this.moveList.push(Number(a))
    console.log(this.moveList)
    this.props.movelistaction(this.moveList)
    if (this.moveList.length==2){
        await this.props.makeMove([this.moveList,prevBoard, this.props.side])

      if(this.props.turncounter == 1){
        this.props.botMove([this.props.board,this.props.side])
        this.props.makeTurn('Bot Moving...')
        this.moveList = []
        this.props.movelistaction(this.moveList)
      }
      else {
        this.props.makeTurn('Illegal move try again')
        this.moveList = []
        this.props.movelistaction(this.moveList)
      }
      }
    else if (this.moveList.length==1){
      this.props.makeTurn('Moving from square: ' + getKeyByValue(mapper,this.moveList[0]))
    }

    }


  makePiece(piece, i, colour){
    var pieceMap = {
      '4': '\u265C',
      '2' : '\u265E',
      '3' : "\u265D",
      '5' : "\u265B",
      '6' : "\u265A",
      '1' : "\u265F",
      '10' : '\u2656',
      '8' : '\u2658',
      '9' : '\u2657',
      '11' : '\u2655',
      '12' : '\u2654',
      '7' : '\u2659',
      '0' : ''
    }
    var unicode = '\u2655'
    if(piece > 6) {
      var piececlass = "whitepiece"
    }

    else {
      var piececlass = ""
    }
      colour = colour + piececlass + ' col'
    return (
          <div key={i} onClick = {(e) => this.holdMove(e.target.id)} id={i} className={colour} >{pieceMap[piece]}</div>
        )
  }

  renderList(board){
    if(board){
      var matrix = listToMatrix(board,8)
      var i = -1
      var c = [0,2,4,6,9,11,13,15,16,18,20,22,25,27,29,31,32,34,36,38,41,43,45,47,48,50,52,54,57,59,61,63]
      var n = -1
      return (matrix.map((row) =>{
        n++
        return (<div class='row row-cols-8 chessrow flex-nowrap'>{
          row.map((piece) => {
            i++
            if(row.includes(piece)) {
              if(c.includes(i)){
                return (this.makePiece(piece.toString(), i, 'beige' ))
              }
              else {
                return (this.makePiece(piece.toString(), i, 'brown'))
              }

            }

          })
        }</div>) }))
      }
    else {
      return "Board Loading..."
        }
}



      // return board.map((piece) => {
      //   i++
      //   if(c.includes(i) && r.includes(i)){
      //     return (this.makePiece(piece.toString(), i, 'beige', 'end' ))
      //   }
      //   else if (r.includes(i)) {
      //     return this.makePiece(piece.toString(), i, 'brown', 'end')
      //   }
      //   else if (c.includes(i)) {
      //     return (this.makePiece(piece.toString(), i, 'beige', 'not' ))
      //   }
      //   else {
      //     return this.makePiece(piece.toString(), i, 'brown', 'not')
      //   }
      // })


  resetfunc(whoturn,switchside){
    var side = this.props.side
    var boardfen = this.props.board
    this.props.resetGame([switchside, side, boardfen])
    this.movelist = []
    this.props.makeTurn(whoturn)

  }



  render(){
    return (

      <div className='bigbox'>

            <div className="turnindicator">
              <h1>
              Bot Officer
              </h1>
              <h3 className='right'>
              CHESS ROBOT
              </h3>
              <div>
                <TurnText text={this.props.turn} />
                </div>
                <button className='myB' onClick={() => this.resetfunc('Bot Moving...',['Yes'])}>
                Switch Sides
                </button>
                <button className='myB' onClick={() => this.resetfunc('Your Move...',['No'])}>
                New Game
                </button>
                </div>
              <div className="chessboard container">
                  {this.renderList(this.props.board)}
              </div>


            </div>

    )
  }

}

const mapStateToProps =(state) => {
  return {
    move: state.game.move,
    board: state.game.board,
    turn: state.game.turn,
    turncounter: state.game.turncounter,
    side:state.game.side,
    moveList: state.game.movelist
  }
}

export default connect(mapStateToProps, { makeMove, getBoard, botMove, makeTurn, resetGame, movelistaction})(App)
