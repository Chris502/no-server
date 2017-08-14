import React, { Component } from 'react';
import { getMovieByActor, getMoviesByTitleNYear, getMovieByDirector } from '../Api-Calls/api-caller'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            year: '',
            stars: '',
            director: '',
            title: '',
            movieObj: null,
            directorObj: null,
            actorObj: null,
        }
        this.getMovies = this.getMovies.bind(this)
        this.getMovieDirector = this.getMovieDirector.bind(this)
        this.getMoviesByStar = this.getMoviesByStar.bind(this)
    }


    handleInputTitle(val) {
        this.setState({
            title: val,
        
        });
    }
    handleInputYear(val) {
        this.setState({
            year: val
        })
    }
    handleInputStars(val) {
        this.setState({
            stars: val
        })
    }
    handleInputDirector(val) {
        this.setState({
            director: val
        })
    }
    getMovies() {
        getMoviesByTitleNYear(this.state.title, this.state.year)
            .then(response => {
                this.setState({
                    directorObj: null,
                    movieObj: response,
                    actorObj: null,
                    title: '',
                


                })
            })
    }

    getMovieDirector() {
        getMovieByDirector(this.state.director)
            .then(response => {
                this.setState({
                    movieObj: null,
                    directorObj: response,
                    director: '',
                    actorObj: null
                })
            })
    }
        getMoviesByStar(){
            getMovieByActor(this.state.stars)
                .then(response => {
                    this.setState({
                        movieObj: null,
                        directorObj: null,
                        actorObj: response,
                        stars: ''

                    })
                })
        }
    componenDidMount() {
        this.getMovies().then((response) => {
            this.setState({
                movieObj: response,
                title: null,
                actorObj: ''
            })
        })
    }
    componenDidMount() {
        this.getMovieDirector().then((response) => {
            this.setState({
                directorObj: response,
                actorObj: '',
                title: '',
            })
        })
    }
    componenDidMount(){
        this.getMoviesByStar().then((response) => {
            this.setState({
                actorObj: response,
                directorObj: '',
                title: ''

            })
        })
    }

    render() {
       // console.log(this.state.movieObj)
        //console.log(this.state.directorObj)
        //console.log(this.state.director)
        console.log(this.state.stars)
        console.log(this.state.actorObj)
        console.log(this.state.title)
        
        const headd = (this.state.directorObj || this.state.movieObj || this.state.actorObj) ? null : (<h6>Search By Title, Director, Or Cast</h6>)
        const movieTitle = this.state.movieObj ?
            (<div className="response-box">
                <ul className="response-list">
                    <h2> {this.state.movieObj.show_title}</h2>
                    <h6> Rating : {this.state.movieObj.rating} </h6>
                    <img className="poster" src={this.state.movieObj.poster} />
                    <li className="li-desc"><strong>Summary</strong>:   {this.state.movieObj.summary}
                    </li>
                    <li className="li-cast"><strong>Cast</strong>:    {this.state.movieObj.show_cast}</li>
                </ul>
            </div>
            ) : null
        console.log(this.state.title)
        const movieDirector = this.state.directorObj ? (this.state.directorObj.map((c, i, movies) => {
            return (
                <div key={i}>

                    <ul className="response-list">
                        <li>{c.show_title}</li>
                        <li>{c.rating}</li>
                        <li><img src={c.poster} /></li>
                        <li>{c.summary}</li>
                        <li>{c.show_cast}</li>
                    </ul>

                </div>
            )
        })) : null
          const movieActor = this.state.actorObj ? (this.state.actorObj.map((c, i, movies) => {
            return (
                <div key={i}>

                    <ul className="response-list">
                        <li>{c.show_title}</li>
                        <li>{c.rating}</li>
                        <li><img src={c.poster} /></li>
                        <li>{c.summary}</li>
                        <li>{c.show_cast}</li>
                    </ul>

                </div>
            )
        })) : null


        return (
            <div className="main-content">

                <h1>Search For Your Favorites!!!</h1>


                <div className="button-row">
                    <button className='title-button' onClick={(e) => this.getMovies( this.state.title)} >By Title</button>
                    <button className='director-button' onClick={(e) => this.getMovieDirector( this.state.director)}>By Director</button>

                    <button className='actor-button' onClick={(e) => this.getMoviesByStar(this.state.stars)}>By Actor</button>
                </div>
                <div className="input-row">

                    <input className="titlebox" placeholder="Title" value={this.state.title} onChange={(e) => { this.handleInputTitle(e.target.value) }}></input>



<input className="directorbox" placeholder="Director" value={this.state.director}  onChange={(e) => { this.handleInputDirector(e.target.value) }}></input>
                    <input className="starbox" placeholder="Starring Actors/Actresses"value={this.state.stars}  onChange={(e) => { this.handleInputStars(e.target.value) }}></input>

                    
                    <div className="response-box">
                        {headd}
                        {movieTitle}
                        {movieDirector}
                        {movieActor}
                    </div>



                </div>

            </div>
        )


    }
}

export default Main