import React,{useState, useEffect} from 'react';
import { LONG_IMAGE_URL, POSTER_NOT_AVAILABLE, TRENDING_MOVIES } from './utils/Api';
import BodySkeleton from './LoadingSkeleton/BodySkeleton';
import { Link } from 'react-router-dom';

const BodyMain = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const[loading, setLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    await fetch(TRENDING_MOVIES)
     .then((res) => res.json())
     .then((json) => {
      setTrendingMovies(json.results);
      setLoading(false);
     })
     .catch((err) => console.log(err));

  }

  useEffect(()=> {
    setLoading(true);
    fetchTrendingMovies();
  }, [])


  return (    
    <div className='flex flex-wrap items-center justify-center mt-10'>
      {
        loading? 
          <>{
            Array(20).fill().map((skeleton, index) => (
                <div className='p-3 w-[31.3%] laptop:w-[15%] desktop:w-[15%]' key={index} >
                  <BodySkeleton/>
                </div>
            ))
          }</> :
          
          <>{
            trendingMovies.map((movie) => (
              <div className='p-3 w-[31.3%] laptop:w-[15%] desktop:w-[15%]' key={movie?.id} title={movie?.title}>
                <Link to={`/moviedetails/${movie?.id}`}><img src={movie?.poster_path ? LONG_IMAGE_URL + movie?.poster_path : POSTER_NOT_AVAILABLE} width="230" height="345" alt={movie?.original_title} loading="lazy" className='bg-[#252525]'/>
                <p className='font-medium block whitespace-nowrap text-ellipsis overflow-hidden'>{movie?.title}</p>
                <p className='text-sm font-light text-[#CCCCCC]'>{movie?.release_date.slice(0,4)}</p></Link>
              </div>
            ))
          }</>
      }

    </div>

  )
}

export default BodyMain