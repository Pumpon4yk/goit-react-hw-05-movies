import { Container, Img, Wraper, Text, Button, Datails } from './MovieDetails.styled';
import { useParams, useLocation, Link , Outlet} from 'react-router-dom';
import { getMovie } from 'API/get-API';
import { useEffect, useState, Suspense } from 'react';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        getMovie(id).then(res => setMovie(res.data));
    }, [id]);

    return (
        <Container>
            <Button to={backLinkHref}>to back</Button>

            {movie && (
                <Datails>
                    <Wraper>
                    <Img src={`${BASE_URL_IMG}${movie.poster_path}`} alt={movie.title}/>
                    <div>
                        <h2>
                            {movie.title} ({movie.release_date.slice(0, 4)})
                        </h2>
                        <Text>
                            User score: {Math.floor(movie.vote_average * 10)}%
                        </Text>
                        <h3>Overview</h3>
                        {movie.overview ? (
                            <Text>{movie.overview}</Text>
                        ) : (
                            <Text>Not found</Text>
                        )}
                        <h4>Ganres</h4>
                        {movie.genres.map(e => (
                            <Text key={e.id}>{e.name}</Text>
                        ))}
                        </div>
                    </Wraper>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                    <Suspense fallback={<div>loading..</div>}>
                        <Outlet />
                    </Suspense>
                </Datails>
            )}
        </Container>
    );
};

export default MovieDetails;
