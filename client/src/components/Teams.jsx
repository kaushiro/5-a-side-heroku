import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamForm from "./Forms/TeamForm";
import fifa from "../images/fifa1.png";
import TeamActions from "../containers/Actions/TeamActions";

const Teams = ({ players, onSubmit }) => {
    const sortedPlayers = players.slice().sort(function(a, b) {
    return parseFloat(a.rating) - parseFloat(b.rating)});
    // PUTTING THE SORTED PLAYERS IN THE EVEN POSITION IN TEAM A AND THE SORTED PLAYERS IN TEAM B TO TRY TO MAKE THE TEAMS RELATIVELY EQUAL
    const aTeam = sortedPlayers.filter((player, i)=>i % 2 ===0);
    const bTeam = sortedPlayers.filter((player, i)=>i % 2 !==0);
    console.log(aTeam, bTeam);
    // FINDING AVERAGE LEVEL OF THE TEAMS TO MAKE SURE THEY ARE SIMILAR
    let aScore = aTeam.reduce((acc, player) => {
      return acc + player.rating;
    },0) / players.length;
    let bScore = bTeam.reduce((acc, player) => {
      return acc + player.rating;
    },0) / players.length;

    return (
      <div>
      { players.length ?
      <div>
        <div className="team-one jumbotron">
          <h2 className="team-1">Team One</h2>
          <label className="player-team-1"><h5>*HYPOTHETICAL* Numerical Skill Level: { aScore }</h5></label>
            { aTeam.map((player, i) => (
              <div className="team" key={ i }>
                <span>{ player.name }</span>
              </div>
            ))}
            <label className="team-name-color" id="note">Please enter a team name and click on one of the following five colors:</label>
            <TeamForm 
              players = { aTeam }
              onSubmit={ onSubmit }  
              number= { 1 }
            />
        </div>
        <div className="team-two jumbotron">
          <h2 className="team2">Team Two</h2>
          <label className="player-team-2"><h5>*HYPOTHETICAL* Numerical Skill Level: { bScore }</h5></label>
            { bTeam.map((player, i) => (
              <div className="team" key={ i }>
                <span>{ player.name }</span>
              </div>
            ))}
            <label className="team-name-color" id="note">Please enter a team name and click on one of the following five colors:</label>
            <TeamForm 
              players = { bTeam }
              onSubmit={ onSubmit } 
              number= { 2 } 
            />
        </div>
        <TeamActions/>
    </div> : null }
    </div>
    )
}

export default Teams;








