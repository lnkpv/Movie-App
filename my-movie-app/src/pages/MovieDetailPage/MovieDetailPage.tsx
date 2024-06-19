import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchMovieDetails} from '../../services/api';
import {Film} from "../../types";
import "./MovieDetailPage.css";

const MovieDetailPage: React.FC = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<Film | null>(null);

    useEffect(() => {
        fetchMovieDetails(Number(id)).then(data => setMovie(data.data));
    }, []);

    if (!movie) return <div>Loading...</div>;
    const name = movie.nameRu ? movie.nameRu : (movie.nameEn ? movie.nameEn : movie.nameOriginal);
    return (
        <p className="movie-detail-page">
            <img src={movie.posterUrl} alt={name}/>
            <p className="movie-detail-page__info">
                <div className="movie-detail-page__info__title">{name}</div>
                {movie.description ? (
                    <div className="movie-detail-page__info">Description: {movie.description}</div>
                ) : (
                    <div className="movie-detail-page__info">Has no description</div>
                )}
                <p>Rating: {movie.ratingKinopoisk}</p>
                <p>Release Date: {movie.year}</p>
                <p>Genres: {movie.genres.map((key) => key.genre).join(', ')}</p>
                <Link to={`/`}>
                    Назад
                </Link>
            </p>
        </p>
    );
};

export default MovieDetailPage;
