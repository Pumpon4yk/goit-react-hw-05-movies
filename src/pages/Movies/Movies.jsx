import { Container } from './Movies.styled';
import SearchMovies from '../../components/SearchMovies';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'API/get-API';
import { useEffect, useState } from 'react';
import ListMovies from 'components/ListMovies';
import PropTypes from 'prop-types';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams === '') return;

        const abortController = new AbortController();

        getSearchMovie(abortController, searchParams).then(res =>
            setMovies(res.data.results)
        );

        return () => {
            abortController.abort();
        };
    }, [searchParams]);

    const handelSubmit = name => {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    };

    return (
        <Container>
            <SearchMovies handelSubmit={handelSubmit} />
            {movies && <ListMovies listMovies={movies} />}
        </Container>
    );
};

Movies.propTypes ={
    movies: PropTypes.string.isRequired,
    handelSubmit: PropTypes.func.isRequired
}

export default Movies;
