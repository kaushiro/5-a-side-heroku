import { connect } from "react-redux";
import Players from "../components/Players/Players";
import { getPlayers } from "../data/actions/api";

const mapStateToProps = state => {
    return {  	
        players: state.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getPlayers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);