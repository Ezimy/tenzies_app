import React from "react"
import Confetti from "react-confetti"
import Die from "/src/components/Die"
import {nanoid} from "nanoid"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const allSame = dice.every(die => die.value === dice[0].value)
    if (allHeld && allSame){
      setTenzies(true)
      console.log(tenzies)
      console.log("you win")
    }
    }, [dice])

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    function generateNewDie() {
      return {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
      }
  }
    function holdDice(id){
      setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
        {...die, isHeld: !die.isHeld} : 
        die
      }))
    }
    
    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
          return die.isHeld ?
          die :
          generateNewDie()
        }))
    }
    function resetGame(){
      setDice(allNewDice())
      setTenzies(false)
    }
    function getButton() {
      if(tenzies === true){
          return(
              <button className="roll-dice" 
              onClick={resetGame}>
              New Game
              </button>
          )
      }
      else{
          return(
              <button className="roll-dice" 
              onClick={rollDice}>
              Roll
              </button>
              )
      }
  }
    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>
    ))
    
    return (
        <main>
            {tenzies && <Confetti
            width={window.innerWidth}
            height={window.innerHeight}/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            {getButton()}
        </main>
    )
}