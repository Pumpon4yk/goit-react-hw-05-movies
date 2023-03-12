import { Container } from './Movies.styled';
import SearchMovies from '../../components/SearchMovies';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'API/get-API';
import { useEffect, useState } from 'react';
import ListMovies from 'components/ListMovies';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  console.log("🚀 ~ Movies ~ search:", search)


    useEffect(() => {
        if (!search) return;

        const abortController = new AbortController();

        getSearchMovie(abortController, search).then(res =>
            setMovies(res.data.results)
        );

        return () => {
            abortController.abort();
        };
    }, [search]);

    const handelSubmit = name => {
        setSearchParams({ search: name });
    };

    return (
        <Container>
            <SearchMovies handelSubmit={handelSubmit} />
            {movies && <ListMovies listMovies={movies} />}
        </Container>
    );
};

export default Movies;
