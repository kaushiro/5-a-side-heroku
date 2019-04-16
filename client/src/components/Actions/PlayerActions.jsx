import React from "react";
import { Link } from "react-router-dom";

// ADDING EDIT AND DELETE BUTTONS FOR THE PLAYERS

const PlayerActions = ({ name, id }) => (

	    <div className="pull-right">
	        <Link to={ "/edit/" + id } className="btn btn-info" name ={ name } id = { id }>
				<i className ="fas fa-edit"></i>	        
			</Link>

	        { " " }

	        <Link to={"/delete/" + id } className="btn btn-danger" name ={ name } id = { id }>
	        	<i className ="fas fa-trash-alt"></i>
	        </Link>

	    </div>
    
);


export default PlayerActions;
