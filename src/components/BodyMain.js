import React,{useState, useEffect} from 'react';
import { LONG_IMAGE_URL, TRENDING_MOVIES } from './utils/Api';
import BodySkeleton from './LoadingSkeleton/BodySkeleton';
import { Link } from 'react-router-dom';
import { PosterNotAvailable, iBommaMovieContent } from './utils/Api';

const BodyMain = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const[loading, setLoading] = useState(false);

  const[imageloading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

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
                <div className='p-1 w-[31.3%] laptop:w-[15%] laptop:p-2 desktop:w-[15%] desktop:p-3' key={index} >
                  <BodySkeleton/>
                </div>
            ))
          }</> :
          
          <>{
            trendingMovies.map((movie) => (
              <div className='p-1 mb-6 w-[31.3%] laptop:w-[15%] laptop:p-2 laptop:mb-2 desktop:w-[15%] desktop:p-3' key={movie?.id} title={movie?.title}>
                <Link to={`/moviedetails/${movie?.id}`}>
                  {
                    imageloading ? <img src={iBommaMovieContent} width="230" height="345" alt={movie?.original_title} loading="lazy" className='bg-[#252525] rounded'/> :
                    <img src={movie?.poster_path ? LONG_IMAGE_URL + movie?.poster_path : PosterNotAvailable} width="230" height="345" alt={movie?.original_title} loading="lazy" className='bg-[#252525] rounded'/>
                  }
                  {
                    imageloading && <img src={movie?.poster_path ? LONG_IMAGE_URL + movie?.poster_path : PosterNotAvailable} width="230" height="345" alt={movie?.original_title} loading="lazy" onLoad={handleImageLoad} style={{"display": 'none'}} className='bg-[#252525] rounded'/>
                  }
                  <p className='font-medium text-sm block whitespace-nowrap text-ellipsis overflow-hidden laptop:text-base'>{movie?.title || "Not Available"}</p>
                  <p className='text-xs font-medium bg-[#3d3d3d] inline p-1 rounded text-[#6AC045] laptop:text-sm'>{movie?.release_date.slice(0,4) || "NA"}</p>
                </Link>
              </div>
            ))
          }</>
      }

    </div>

  )
}

export default BodyMain