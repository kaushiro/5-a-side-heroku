import React, { Component } from 'react';

import Form from "../Forms/Form";

import FourOhFour from "../FourOhFour";


class Edit extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.onLoad();
	}
	render() {
		const { id, player, players, onEdit } = this.props;
		const names = [
		   { name: "name", label: "Player Name:", value: player.name },
		];
		console.log(id, player )
		return player ? (
			<div>
				<h2>Edit Player</h2>
				<Form
					players = { players }
					className = "panel-body animated fadeInLeft fast"
					onSubmit = { onEdit }
					names = { names }
					button="Edit Player"
					disabled= { false }
				/>
			</div>
		) : <FourOhFour/>;
	}
}
export default Edit; 