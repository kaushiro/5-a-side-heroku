import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected2: 0, //THIS WILL CORRESPOND TO THEIR SKILL LEVEL
        }
        this.handlePlayerRating = this.handlePlayerRating.bind(this);
    }

    // PLAYER SKILL LEVEL RATING
    handlePlayerRating(e) {
        const selected2 = Number(e.target.value);
        this.setState({ selected2 });
    }
    render() {
        const { selected2 } = this.state;
        return (
            <div> 
                {/*RADIO INPUT FOR USER SKILL LEVEL*/}
                <label htmlFor="rating">Please choose the players skill level:</label>
                <input
                    id="low"
                    type="radio"  
                    className="radio-input"
                    name="rating"
                    value={ 1 }
                    checked = {selected2 == 1}
                    onChange={ this.handlePlayerRating }
                />
                <label 
                    htmlFor="low"                    
                    className="radiolabel btn btn-primary"
                >
                    Beginner                
                </label>
                <input
                    id="low"
                    type="radio"  
                    className="radio-input"
                    name="rating"
                    value={ 1 }
                    checked = {selected2 == 1}
                    onChange={ this.handlePlayerRating }
                />
                <label 
                    htmlFor="low"                    
                    className="radiolabel btn btn-primary"
                >
                    Beginner                
                </label>
                <input
                    id="med"
                    type="radio"  
                    className="input-radio"
                    name="rating"
                    value={ 2 }
                    checked = {selected2 == 2}
                    onChange={ this.handlePlayerRating }
                />
                <label 
                    htmlFor="medium"                    
                    className="radiolabel btn"
                >
                    Intermediate                
                </label>                
                <input
                    id="high"
                    type="radio"  
                    className="input-radio"
                    name="rating"
                    value={ 3 }
                    checked = {selected2 == 3}
                    onChange={ this.handlePlayerRating }
                />                
                <label 
                    htmlFor="high"                    
                    className="radiolabel btn"
                >
                    Advanced                
                </label>        
            </div>
        );
    }
} 

export default Form;
