import { connect } from "react-redux";
import Teams from "../components/Teams";

import { addTeam } from "../data/actions/state";

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (data)=> dispatch(addTeam(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
