import React from "react";
export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    function generateDotDiv(index){
        return <div key={index} className="dot"></div>
    }
    function dots() {
        const dotsArray = []
        for(let i = 0 ; i < props.value; i++){
            dotsArray.push(generateDotDiv(i))
        }
        return dotsArray
    }
    return(
        <div className={`die die-${props.value}`} style={styles} onClick={props.holdDice}>
            {dots()}
        </div>
    )
}