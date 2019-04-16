import { connect } from "react-redux";
import PlayerActions from "../../components/Actions/PlayerActions";
import { putPlayer, deletePlayer } from "../../data/actions/api";


// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state,  { id } ) => {
	console.log(state.players);
	let displayPlayer = state.players.filter(a =>a._id === id);
    return {
        player: displayPlayer,
    };
};


const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onEdit: () => dispatch(putPlayer(id)),
        onDelete: () => dispatch(deletePlayer(id)),
    };
};


// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(PlayerActions);
