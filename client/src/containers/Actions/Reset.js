import { connect } from "react-redux";
import Reset from "../../components/Actions/Reset";
import { deletePlayers } from "../../data/actions/api";

const mapDispatchToProps = (dispatch,  { id }) => {
    return {
        onClick: () => dispatch(deletePlayers()),
    };
};

export default connect(null, mapDispatchToProps)(Reset);