import { Container } from './Home.styled';
import { getPopularMovies } from 'API/get-API';
import { useEffect, useState } from 'react';
import ListMovies from 'components/ListMovies';

import PropTypes from 'prop-types';

const Home = () => {
    const [stateMovies, setStateMovies] = useState([]);
const [load, setload] = useState(false)


    useEffect(() => {
        const abortController = new AbortController();

        getPopularMovies(abortController)
        .then(res =>
            {
                setStateMovies(res.data.results)
            setload(true)
        }
        );

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <Container>
            <h2>Trending today</h2>
            {load && stateMovies && <ListMovies listMovies={stateMovies} />}
        </Container>
    );
};

Home.propTypes = {
    stateMovies: PropTypes.array.isRequired
}

export default Home;
