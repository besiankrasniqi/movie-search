/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchMovies from '../components/search-movies.component';
import { getMovies } from '../services/api-requests.tsx';
import '../lib/FontAwesome';

describe('Search Movies Component', () => {
    /**
     * checking to see if API returns results
     * since page 1 usually shows 20 results we are checking
     * the length of results array to be 20
     */
    it('movie results are returned from the API', async () => {
        const req = await getMovies(1, 'flash');
        expect(req.data.results.length).toBe(20);
    });

    /**
     * checking to see that 20 results have been returned
     * when searching for movie "flash"
     */
    it('movie results are loaded in SearchMovies component', async () => {
        const { getByTestId, findAllByRole } = render(<SearchMovies />);

        const searchMoviesInput = getByTestId('search-movies-input');
        fireEvent.change(searchMoviesInput, { target: { value: 'flash' } });
        fireEvent.click(getByTestId('search'));
        const items = await findAllByRole(/listitem/i);
        expect(items.length).toBe(20);
    });
});
