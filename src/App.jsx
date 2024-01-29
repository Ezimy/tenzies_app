import React from 'react'
import Die from '/src/components/Die.jsx'
export default function App() {
  const [diceArray, setDiceArray] = React.useState(allNewDice)
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}
function rollDice() {
  setDiceArray(allNewDice)
}
const diceElements = diceArray.map(die => <Die value={die}/>)
console.log(allNewDice())
  return (
    <>
    <main>
      {diceElements}
    </main>
    <button className='roll-dice' onClick={rollDice}>Roll</button>
    </>
  )
}