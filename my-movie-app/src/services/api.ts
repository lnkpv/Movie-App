import {
    FetchFilmResponse,
    FetchResponse, Filter,
} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY || '';
const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';

export const fetchMovies = async (page:number, filters: Filter|null): Promise<FetchResponse> => {
    try {
        let url = '';
        if (!filters){
            url = `${BASE_URL}/films?page=${page}`;
        }
        else {
            url = `${BASE_URL}/films?page=${page}&${query(filters)}`;
        }
        const response = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                }
            },
        );
        if (!response.ok) {
            const error = await response.json();
            throw new Error(
                JSON.stringify({
                    status: response.status,
                    error: error.error,
                    message: error.message,
                }),
            );
        }
        const data = await response.json();

        return {
            data: data,
            error: ""
        };
    } catch (error) {
        console.log('There was an error with your request:', error);
        return {
            data: {
                total: 0,
                totalPages: 0,
                items: []
            },
            error: "error"
        };
    }
};

function query(param:Filter): string {
    const urlSearchParams = new URLSearchParams();
    if (param.genres){
        urlSearchParams.append('genres', param.genres.toString());
    }
    if (param.ratingFrom !== ''){
        urlSearchParams.append('ratingFrom', param.ratingFrom.toString());
    }
    if (param.ratingTo !== ''){
        urlSearchParams.append('ratingTo', param.ratingTo.toString());
    }
    if (param.yearFrom !== ''){
        urlSearchParams.append('yearFrom', param.yearFrom.toString());
    }
    if (param.yearTo !== ''){
        urlSearchParams.append('yearTo', param.yearTo.toString());
    }
    return urlSearchParams.toString();
}

export const fetchMovieDetails = async (id: number): Promise<FetchFilmResponse> => {
    try {
        const response = await fetch(
            `${BASE_URL}/films/${id}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                }
            },
        );
        if (!response.ok) {
            const error = await response.json();
            throw new Error(
                JSON.stringify({
                    status: response.status,
                    error: error.error,
                    message: error.message,
                }),
            );
        }
        const data = await response.json();

        return {
            data: data,
            error: ""
        };
    } catch (error) {
        console.log('There was an error with your request:', error);
        return {
            data: null,
            error: "error"
        };
    }
};