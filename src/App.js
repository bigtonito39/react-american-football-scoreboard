//TODO: STEP 1 - Import the useState hook.
import React, { useState,useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDOM from "react-dom";


 

function App() {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homeCount, sethomeCount] = useState(0);
    const [awayCount, setawayCount] = useState(0);
    
      
    const touchDownHOME = () => sethomeCount(homeCount + 4);
    const touchDownAWAY = () => setawayCount(awayCount + 4);
    
    const fieldGoalHOME = () => sethomeCount(homeCount + 1);
    const fieldGoalAWAY = () => setawayCount(awayCount + 1);

      //creating a timer:
      const [count,setCount] = useState(10);

      useEffect(() => {
        const timerTitle = document.querySelector(".timer")
        timerTitle.textContent = `METS winning in ${count} MINUTES!`;
      
      })
  

    return ( <div className = "container" >
        <section className = "scoreboard" >
        <div className = "topRow" >
        <div className = "home" >
        <h2 className = "home__name" > Mets </h2>

        { /* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */ }

        <div className = "home__score" > { homeCount } </div> 
        
        </div >
        <div className = "timer" > "LeTs Go METS!" </div>
        {/* Countdown button */}
        <button onClick = {() => setCount( count - 1)}>Mets winning CountDown</button>
        <div className = "away" >
        <h2 className = "away__name" > Phillies </h2>  
        <div className = "away__score" > { awayCount } </div>  
        </div > 
        </div> 
        
        <BottomRow  />
        </section> 

        <section className = "buttons" >
        <div className = "homeButtons"> { /* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */ } 
        <button className = "homeButtons__touchdown" onClick = { touchDownHOME } > Home Grand Slam! </button>  
        <button className = "homeButtons__fieldGoal" onClick = { fieldGoalHOME } > Home Home Run! </button>  
        
        </div> 
        <div className = "awayButtons" >
        <button className = "awayButtons__touchdown" onClick = { touchDownAWAY } > Away Grand Slam! </button>  
        <button className = "awayButtons__fieldGoal" onClick = { fieldGoalAWAY } > Away Home Run! </button>  
        
        </div > 
        </section> </div >
    );
}



export default App;

const rootElement = document.getElementById("root");
ReactDOM.render( < App/> , rootElement);