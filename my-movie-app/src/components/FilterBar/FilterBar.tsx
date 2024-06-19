import React, {useState} from 'react';
import {genresId} from "../../types";
import "./FilterBar.css";

interface FilterBarProps {
    onFilterChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({onFilterChange}) => {
    const [genres, setGenres] = useState<string>('');
    const [genreTitle, setGenreTitle] = useState<string>('');
    const [ratingFrom, setRatingFrom] = useState<number | ''>('');
    const [ratingTo, setRatingTo] = useState<number | ''>('');
    const [yearFrom, setYearFrom] = useState<number | ''>('');
    const [yearTo, setYearTo] = useState<number | ''>('');

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreTitle(e.target.value);
        const id = genresId.filter((value)=> value.genre === e.target.value)[0].id.toString();
        setGenres(id);
        onFilterChange({genres: id, ratingFrom, ratingTo, yearFrom, yearTo});
    };

    const handleRatingFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setRatingFrom(value);
        onFilterChange({genres, rating: value, ratingTo, yearFrom, yearTo});
    };

    const handleRatingToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setRatingTo(value);
        onFilterChange({genres, ratingFrom, ratingTo: value, yearFrom, yearTo});
    };

    const handleYearChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setYearFrom(value);
        onFilterChange({genres, ratingFrom, ratingTo, yearFrom: value, yearTo});
    };

    const handleYearChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setYearTo(value);
        onFilterChange({genres, ratingFrom, ratingTo, yearFrom, yearTo: value});
    };

    return (
        <div className="filter-bar">
            <h2>Filters</h2>
            <div>
                <label>
                    Genre:
                    <select value={genreTitle} onChange={handleGenreChange}>
                        {genresId.map(genres => (
                            <option value={genres.genre}>{genres.genre}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Rating from:
                    <input
                        type="number"
                        value={ratingFrom}
                        onChange={handleRatingFromChange}
                        min="0"
                        max="10"
                    />
                </label>
            </div>
            <div>
                <label>
                    Rating to:
                    <input
                        type="number"
                        value={ratingTo}
                        onChange={handleRatingToChange}
                        min="0"
                        max="10"
                    />
                </label>
            </div>
            <div>
                <label>
                    Year from:
                    <input
                        type="number"
                        value={yearFrom}
                        onChange={handleYearChangeFrom}
                        min="1990"
                        max={new Date().getFullYear()}
                    />
                </label>
            </div>
            <div>
                <label>
                    Year to:
                    <input
                        type="number"
                        value={yearTo}
                        onChange={handleYearChangeTo}
                        min="1990"
                        max={new Date().getFullYear()}
                    />
                </label>
            </div>
        </div>
    );
};

export default FilterBar;
