import * as React from 'react';
import './sass/movie-item.sass';
import AppConfig from '../../config/app-config';

interface Props {
    title?: string;
    releaseDate?: string;
    overview?: string;
    image?: string;
}

const MoviteItem = ({ title, releaseDate, overview, image }: Props) => {
    const imagePlaceholder = 'https://place-hold.it/106x160';

    return (
        <>
            <div className="row p-0 mt-0 mr-0 mb-5 ml-0 movie-section" role="listitem">
                <div className="col-md-12 p-3">
                    <img
                        className=""
                        src={
                            image ? `${AppConfig.moviesApiBaseImageUrl}/${image}` : imagePlaceholder
                        }
                    />

                    <h1 data-testid="movie-title"> Movie Title: {title}</h1>
                    <h2>{releaseDate}</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
};

export default MoviteItem;
