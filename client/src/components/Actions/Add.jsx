import React from "react";

import Form from "../Forms/Form";


// PLAYER NAME COMPONENT
const names = [

    { name: "name", label: "Player Name:", value: "" },
];

const Add = ({ onSubmit, players, show }) => (
	
    <div>
        <Form
            show = { true }
        	players = { players }
        	onSubmit={ onSubmit } 
        	className="panel-body animated fadeInLeft fast" 
        	names={ names } 
        	button="Add Player" 
        />
    </div>
);

export default Add;
