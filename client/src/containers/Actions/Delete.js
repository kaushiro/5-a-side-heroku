import { connect } from "react-redux";
import Delete from "../../components/Actions/Delete";
import { deletePlayer } from "../../data/actions/api";

const mapDispatchToProps = (dispatch,  { id }) => {
    return {
        onClick: () => dispatch(deletePlayer(id)),
    };
};

export default connect(null, mapDispatchToProps)(Delete);