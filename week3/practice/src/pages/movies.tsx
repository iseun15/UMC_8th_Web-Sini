import { Movie, MovieResponse } from '../types/movie';
import { useState, useEffect } from 'react';

import axios from 'axios'; 

const MoviesPage = () => {
    const [movies, setMovies ] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const {data} = await axios.get<MovieResponse>(  //axios : application/json 자동 요청청
                `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
                {
                    headers : {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                    },
                }
            );

            setMovies(data.results);
        };
        fetchMovies();
    }, []);

    return (
        <ul>
            {/*옵셔널 체인 활용*/}
            {movies?.map((movie)=>(
                <li key={movie.id}>
                    <h1>{movie.title}</h1>
                </li>
            ))}
        </ul>
    );
};

export default MoviesPage
