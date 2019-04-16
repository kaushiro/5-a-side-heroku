import React from "react";
import { Link } from "react-router-dom";


// CONFIRM YOU REALLY WANT TO DELETE PLAYER
const Delete = ({onClick, id}) => (
    <div className="animated fadeInLeft fast">
        <h3>Are you sure you want to delete this player?</h3>
        <button onClick={ onClick } className="btn btn-danger">Delete Player</button>
        <Link to="/players">
            <button className="btn btn-success" type="button">No, let's keep player</button>
        </Link>
    </div>
);

export default Delete;