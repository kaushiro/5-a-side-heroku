import React from "react";

// A SIMPLE INPUT COMPONENT
export default ({ placeholder, name, label, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input 
        	placeholder="Enter name"
        	id={ name } 	
        	onChange={ onChange } 
        	value={ value } 
        	className="form-control" 
        />
    </div>
);
