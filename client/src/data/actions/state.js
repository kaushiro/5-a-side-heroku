export const setPlayers = players => {
    return {
        type: "setPlayers",
        players: players,
    };
};

export const setPlayer = (player, id) => {
    return {
        type: "setPlayer",
        player: player,
        id: id
    };
};

export const addPlayer = (player) => {
    return {
        type: "addPlayer",
        player: player,
    };
};

export const removePlayer = id => {
    return {
        type: "removePlayer",
        id: id,
    };
};

export const editPlayer = (player, id) => {
    return {
        type: "editPlayer",
        Player: player,
        id: id
    };
};
export const resetPlayers = () => {
  return {
    type: "resetPlayers",
  };
};
export const addTeam = (data) => {
  return {
    type: "addTeam",
    data: data,
  };
};
export const setTeams = (teams) => {
  return {
    type: "setTeams",
    teams: teams,
  };
};

