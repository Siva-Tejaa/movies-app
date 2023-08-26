import React,{useState, useEffect} from 'react';
import { MdMonitor } from "react-icons/md";
import { LONG_IMAGE_URL, TRENDING_TV_SHOWS } from './utils/Api';
import BodySkeleton from './LoadingSkeleton/BodySkeleton';
import { Link } from 'react-router-dom';
import { PosterNotAvailable } from './utils/Api';

const WebSeries = () => {

  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const[loading, setLoading] = useState(false);

  const fetchTrendingTvShows = async () => {
    await fetch(TRENDING_TV_SHOWS)
     .then((res) => res.json())
     .then((json) => {
      setTrendingTvShows(json.results);
      setLoading(false);
     })
     .catch((err) => console.log(err));
  }

  useEffect(()=> {
    setLoading(true);
    fetchTrendingTvShows();
  }, [])

  return (
    <div className='mt-10'>
      <div className='mx-4 laptop:mx-12 desktop:mx-16'>
      <p className='flex items-center text-lg'><MdMonitor style={{ "color": 'var(--main-color)', "fontSize":"25px"}}/> &nbsp; Trending TV Shows</p>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="130pt"
      height="20"
      version="1.1"
      viewBox="0 0 400 27.149"
    >
      <g>
        <path
          fill="#6ac045"
          fillRule="evenodd"
          stroke="none"
          d="M106.787 1.817c-8.461.684-29.23 2.188-46.154 3.342C19.527 7.964 0 10.768 0 13.866c0 1.333 1.222 2.424 2.715 2.424 1.493 0 2.715.855 2.715 1.899 0 1.223 4.034 1.571 11.312.977 6.222-.507 8.936-.344 6.032.363-6.885 1.676-8.98 6.709-2.259 5.425 2.584-.494 4.992-.016 5.352 1.064.46 1.38 12.415.945 40.335-1.469 21.824-1.887 48.232-3.973 58.685-4.636 24.682-1.564 180.389-.805 186.878.912 3.812 1.008 4.977.677 4.977-1.414 0-1.777-3-3.408-8.597-4.674-9.385-2.123 63.69-1.303 82.353.923 8.059.962 9.502.683 9.502-1.833 0-1.761-1.472-2.967-3.62-2.967-1.991 0-3.62-.672-3.62-1.494 0-.821-2.647-1.459-5.882-1.418-8.817.112-56.935-2.42-101.67-5.35-40.675-2.663-149.246-3.139-178.421-.781"
        ></path>
      </g>
    </svg>
    </div>

    <div className='flex flex-wrap items-center justify-center mt-6'>

      {
        loading ?
          <>
          {
            Array(12).fill("").map((skeleton, index) => (
              <div className='p-1 w-[31.3%] laptop:w-[15%] laptop:p-2 desktop:w-[15%] desktop:p-3' key={index}>
                <BodySkeleton />
              </div>
            ))
          }
          </>   :
          <>
          {
          trendingTvShows.slice(0,12).map((tvshow) => (
          <div className='p-1 mb-6 w-[31.3%] laptop:w-[15%] laptop:p-2 laptop:mb-2 desktop:w-[15%] desktop:p-3' key={tvshow?.id} title={tvshow?.name}>
            <Link to={`/tvshowdetails/${tvshow?.id}`}><img src={tvshow?.poster_path ? LONG_IMAGE_URL + tvshow?.poster_path : PosterNotAvailable} width="230" height="345" alt={tvshow?.original_name} loading="lazy" className='bg-[#252525] rounded'/>
            <p className='font-medium text-sm block whitespace-nowrap text-ellipsis overflow-hidden laptop:text-base'>{tvshow?.name || "Not Available"}</p>
            <p className='text-xs font-medium bg-[#3d3d3d] inline p-1 rounded text-[#6AC045] laptop:text-sm'>{tvshow?.first_air_date.slice(0,4) || "NA"}</p></Link>
          </div>
        ))
      }
          </>
      }
    </div>

    </div>
  )
}

export default WebSeries