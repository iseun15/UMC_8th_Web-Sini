import React from 'react'
import { Movie, MovieResponse } from '../../types/movie';
import { useState, useEffect } from 'react';
import '../css/movies.css';

import axios from 'axios';

const MoviesPage = () => {
    const [movies, setMovies ] = useState<Movie[]>([]);

    useEffect(()=> {
        const fetchMovies = async () => {
            const {data} = await axios.get<MovieResponse>(
                `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
                {
                    headers : {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN }`,
                    },
                }
            );

            setMovies(data.results); //가져온 결과를 상태에 저장
        };
        fetchMovies();

    }, []);

    return (
        <section className='movie-body'>
            <div className='movie-list'>
                {movies?.map((movie)=>(
                    <div className='movie-card' key = {movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MoviesPage
