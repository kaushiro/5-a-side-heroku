import { connect } from "react-redux";
// import React from "react";
import Rating from "../components/Rating";
import { putPlayer, getPlayer } from "../data/actions/api";


const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onLoad:() => dispatch(getPlayer(id)),
        onChangeRating: (data) => {
            console.log(id, data)
            dispatch(putPlayer(id, data));
        }
    };
};


const mapStateToProps = (state, { id }) => {
    console.log(state.players, id);
    let player = state.players.filter(a =>a._id == id);
    console.log(player[0]._id, id);
    if (player) {

		return {
	   		player: player[0]
		}

    } else {
    	return {
    		player: null
    	}
    }
	
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Rating);