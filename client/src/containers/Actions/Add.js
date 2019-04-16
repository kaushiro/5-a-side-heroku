import { connect } from "react-redux";
import Add from "../../components/Actions/Add";
import { postPlayer } from "../../data/actions/api";


const mapStateToProps = state => {
    return {  	
        players: state.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (data)=> dispatch(postPlayer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);