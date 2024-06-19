import React from 'react';
import {Link} from 'react-router-dom';
import {FilmSearchByFiltersResponse_items} from "../../types";
import "./MovieCard.css";

interface MovieCardProps {
    movie: FilmSearchByFiltersResponse_items;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const name = movie.nameRu ? movie.nameRu : (movie.nameEn ? movie.nameEn: movie.nameOriginal);
    return (
        <div className="movie-card">
            <img src={movie.posterUrl} alt={name}/>
            <div className="movie-card__info__title">{name}</div>
            <div className="movie-card__info__year">Year: {movie.year}</div>
            <div className="movie-card__info">Rating kp: {movie.ratingKinopoisk}</div>
            <Link to={`/films/${movie.kinopoiskId}`} key={movie.kinopoiskId}>
                Подробнее...
            </Link>
        </div>
    );
};

export default MovieCard;
