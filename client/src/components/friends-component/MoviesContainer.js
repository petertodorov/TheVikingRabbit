import React from 'react';
import FindForm from './FindForm.js'
import './MoviesContainer.css'
function MoviesContainer(props) {
    let movieContainer
    let counter = 0;
    if (props.data !== undefined) {
        movieContainer = props.data.map((movie) => {
            let movieTitle = <span>{movie.title}</span>
            if (movie.title.includes('Totoro')) {
                movieTitle = <span style={{ background: 'red' }} >{movie.title}</span>
            }
            let movieDescription = <div className="description-container">
                {movie.description}</div>
            counter += 1
            return (
                <section id={movie.id} key={movie.id} className="movies-main-container">
                    <hr />
                    <article>
                        <section className="title-counter-container">
                            <div className="movie-title-container">
                            <h2>Title</h2>
                            {movieTitle}
                            </div>
                            
                            <div className="movie-counter-index">{counter}</div>
                        </section>

                        <h2>Description</h2>
                        {movieDescription}
                    </article>
                </section>
            )
        })
    }

    return (
        <React.Fragment>
            <div className="title-finder-container">
                <h1>Ghibli Movies</h1>
                <FindForm text={'Find Movie By Name '} getMovieByName={props.getMovieByName} />
            </div>
            {movieContainer}
        </React.Fragment>
    );
}
export default MoviesContainer;