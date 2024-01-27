import React from 'react'
import Die from '/src/components/Die.jsx'
export default function App() {
function dieRoll(){
    return(Math.floor(Math.random() * 6) + 1)
}
  return (
    <main>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
        <Die value={dieRoll()}/>
    </main>
  )
}