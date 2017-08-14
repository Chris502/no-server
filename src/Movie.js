import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { thronesByName } from './Api-Calls/api-caller'


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            death: null
        }
        this.getDeath = this.getDeath.bind(this)
    }
    getDeath() {
        thronesByName(this.state.name)
            .then(response =>
                this.setState({
                    death: response
                }))
    }

    handleNameInput(val) {
        this.setState({
            name: val
        })
    }



    render() {

        const deathly = this.state.death ? (this.state.death.map((c, i) => {
            const dead = c.died ? <h1 style={{ 'color': 'Red' }}> Dead</h1> : <h1 style={{ 'color': 'Green' }}>Alive</h1>
            return (

                <div key={i}>

                    <ul className="response-list deaths">
                        <li>Name:{c.name}</li>
                        <li>Titles: {c.titles}</li>
                        <li>Played By:{c.playedBy}</li>
                        {dead}
                    </ul>
                </div>
            )
        })) : <h3> Check to see if your favorite character is alive.</h3>

        return (
            <div>
                <Header />

                <div className="movie-content">
                    <div className="allMen">   <h1> All Men Must Die </h1></div>
                    <div className="nameInput">
                        <input className="nameBox" placeholder="Name" onChange={(e) => this.handleNameInput(e.target.value)}></input>
                        <button onClick={(e) => this.getDeath(this.state.name)}>Fate Checker</button>
                    </div>
                    <div className="deathBox">
                        {deathly}
                        {console.log(this.state.death)}
                    </div>
                    {console.log(this.state.name)}
                </div>
                <Footer />
            </div>
        )

    }
}


export default Movie