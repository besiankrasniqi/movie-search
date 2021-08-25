import axios from 'axios';
import AppConfig from '../config/app-config';

export const getMovies = (
    page: number,
    query: string,
    language: string = 'en-US',
    includeAdult: boolean = false,
) => {
    return axios.get(AppConfig.moviesApiV3BaseUrl, {
        params: {
            api_key: AppConfig.moviesApiV3ApiKey,
            language,
            page,
            include_adult: includeAdult,
            query,
        },
    });
};

const apiRequests = {
    getMovies,
};

export default apiRequests;
