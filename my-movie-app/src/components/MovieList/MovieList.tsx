import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {FilmSearchByFiltersResponse_items} from '../../types';
import "./MovieList.css";

interface MovieListProps{
    movies: FilmSearchByFiltersResponse_items[] | []
}
const MovieList: React.FC<MovieListProps> = ({movies}) => {

    return (
        <>
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.kinopoiskId} movie={movie}/>
                ))}
            </div>
        </>
    );
};

export default MovieList;
