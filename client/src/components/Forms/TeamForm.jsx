import React, { Component } from "react";
import Input from "./Input";
const names = [{ name: "team", label: "Team Name:", value: "" }];
const colors = ["red", "green", "yellow", "blue", "brown"];

class TeamForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: names.slice(),//
            valid: true, //VALIDATING ENTRIES
            error: '', //ERROR MESSAGE
            color:''
        }
        this.pickColor = this.pickColor.bind(this);        
        this.submit = this.submit.bind(this);
    }
    // teams NAME INPUT
    change(e, i) {
        const team = this.state.team.slice();
        team[i].value = e.target.value;
        this.setState({ team: team });
    }
    // CANT SUBMIT IF NAME AND SELECT SKILL LEVEL FIELDS AREN'T FILLED IN
    disabled() {

        if(!this.state.team.every(({ value }) => value )|| this.state.color === "")
        return true;
    }
    pickColor(e) {
        const colorEl = e.target;
        const bgCol = colorEl.style.backgroundColor;
        this.setState({color:bgCol });
    }
    submit(e) {
        let { team, color } = this.state;
        const { players, number, onSubmit } = this.props; 
        e.preventDefault(); 
        // DATA CONTAINS NAME AND SKILL RATING
        const data =  
        { 
            players: players.map(player=>player.name),
            number: number,
            name: team[0].value,
            color: color,
        };
        console.log(data);
        // USER INPUT VALIDATION
        let message ="";
        message = !data.name && color === "" ? "Please enter a team name and click on one of the following five colors" : "";
        if(team.value="") {
          message = "Please enter a team name"; 
        } else if (color === "") {
          message = "Please choose your color"
        }
        this.setState({ error:message, valid:false });
        onSubmit(data);

        // IF EVERYTHING IS FILLED IN CORRECTLY AND THERE ARE LESS THAN 10 PLAYERS RESET THE NAME, ERROR, AND VALIDITY
        if(this.state.team.every(({ value }) => value )&& this.state.selected !== 0 && this.props.players.length < 10)
        message = "Thank you for your input"
        this.setState({ error:"", valid:true, error: message });
            team.map(team=> { 
            return team.value="";
        })
        this.setState({ team })
    }

    render() {
      const { team, error, color } = this.state;
      const { className } = this.props;
        return (
            <form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
                { team.map(({ name, label, value }, i) => (
                    <Input
                        value={ value }
                        key={ i }
                        name={ name }
                        label={ label }
                        onChange={ e => this.change(e, i) }   
                        className="team-input"                 
                    />
            ))}
            { <p id="note" class="help-block">{ error }</p> }
                        {/* COMPONENT TO PICK players COLOR */}
            <div id="color-picker" onClick = { this.pickColor }>
                <div 
                    className="target"
                    style={{
                        display: 'block',
                        width: '30px',
                        height: '30px',
                        border: '2px solid lightSlateGrey',
                        borderRadius: '50%',
                        backgroundColor:  color  
                    }}
                >
                </div>
                <div className="colorPicker">
                    { colors.map((color,i)=> (
                        <div 
                            key={ i }
                            className={ "color " +  color }
                            style={{
                                display: 'block',
                                width: '30px',
                                height: '30px',
                                border: '2px solid lightSlateGrey',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                backgroundColor: color 
                            }}
                        > 
                        </div>
                    ))}
                </div>
            </div>
            <button disabled={ this.disabled() } className="btn btn-danger btn-add-team">OK</button>
            </form>

        );
    }
} 

export default TeamForm;
