import React, { Component } from "react";
import { Link } from "react-router-dom";
import fifa from "../images/fifa1.png";



class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: {},
      team2: {}
    }
  }  

  
  render() {
    const { teams } = this.props;
    const aTeam = teams[0];
    const bTeam = teams[1];
    console.log(teams);
    console.log(aTeam, bTeam);
    console.log(aTeam.data.players, bTeam.data.players);
    let i = 0;
    const positions = ["goalkeeper", "defender", "striker", "midfield", "midfield"];

    return (

      <div>
        <Link to="/reset" className="btn btn-danger btn-reset-end">
          Reset all        
        </Link>
        <div className="wrapper">
               
          <img className="soccerfield" src={fifa} alt="football-pitch"/>

          <div className="jumbotron text-field">
              <div className="row">
              <div className="colummn aTeam">
                <label id="team-a-label">Team { aTeam.data.name } </label>
                { aTeam.data.players.map((player,i)=> (              
                <div>
                  <div
                    className="soccerfield-player"
                    style={{
                      display: 'block',
                      width: '30px',
                      height: '30px',
                      border: '2px solid lightSlateGrey',
                      borderRadius: '50%',
                      backgroundColor:  aTeam.data.color,
                      marginBottom: '10px'  
                    }}        
                  > <p id="player-info"><span id="player-name">{ player }:</span>
                      <span id="player-position">{ positions[i]}</span>
                    </p>
                  </div>     
              </div>                   
              ))}
              </div>
              <div className="column bTeam">
                <label id="team-b-label">Team { bTeam.data.name } </label>
              { bTeam.data.players.map((player,i)=> (              
                <div className="full-player-info">
                  <div
                    className="soccerfield-player"
                    style={{
                      display: 'block',
                      width: '30px',
                      height: '30px',
                      border: '2px solid lightSlateGrey',
                      borderRadius: '50%',
                      backgroundColor:  bTeam.data.color,
                      marginBottom: '10px'  
                    }}        
                  > <p id="player-info"><span id="player-name">{ player }:</span>
                      <span id="player-position">{ positions[i]}</span>
                    </p>
                  </div>     
              </div>                   
              ))} 
              </div>
              </div>
          </div>           
        </div>   
    </div>
    )
  }
}

export default Teams;








