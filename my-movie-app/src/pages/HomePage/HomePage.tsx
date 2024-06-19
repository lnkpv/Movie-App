import React, {useState, useEffect} from 'react';
import MovieList from '../../components/MovieList/MovieList';
import FilterBar from '../../components/FilterBar/FilterBar';
import {fetchMovies} from '../../services/api';
import {FilmSearchByFiltersResponse} from '../../types';
import "./HomePage.css";

const HomePage: React.FC = () => {
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
        genres: '', ratingFrom: '', ratingTo: '', yearFrom: '', yearTo: ''
    });
    const [data, setData] = useState<FilmSearchByFiltersResponse>();
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        fetchMovies(page, filters).then(data => {
            setData(data.data);
            setLoading(false);
        });
    }, [page, filters]);
    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
        setPage(1);
    };
    return (
        <div>
            <FilterBar onFilterChange={handleFilterChange}/>
            {!loading && data ? <MovieList movies={data.items}/> : <div className="loading">Loading...</div>}
            <div style={{display: 'flex', justifyContent: 'center', padding: '16px'}}>
            {page !== 1 ? (<button onClick={() => setPage(page - 1)}>Prev Page</button>) :
                <button disabled={true}>Prev Page</button>}
            {data && page !== data.totalPages ? (<button onClick={() => setPage(page + 1)}>Next Page</button>) :
                <button disabled={true}>Next Page</button>}
            </div>
        </div>
    );
};

export default HomePage;
