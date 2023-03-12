import axios from 'axios';

const AUTH_TOKEN = 'b417ad14809407555d40747f9080afa2';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getPopularMovies = async abort => {
    try {
        const respons = await axios.get(
            `${BASE_URL}trending/all/day?api_key=${AUTH_TOKEN}`,
            {
                signal: abort.signal,
            }
        );
        return respons;
    } catch (error) {
        return error;
    }
};

const getSearchMovie = async (abort, name) => {
    try {
        const respons = await axios.get(
            `${BASE_URL}search/movie?api_key=${AUTH_TOKEN}&query=${name}`,
            {
                signal: abort.signal,
            }
        );
        return respons;
    } catch (error) {
        return error;
    }
};


const getMovie = async id => {
    try {
        const respons = await axios.get(
            `${BASE_URL}movie/${id}?api_key=${AUTH_TOKEN}`
        );
        return respons;
    } catch (error) {
        return error;
    }
};


const getMovieCast = async id => {
    try {
        const respons = await axios.get(
            `${BASE_URL}movie/${id}/credits?api_key=${AUTH_TOKEN}`
        );
        return respons;
    } catch (error) {
        return error;
    }
};

const getMovieReviews = async id => {
    try {
        const respons = await axios.get(
            `${BASE_URL}movie/${id}/reviews?api_key=${AUTH_TOKEN}`
        );
        return respons;
    } catch (error) {
        return error;
    }
};

export { getPopularMovies, getSearchMovie, getMovie, getMovieCast, getMovieReviews };
