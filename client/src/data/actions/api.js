
import axios from "../../axios";
import history from "../../history";

import { 
    setPlayers, 
    addPlayer,
    removePlayer,
    editPlayer,
    setPlayer,
    resetPlayers,
    setTeams, 
    addTeam
} from "./state";


// GETS ALL PLAYERS
export const getPlayers = () => dispatch => {
    axios.get("/players/").then(response => {
        const players = response.data;
        dispatch(setPlayers(players));
    })
    .catch(function (error){
        console.log(error);
    });
};

// ADDS ONE PLAYER
export const postPlayer = (data) => dispatch => {
    axios.post("/players/add", data).then(response => {
        const player = response.data;
        dispatch(addPlayer(player));
        history.push("/players");
    })
    .catch(function (error){
        console.log(error);
    });    
};

// GETS ONE SPECIFIC PLAYER
export const getPlayer = ( id ) => dispatch => {
    axios.get("/players/" + id).then(response => {
        const player = response.data;
        dispatch(setPlayer(player, id));
    })
    .catch(function (error){
        console.log(error);
    });
};

// DELETES ONE SPECIFIC PLAYER
export const deletePlayer = id => dispatch => {
    axios.delete("/players/" + id).then(response => {
        dispatch(removePlayer(id));
        history.push("/players")
    })
    .catch(function (error){
        console.log(error);
    });
};

//  RESETS TO BEGINNING...NO PLAYERS
export const deletePlayers = () => dispatch => {
  axios.delete("/players/").then((response) => {
    const players = response.data;
    dispatch(resetPlayers(players));
    history.push("/players")
  })
  .catch(function (error){
        console.log(error);
    });
};

// EDITS ONE SPECIFIC PLAYER
export const putPlayer = (id, data )=> dispatch => {
    console.log(data, id);

    axios.put("/players/" + id, data).then(response => {
        const player = response.data;
        dispatch(editPlayer(id, player));
        history.push("/players")
    })
    .catch(function (error) {
        console.log(error);
    });
};

// GETS THE TEAMS
export const getTeams = () => dispatch => {
    axios.get("/players/teams").then(response => {
        console.log(response);
        const teams = response.data;
        console.log(teams);
        dispatch(setTeams(teams));
    })
    .catch(function (error){
        console.log(error);
    });
};


