import React, { Component } from "react";
import "./styles.min.css";

import {
    Route,
    Switch,
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Players from "./containers/Players";
import PlayerActions from "./containers/Actions/PlayerActions";
import Edit from "./containers/Actions/Edit";
import Delete from "./containers/Actions/Delete";
import Reset from "./containers/Actions/Reset";
import Add from "./containers/Actions/Add";
import Teams from "./containers/Teams";
import Formation from "./containers/Formation";
import FourOhFour from "./components/FourOhFour";

class App extends Component {
    constructor(props) {
        super(props);
        this.callAPI = this.callAPI.bind(this);
    }

  // THIS CREATES A QUERY TO FETCH DATA FROM OUR BACKEND MONGO DATABASE
    callAPI = async () => {
        fetch("http://localhost:3001/")
          .catch(err => err)
  };

  // USES OUR API TO LOAD AT START
    componentDidMount() {
        this.callAPI();
    }
    render() {
        return (
             <div>
        <Header subtitle="Team Generator">5-A-SIDE <br /> &#9917;</Header>

        <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/reset" component={ Reset } />           
            <Route exact path="/players" component={ Players } />
            <Route exact path="/teams" component={ Teams }/>
            <Route exact path="/teams/formation" component={ Formation }/>
            <Route exact path="/add" render={( match )=> (
                <Add />
            )}/>
            <Route exact path="/:id" render={( match )=> (
                <PlayerActions />
            )}/>
            <Route exact path="/edit/:id" render={ ({ match }) => (
                <Edit id={ match.params.id } />
            )} />
            <Route exact path="/delete/:id" render={ ({ match }) => (
                <Delete id={ match.params.id } />
            )} />       
                   
            <Route component={ FourOhFour } />
        </Switch>

    </div>
        )
    }
}


export default App;
