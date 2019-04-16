import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayerActions from "../Actions/PlayerActions";


class Players extends Component {
    constructor(props) {
        super(props);
        this.createSkillsImage = this.createSkillsImage.bind(this);
    }
    componentDidMount() {
        this.props.onLoad();

    }

    createSkillsImage(num) {
        let message ="";
        for(let i = 1; i <= num; i++) {
        message += '⚽';
        }
        return message;
    }
    /*THIS COMPONENT SHOWS THE FULL LIST OF THE PLAYERS ADDED WITH OPTION TO ADD AND DELETE TO THE RIGHT*/
    render () {
        const { players } = this.props;
        return (

            <div>
                <div className="top-button">
                {/*IF PLAYER LENGTH IS LESS THAN 10 SHOW THE 'ADD PLAYER LINK', OTHERWISE SHOW 'CREATE TEAMS LINK'*/}
                { players.length < 10 ?
                    <div>
                        <Link to="/add" className="btn btn-primary btn-add">Add New Player</Link>
                        <Link to="/reset" className="btn btn-danger btn-reset">Reset</Link>
                    </div>
                    :
                    <Link to="/teams">
                        <button className="btn btn-success group" type="button">Create teams</button>
                        <Link to="/reset" className="btn btn-danger btn-reset">Reset</Link>
                    </Link>
                }
                </div>

                {/*DISPLAY PLAYER NAME AND SKILL LEVEL*/}
                <div>
                    { players.length ?
                        <ul className="list-group">
                            { players.map(player => (
                                <li className="list-group-item" key={ player._id }>
                                    <span className="player-name"><strong>{ player.name }</strong></span>
                                    <span id="player-rating">
                                        { this.createSkillsImage(player.rating) }
                                    </span>
                                    <PlayerActions name = { player.name }id={player._id} />
                                </li>
                            ))}
                        </ul>
                        :
                        <p>No players found</p>
                    }
                </div>
            </div>
        );
    }
}

export default Players;



                            // <Link className="homepage-button" to="/players">
                            //     <img id="start-logo" className="animated bounce infinite slow shadowed" src={logo} alt="Logo" />
                            // </Link>