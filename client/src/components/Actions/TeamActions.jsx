import React from "react";
import { Link } from "react-router-dom";

// ADDING EDIT AND DELETE BUTTONS FOR THE PLAYERS

const TeamActions = () => (

	    <div className="container bottom-buttons">
	        <Link to={ "/players"}>
				<button className="btn btn-info" type="button">Edit your players</button>        
			</Link>

	        { " " }
	        <Link to="/reset" className="btn btn-danger btn-reset">
				Reset all        
			</Link>

	        { " " }

	        <Link to={"/teams/formation" } className="btn btn-success">
	        	See your positions
	        </Link>

	    </div>
    
);


export default TeamActions;
