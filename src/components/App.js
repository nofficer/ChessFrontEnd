import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeMove, getBoard, botMove, makeTurn, resetGame} from '../actions'




class App extends React.Component {
  componentDidMount(){
    this.moveList = []
    this.props.makeTurn('Your move...')
  }



  async holdMove(a){
    var prevBoard = this.props.board
    this.moveList.push(Number(a))
    console.log(this.moveList)

    if (this.moveList.length==2){
        await this.props.makeMove([this.moveList,prevBoard, this.props.side])

      if(this.props.turncounter == 1){
        this.props.botMove([this.props.board,this.props.side])
        this.props.makeTurn('Bot Moving...')
        this.moveList = []
      }
      else {
        this.props.makeTurn('Illegal move try again')
        this.moveList = []
      }
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
      colour = colour + piececlass
      return (
        <div key={i} onClick = {(e) => this.holdMove(e.target.id)} id={i} class={colour} >{pieceMap[piece]}</div>
      )
  }

  renderList(board){

    if(board){
      var i = -1
      var c = [0,2,4,6,9,11,13,15,16,18,20,22,25,27,29,31,32,34,36,38,41,43,45,47,48,50,52,54,57,59,61,63]
      return board.map((piece) => {
        i++
        if(c.includes(i)){
          return this.makePiece(piece.toString(), i, 'beige' )
        }
        else{
          return this.makePiece(piece.toString(), i, 'brown' )
        }
      })
    }
    else {
      return "Board Loading..."
    }
  }

  resetfunc(whoturn,switchside){
    var side = this.props.side
    var boardfen = this.props.board
    this.props.resetGame([switchside, side, boardfen])
    this.movelist = []
    this.props.makeTurn(whoturn)

  }



  render(){
    return (
      <div class='bigbox'>

      <div class="turnindicator">
        <h1>
        Bot Officer
        </h1>
        <h3 class='right'>
        CHESS ROBOT
        </h3>
        <div>
          {this.props.turn}
          </div>
          <button class='myB' onClick={() => this.resetfunc('Bot Moving...',['Yes'])}>
          Switch Sides
          </button>
          <button class='myB' onClick={() => this.resetfunc('Your Move...',['No'])}>
          New Game
          </button>
          </div>
        <div class="chessboard">
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
    side:state.game.side
  }
}

export default connect(mapStateToProps, { makeMove, getBoard, botMove, makeTurn, resetGame})(App)
