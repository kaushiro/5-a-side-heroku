import initial from "./initial";


const addPlayer = (state, { player }) => {
    return {
    ...state,
        players: [
         ...state.players,
        {
            name: player.name,
        }
        ]
    }
};

const setPlayers = (state, { players }) => {
    return {
        ...state,
       players: players, 
    }
};
const setPlayer = (state, { player, id }) => {
    let addedPlayer = state.players.map(a=>{
        if(a._id === id) {
            return player;
        } else {
            return a;
        }
    })
    return {
    ...state,
    players: addedPlayer,
    };
};
const removePlayer = (state, { id }) => {
    let removedPlayerFromArray = state.players.filter(players=>players._id !== +id);
    return {
        ...state,
        players: removedPlayerFromArray,
    }
}

const editPlayer = (state, { player, id }) => {
    console.log(player, id);
    const playersWithEdits = state.players.map(a => {
        if(a._id === id) {
            return player;
        } else {
            return a;
        }
    })
    console.log(playersWithEdits);
    return {
        ...state,
        players: playersWithEdits
    }
}
const addTeam = (state, { data }) => {
    return {
    ...state,
        teams: [
         ...state.teams,
        {
            ...state,
            data: data,
        }
        ]
    }
}
const setTeams = (state, { teams }) => {
    return {
        ...state,
        teams: teams
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "addPlayer": return addPlayer(state, action);
        case "setPlayer": return setPlayer(state, action);
        case "removePlayer": return removePlayer(state, action);
        case "editPlayer": return editPlayer(state, action);
        case "setPlayers": return setPlayers(state, action);
        case "resetPlayers": return initial;
        case "addTeam": return addTeam(state, action);
        case "setTeams": return setTeams(state, action);
        default: return state;
    }
}

export default reducer;

// selectors
