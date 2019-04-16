import { connect } from "react-redux";
import TeamFormation from "../components/TeamFormation";

import { setTeams } from "../data/actions/state";

const mapStateToProps = state => {
  return {
  	players: state.players,
    teams: state.teams,
  };
};


export default connect(mapStateToProps, null)(TeamFormation);
