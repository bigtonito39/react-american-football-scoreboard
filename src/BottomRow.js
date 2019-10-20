import React, {useState} from "react";
import "./App.css";



const BottomRow = () => {

const [hitHome,sethitHome] = useState(0);
const [hitAway,sethitAway] = useState(0);
const [errorHome,seterrorHome] = useState(0);
const [errorAway,seterrorAway] = useState(0);

const hitForHomeTeam = () => sethitHome(hitHome + 1);
const hitForAwayTeam = () => sethitAway(hitAway + 1);
const errorForHomeTeam = () => seterrorHome(errorHome + 1);
const errorForAwayTeam = () => seterrorAway(errorAway + 1);




function HitChanger (props) {
   const {gothit, teamName} = props;
    return <button onClick = {gothit} >{teamName}</button>
  
  }

  function ErrorChanger (props) {
   const {gotError, teamName} = props;
   return <button onClick = {gotError}>{teamName}</button>

  }


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Home Hits</h3>
        <div className="down__value">{hitHome}</div>
    <HitChanger gothit = {hitForHomeTeam} teamName = "Mets" />
       </div>
      <div className="toGo">
        <h3 className="toGo__title">Home Errors</h3>
        <div className="toGo__value">{errorHome}</div>
       <ErrorChanger gotError = {errorForHomeTeam} teamName ="Mets" /> 
        </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Guest Hits</h3>
        <div className="ballOn__value">{hitAway}</div>
        <HitChanger gothit = {hitForAwayTeam} teamName = "Phillies" />
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Guest Errors</h3>
        <div className="quarter__value">{errorAway}</div>
        <ErrorChanger gotError = {errorForAwayTeam} teamName ="Phillies" /> 
      </div>
    </div>
  );
};

export default BottomRow;