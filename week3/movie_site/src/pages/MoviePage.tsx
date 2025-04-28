import axios from 'axios';
import { useEffect , useState} from 'react'
import {Movie, MovieResponse} from '../../types/movie'
import MovieCard from '../../components/MovieCard'
import {LoadingSpinner} from '../../components/LoadingSpinner'
import { useParams } from 'react-router-dom';

export default function MoviePage() {

    const [movies, setMovies] = useState<Movie[]>([]);

    //로딩 상태
    const [isPending, setIsPending] = useState(false);
    //에러 상태
    const [isError, setIsError] = useState(false); 
    //페이지
    const [page, setPage] = useState(1);

    const {category} = useParams<{
        category : string;
    }>();

    useEffect(():void => {  //데이터 호출 (마운트 될 때 한번만 쓰고 싶어서서)
        const fetchMovies = async () : Promise<void>=>{
            setIsPending(true);


        try{
            const {data} = await axios.get<MovieResponse>(
                `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`,
                {
                    headers : {
                        Authorization : `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
                    }
                }
            );

            setMovies(data.results);
        } catch{
            setIsError(true);
        }finally{
            setIsPending(false);
        }
        };

        fetchMovies();
    }, [page,category]);
    if (isPending){
        return <LoadingSpinner />
    }
    if(isError){
        return (
            <div>
                <span className='text-red-500 text-2xl'>에러가 발생했습니다.</span>
            </div>
        )
    }

    return( 
        <>
            <div className="flex flex-col items-center w-full mr-0">
                <div className="flex items-center justify-center gap-6 mt-8">
                <button
                    className="bg-[#dda5e3] text-white text-2xl px-5 py-2 rounded-full shadow-md hover:bg-[#b2dab1] transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                <span className="text-black">◀</span>
                </button>
                <span className="text-lg font-semibold">{page} 페이지</span>
                <button
                    className="bg-[#dda5e3] text-white text-2xl px-5 py-2 rounded-full shadow-md hover:bg-[#b2dab1] transition-colors duration-300"
                    onClick={() => setPage((prev) => prev + 1)}
                >
                <span className="text-black">▶</span>
                </button>
                </div>
                {isPending && (
                    <div className='flex items-center justify-center h-dvh'>
                        <LoadingSpinner/>
                    </div>
                )}
                {!isPending&& (
                    <div className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full max-w-screen-xl mx-auto'>
                        {movies.map((movie)=>(
                            <MovieCard key={movie.id} movie={movie}/>  
                        ))}
                    </div>
                )}
            </div>

        </>

    );
}
