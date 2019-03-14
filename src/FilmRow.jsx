import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                <FilmPoster path={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.slice(0,4)}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;