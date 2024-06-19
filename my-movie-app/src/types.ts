export interface Film {
    kinopoiskId: number
    kinopoiskHDId: string
    imdbId: string
    nameRu: string
    nameEn: string
    nameOriginal: string
    posterUrl: string
    posterUrlPreview: string
    coverUrl: string
    logoUrl: string
    reviewsCount: number
    ratingGoodReview: number
    ratingGoodReviewVoteCount: number
    ratingKinopoisk: number
    ratingKinopoiskVoteCount: number
    ratingImdb: number
    ratingImdbVoteCount: number
    ratingFilmCritics: number
    ratingFilmCriticsVoteCount: number
    ratingAwait: number
    ratingAwaitCount: number
    ratingRfCritics: number
    ratingRfCriticsVoteCount: number
    webUrl: string
    year: number
    filmLength: number
    slogan: string
    description: string
    shortDescription: string
    editorAnnotation: string
    isTicketsAvailable: boolean
    productionStatus: string
    type: string
    ratingMpaa: string
    ratingAgeLimits: string
    hasImax: boolean
    has3D: boolean
    lastSync: string
    countries: Country[]
    genres: Genre[]
    startYear: number
    endYear: number
    serial: boolean
    shortFilm: boolean
    completed: boolean
}

export interface FilmSearchByFiltersResponse_items {
    kinopoiskId: number
    imdbId: string
    nameRu: string
    nameEn: string
    nameOriginal: string
    posterUrl: string
    posterUrlPreview: string
    ratingKinopoisk: number
    ratingImdb: number
    year: number
    type: string
    countries: Country[]
    genres: Genre[]
}

export interface Country {
    country: string
}

export interface Genre {
    genre: string
}

export interface FilmSearchByFiltersResponse {
    total: number
    totalPages: number
    items: FilmSearchByFiltersResponse_items[]
}

export interface FetchResponse {
    data: FilmSearchByFiltersResponse
    error: string
}

export interface FetchFilmResponse {
    data: Film | null
    error: string
}

export interface Filter {
    genres: string,
    ratingFrom: string,
    ratingTo: string,
    yearFrom: string,
    yearTo: string
}

export interface GenreId {
    id: number
    genre: string
}

export const genresId: GenreId[] = [
    {
        "id": 1,
        "genre": "триллер"
    },
    {
        "id": 2,
        "genre": "драма"
    },
    {
        "id": 3,
        "genre": "криминал"
    },
    {
        "id": 4,
        "genre": "мелодрама"
    },
    {
        "id": 5,
        "genre": "детектив"
    },
    {
        "id": 6,
        "genre": "фантастика"
    },
    {
        "id": 7,
        "genre": "приключения"
    },
    {
        "id": 8,
        "genre": "биография"
    },
    {
        "id": 9,
        "genre": "фильм-нуар"
    },
    {
        "id": 10,
        "genre": "вестерн"
    },
    {
        "id": 11,
        "genre": "боевик"
    },
    {
        "id": 12,
        "genre": "фэнтези"
    },
    {
        "id": 13,
        "genre": "комедия"
    },
    {
        "id": 14,
        "genre": "военный"
    },
    {
        "id": 15,
        "genre": "история"
    },
    {
        "id": 16,
        "genre": "музыка"
    },
    {
        "id": 17,
        "genre": "ужасы"
    },
    {
        "id": 18,
        "genre": "мультфильм"
    },
    {
        "id": 19,
        "genre": "семейный"
    },
    {
        "id": 20,
        "genre": "мюзикл"
    },
    {
        "id": 21,
        "genre": "спорт"
    },
    {
        "id": 22,
        "genre": "документальный"
    },
    {
        "id": 23,
        "genre": "короткометражка"
    },
    {
        "id": 24,
        "genre": "аниме"
    },
    {
        "id": 25,
        "genre": ""
    },
    {
        "id": 26,
        "genre": "новости"
    },
    {
        "id": 27,
        "genre": "концерт"
    },
    {
        "id": 28,
        "genre": "для взрослых"
    },
    {
        "id": 29,
        "genre": "церемония"
    },
    {
        "id": 30,
        "genre": "реальное ТВ"
    },
    {
        "id": 31,
        "genre": "игра"
    },
    {
        "id": 32,
        "genre": "ток-шоу"
    },
    {
        "id": 33,
        "genre": "детский"
    }
];