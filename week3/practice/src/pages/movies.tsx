import { useParams } from 'react-router-dom';


const MoviesPage = () => {
    const params = useParams();

    console.log(params);

  return (
    <h1>{params.movieId}Movies Page </h1>
  )
}

export default MoviesPage
