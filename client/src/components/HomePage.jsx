import React from 'react';
import {
    Link,
} from "react-router-dom";

const HomePage = () => (
	<div className="homepage">
		<h5 className="home-heading jumbotron">This app will generate two teams of 5 based on skill level. 
	
			<br/>
			<br/>
			Press the &#9917; to return to homescreen.
			<br/>
		</h5>

		<Link className="homepage-button btn btn-primary" to="/players">
			START
		</Link>
	</div>
)

export default HomePage;
