import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: props.names.slice(),//I CHOSE TO PASS IN THE FIELDS FROM ADD AND EDIT COMPONENTS JUST IN CASE I NEED TO USE THIS FORM AGAIN
            selected: 0, //THIS WILL CORRESPOND TO THEIR SKILL LEVEL
            valid: true, //VALIDATING ENTRIES
            error: '', //ERROR MESSAGE
        }
        this.handlePlayerRating = this.handlePlayerRating.bind(this);
        this.submit = this.submit.bind(this);
    }
    // PLAYER NAME INPUT
    change(e, i) {
        const player = this.state.player.slice();
        player[i].value = e.target.value;
        this.setState({ player: player });
    }
    // CANT SUBMIT IF NAME AND SELECT SKILL LEVEL FIELDS AREN'T FILLED IN
    disabled() {

        if(!this.state.player.every(({ value }) => value )|| this.state.selected === 0)
        return true;
    }
    // PLAYER SKILL LEVEL RATING
    handlePlayerRating(e) {
        const selected = Number(e.target.value);
        this.setState({ selected });
    }
    submit(e) {
        let { player, selected } = this.state;
        let { players } = this.props;
        const newPlayer = player.slice();
        e.preventDefault();
        // DATA CONTAINS NAME AND SKILL RATING
        const data = newPlayer.reduce((data, { name, value }) => {
            data[name] = value;
            data["rating"] = this.state.selected;
            return data;
        }, {});

        // USER INPUT VALIDATION
        let message ="";
        message = !data.name && selected === 0 ? "Please enter a player name and select a rating" : "";
        if(players.length >= 10) {
          message = "Maximum of 10 players allowed"; 
        } else if (player.value === "" ||"Enter name...") {
          message = "Please enter a name"
        } else if (selected === 0) {
          message = "Please choose your skill level"
        }
        this.setState({ error:message, valid:false });
        this.props.onSubmit(data);

        // IF EVERYTHING IS FILLED IN CORRECTLY AND THERE ARE LESS THAN 10 PLAYERS RESET THE NAME, ERROR, AND VALIDITY
        if(this.state.player.every(({ value }) => value )&& this.state.selected !== 0 && this.props.players.length < 10)
        this.setState({ error:"", valid:true });
        player.map(player=> { 
            return player.value = "";
        })
        this.setState({ player })
    }

    render() {
      const { selected, error } = this.state;
      const { className, button } = this.props;
        return (
            <form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
                { this.state.player.map(({ name, label, value }, i) => (
                    <Input
                        value={ value }
                        key={ i }
                        name={ name }
                        label={ label }
                        onChange={ e => this.change(e, i) }                    
                    />
            ))}
            { <p id="error-message" class="help-block">{ error }</p> }

            {/*RADIO INPUT FOR USER SKILL LEVEL*/}
            <label htmlFor="rating" id="rating-label">Please choose the players skill level:</label>
                    <label 
                        htmlFor="low"                    
                        className="radiolabel"
                    >
                       <div className="radio-input" id="low-skill">LOW</div>               
                    </label>
            <div className="slider-radio base">
              
                    <input
                        id="low"
                        type="radio"  
                        className="radio-input"
                        name="rating"
                        value={ 1 }
                        checked = {selected === 1}
                        onChange={ this.handlePlayerRating }
                    />
                    <label 
                        htmlFor="low"                    
                        className="radiolabel"
                    >
                       <div className="number">1</div>               
                    </label>
                    <input
                        id="med-low"
                        type="radio"  
                        className="input-radio"
                        name="rating"
                        value={ 2 }
                        checked = {selected === 2}
                        onChange={ this.handlePlayerRating }
                    />
                    <label 
                        htmlFor="med-low"                    
                        className="radiolabel"
                    >
                       <div className="number">2</div>                 
                    </label>                
                    <input
                        id="med"
                        type="radio"  
                        className="input-radio"
                        name="rating"
                        value={ 3 }
                        checked = {selected === 3}
                        onChange={ this.handlePlayerRating }
                    />                
                    <label 
                        htmlFor="med"                    
                        className="radiolabel"
                    >
                        <div className="number">3</div>                 
                    </label>
                    <input
                        id="med-high"
                        type="radio"  
                        className="radio-input"
                        name="rating"
                        value={ 4 }
                        checked = {selected === 4}
                        onChange={ this.handlePlayerRating }
                    />
                    <label 
                        htmlFor="med-high"                    
                        className="radiolabel"
                    >
                       <div className="number">4</div>                  
                    </label>
                    <input
                        id="high"
                        type="radio"  
                        className="radio-input"
                        name="rating"
                        value={ 5 }
                        checked = {selected === 5}
                        onChange={ this.handlePlayerRating }
                    />
                    <label 
                        htmlFor="high"                    
                        className="radiolabel"
                    >
                       <div className="number">5</div>                  
                    </label>
                    </div>
                    <label 
                        htmlFor="low"                    
                        className="radiolabel" id="high-skill"
                    >
                       <div className="radio-input">HIGH</div>               
                    </label>
                <button disabled={ this.disabled() } className="btn btn-success btn-add-player">{ button }</button>
            </form>
        );
    }
} 

export default Form;
