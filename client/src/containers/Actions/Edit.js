import { connect } from "react-redux";
// import React from "react";
import Edit from "../../components/Actions/Edit";
import { putPlayer, getPlayer } from "../../data/actions/api";


const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onLoad:() => dispatch(getPlayer(id)),
        onEdit: (data) => {
            dispatch(putPlayer(id, data));
        }
    };
};


const mapStateToProps = (state, { id }) => {
    console.log(state.players, id);
    let player = state.players.filter(a =>a._id === id);
    if (player) {

		return {
            players: state.players,
	   		player: player[0]
		}

    } else {
    	return {
    		player: null
    	}
    }
	
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Edit);