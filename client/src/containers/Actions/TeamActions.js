import { connect } from "react-redux";
import TeamActions from "../../components/Actions/TeamActions";


// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state ) => {
    return {
        teams: state.teams,
    };
};



// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, null)(TeamActions);
