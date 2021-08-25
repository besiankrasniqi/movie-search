import React, { MouseEvent, useEffect, useState } from 'react';
import axios from 'axios';
import AppConfig from '../config/app-config';
import MovieItem from './movie-item/movie-item.component';
import { getYearFromDateString } from '../utils/date-utils';
import Movies from '../types/movies.types';
import NoResults from './no-results.component';
import RequestError from './request-error.component';
import Loading from './laoding/loading';
import { getMovies } from '../services/api-requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchMovies = () => {
    const initialPage = 1;
    const [movieQuery, setMovieQuery] = useState<string>('');
    const [movies, setMovies] = useState<Movies>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [nextPage, setNextPage] = useState<number>(0);
    const [searchHasBeenInteractedWith, setSearchHasBeenInteractedWith] = useState<boolean>(false);
    const [isRequestError, setIsRequestError] = useState<boolean>(false);
    const [showLoading, setShowLoading] = React.useState<boolean>(false);

    const searchMoviesChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setMovieQuery(target.value);

        if (target.value.length) {
            search(initialPage, true, target.value);
        } else {
            setMovies([]);
        }
    };

    const searchMoviesKeyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            search(initialPage, true);
        }
    };

    const search = async (
        page: number = initialPage,
        isInitialSearch: boolean = false,
        query: string = movieQuery,
    ) => {
        if (movieQuery) {
            setIsRequestError(false);
            setShowLoading(true);

            const result = await getMovies(page, query).catch((error) => {
                setIsRequestError(true);
            });

            setShowLoading(false);

            if (result?.data) {
                setSearchHasBeenInteractedWith(true);
                setMovies(
                    isInitialSearch ? result.data.results : [...movies, ...result.data.results],
                );
                setCurrentPage(result.data.page);

                if (result.data.page < result.data.total_pages) {
                    setNextPage(result.data.page + 1);
                }
            }
        }
    };

    return (
        <>
            <div className="container search-movies-container p-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mt-2 mb-5">Movie Search App</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Movies"
                                aria-label="Search Movies"
                                aria-describedby="search-movies"
                                value={movieQuery}
                                onChange={searchMoviesChangeHandler}
                                onKeyDown={searchMoviesKeyDownHandler}
                                data-testid="search-movies-input"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    data-testid="search"
                                    onClick={() => {
                                        search(initialPage, true);
                                    }}
                                >
                                    <FontAwesomeIcon icon={['fas', 'search']} size="lg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Loading show={showLoading} />

                <div role="list">
                    {movies.length ? (
                        movies.map((movie) => (
                            <MovieItem
                                key={movie?.id}
                                title={movie?.title}
                                releaseDate={getYearFromDateString(movie?.release_date)}
                                overview={movie?.overview}
                                image={movie?.poster_path}
                            />
                        ))
                    ) : searchHasBeenInteractedWith ? (
                        isRequestError ? (
                            <RequestError />
                        ) : (
                            <NoResults />
                        )
                    ) : null}
                </div>

                {movies.length && currentPage !== nextPage ? (
                    <div className="row mt-2">
                        <div className="col-md-12 p-0">
                            <button
                                className="btn btn-primary btn-lg w-100"
                                onClick={() => search(nextPage, false)}
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SearchMovies;
