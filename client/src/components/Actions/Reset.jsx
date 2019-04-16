import React from "react";
import { Link } from "react-router-dom";


// CONFIRM YOU REALLY WANT TO DELETE PLAYER
const Reset = ({onClick }) => (
    <div className="animated fadeInLeft fast">
        <h3 id="h3-reset">Are you sure you want to reset all players?</h3>
        <button onClick={ onClick } className="btn btn-danger">Reset Players</button>
        <Link to="/players">
            <button className="btn btn-success" type="button">No, let's go back</button>
        </Link>
    </div>
);

export default Reset;