import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from './utils/Context';
import { API_KEY, LONG_IMAGE_URL, POSTER_NOT_AVAILABLE, TV_DETAILS, TV_IMAGES, TV_VIDEOS, TV_CREDITS, SIMILAR_TV_SHOWS, PROFILE_NOT_AVAILABLE } from './utils/Api';
import { Rating } from '@smastrom/react-rating';
import "./MovieDetails.css";
import { BiLinkExternal } from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import { SiSimilarweb } from "react-icons/si";
import BodySkeleton from './LoadingSkeleton/BodySkeleton';
import { Link } from 'react-router-dom';

const TvShowDetails = () => {

  const{nav, search} = useContext(Context);
  const {tvshowid} = useParams();

  const[loading, setLoading] = useState(false);
  const[tvshowdetails, setTvShowdetails] = useState([]);
  const[tvshowimages, setTvShowimages] = useState([]);
  const[tvshowvideos, setTvShowvideos] = useState([]);
  const[tvshowcredits, setTvShowcredits] = useState([]);
  const[similartvshows, setSimilarTvShows] = useState([]);

  const getTvShowDetails = async () => {
    await fetch(TV_DETAILS + tvshowid + "?api_key=" + API_KEY)
     .then((res) => res.json())
     .then((json) => {
        setTvShowdetails(json);
     })
     .catch((err) => console.log(err));
  };

  const getTvShowImages = async () => {
    await fetch(TV_IMAGES + tvshowid + "/images?api_key=" + API_KEY)
     .then((res) => res.json())
     .then((json) => {
        setTvShowimages(json);
     })
     .catch((err) => console.log(err));
  };

  const getTvShowVideos = async () => {
    await fetch(TV_VIDEOS + tvshowid + "/videos?api_key=" + API_KEY)
     .then((res) => res.json())
     .then((json) => {
        setTvShowvideos(json?.results);
     })
     .catch((err) => console.log(err));
  };

  const getTvShowCredits = async () => {
    await fetch(TV_CREDITS + tvshowid + "/credits?api_key=" + API_KEY)
     .then((res) => res.json())
     .then((json) => {
        setTvShowcredits(json);
     })
     .catch((err) => console.log(err));
  };

  const getSimilarTvShows = async () => {
    await fetch(SIMILAR_TV_SHOWS + tvshowid + "/similar?api_key=" + API_KEY)
     .then((res) => res.json())
     .then((json) => {
        setSimilarTvShows(json?.results);
     })
     .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
      getTvShowDetails();
      getTvShowImages();
      getTvShowVideos();
      getTvShowCredits();
      getSimilarTvShows();
    setLoading(false);
    window.scrollTo(0, 0)
  },[tvshowid])

  document.title=tvshowdetails?.name + " - iBOMMA"

  return (
    <div className={nav || search ? 'bg-[#1D1D1D] text-white pt-10 laptop:pt-0' : 'bg-[#1D1D1D] text-white' }>
      <div className='flex flex-nowrap justify-start gap-4 bg-cover bg-no-repeat bg-[#2b2b2b] bg-blend-overlay laptop:gap-8' style={{backgroundImage: `url(${LONG_IMAGE_URL}${tvshowdetails?.backdrop_path})`}}>
          <div className='ml-5 py-10 laptop:ml-14 laptop:py-14 desktop:ml-16 desktop:py-16'>
            <img src={tvshowdetails?.poster_path ? LONG_IMAGE_URL + tvshowdetails?.poster_path : POSTER_NOT_AVAILABLE} alt={tvshowdetails?.original_name} loading="lazy" className='bg-[#252525] rounded-md shadow-lg w-[165px] h-[240px] laptop:w-[235px] laptop:h-[360px]' /> 
          </div>
          <div className='py-11 overflow-hidden whitespace-nowrap text-ellipsis laptop:py-14 desktop:py-16'>
          <h1 className='text-xl font-[700] text-[#fafafa] mb-[2px] laptop:text-2xl desktop:text-3xl'>{tvshowdetails?.name}</h1>
          <p className={tvshowdetails?.tagline && 'text-xs mb-2'} title='Tagline'>{tvshowdetails?.tagline}</p>
          <div className='flex items-center text-sm mb-1 font-bold laptop:text-base desktop:text-base'>
            <p>{new Date(tvshowdetails?.first_air_date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</p> &nbsp; &#8226; &nbsp; TV Series
          </div>
          <div className='flex items-center text-sm mb-1 laptop:text-base'>
            <Rating
              style={{ maxWidth: 100 }}
              value={String(tvshowdetails?.vote_average/2)}
              readOnly
            />
            <p className='text-[#808080]'>({tvshowdetails?.vote_count})</p> &nbsp; &nbsp;
            <img src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/TMDB%20Logo.png" alt="TMDB" title="TMDB" className='w-8 h-4 mr-2 rounded-sm bg-[#2b2b2b] laptop:w-8 laptop:h-4'/>
            <p>{String(tvshowdetails?.vote_average).slice(0,3)}/10</p>
          </div>
          <div className='flex items-center text-xs my-2 laptop:text-base'>
            {
              tvshowdetails?.original_language ? <p>{new Intl.DisplayNames('en', { type: "language" }).of(tvshowdetails?.original_language)}</p> : <p>NA</p>
            }

            &nbsp; &#8226; &nbsp;
            <p>{tvshowdetails?.number_of_seasons>1 ? `${tvshowdetails?.number_of_seasons} Seasons` : `${tvshowdetails?.number_of_seasons} Season` }</p> &nbsp; &#8226; &nbsp;
            <p>{tvshowdetails?.number_of_episodes} Episodes</p>
            {/* <p>{Math.floor(tvshowdetails?.runtime/60)}h {tvshowdetails?.runtime%60}m</p>&nbsp; &#8226; &nbsp;
            <p>{tvshowdetails?.status}</p> */}
          </div>
          <div>
          </div>
          <div className='flex items-center gap-2'>
            {tvshowdetails?.genres?.map((genre)=>(
              <p className='my-1 text-xs p-1 px-2 border border-solid border-[#808080] rounded-full backdrop-blur-sm laptop:text-sm laptop:px-3 desktop:text-base'>{genre?.name}</p>
            ))}
          </div>
          <div className='flex items-center gap-[2px]'>
            <IoMdGlobe style={{ fontSize:"18px" }}/>
            {
              tvshowdetails?.production_countries?.length > 0 ?
            
            <p className='flex items-center my-1 text-xs p-1 laptop:text-sm desktop:text-base'>{tvshowdetails?.production_countries?.map((country, i, arr) =>(
              <p>{country?.name}{arr.length-1 !== i && ", " } </p>
            ))}
            </p> : <p className='flex items-center my-1 text-xs p-1 laptop:text-sm desktop:text-base'>Not Available</p>
            }
          </div>
            
            <p className='flex items-center gap-2 text-xs p-1 laptop:text-sm desktop:text-base'>
            <a href={tvshowdetails?.homepage} target='_blank' rel="noreferrer" className='bg-[var(--main-color)] p-2 rounded-md flex gap-1 items-center'>Watch Now <BiLinkExternal style={{ fontSize:"18px" }}/></a>

              {/* <a href={`https://www.imdb.com/title/${tvshowdetails?.imdb_id}`} target='_blank' className=''><svg id="home_img" class="ipc-logo" className='h-[34px] laptop:h-9 desktop:h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg> </a> */}
            </p>
        </div>
      </div>
      <div className='mx-5 pt-2 laptop:mx-14 laptop:pt-4 desktop:mx-16 desktop:pt-5'>
        <p className='text-sm text-justify text-[var(--main-color)] font-bold laptop:text-base'>Director : &nbsp;
            {
              tvshowcredits?.crew?.filter((crew) => crew.job === "Director").map((director, i, arr) => (
                <span className='text-xs text-white font-normal laptop:text-sm'>{director?.name}{arr.length-1 !== i && ", " }</span>
              ))
            }
        </p>
      </div>
      <div className='mx-5 pt-1 laptop:mx-14 laptop:pt-2 desktop:mx-16 desktop:pt-2'>
        <p className='text-sm text-justify text-[var(--main-color)] font-bold laptop:text-base'>Overview : &nbsp;
            <span className='text-xs text-white font-normal laptop:text-sm'>{tvshowdetails?.overview}</span>
        </p>
      </div>
      <div className='mx-5 py-2 laptop:mx-14 laptop:pt-4 desktop:mx-16 desktop:pt-4'>
        <p className='text-base font-bold border-[var(--main-color)] border-b-2 inline laptop:text-lg'>Photos</p>
        <div className='flex gap-6 mt-3 overflow-auto slider'>
         {
          tvshowimages?.backdrops?.length !== 0 ?
           tvshowimages?.backdrops?.slice(0,12).map((image) => (
            <img src={LONG_IMAGE_URL + image.file_path} className='w-56 h-32 bg-[#2b2b2b] rounded-md laptop:w-72 laptop:h-40' loading="lazy" alt={tvshowdetails?.name}/>
          )) : <p className='text-center my-5'>Photos Not Available</p>
        }
        </div>
      </div>
      <div className='mx-5 py-2 laptop:mx-14 laptop:pt-4 desktop:mx-16 desktop:pt-4'>
        <p className='text-base font-bold border-[var(--main-color)] border-b-2 inline laptop:text-lg'>Videos</p>
        <div className='flex gap-6 mt-3 overflow-auto slider'>
         {
          tvshowvideos?.length!==0 ?
           tvshowvideos?.slice(0,6).map((video) => (
            // <img src={LONG_IMAGE_URL + image.file_path} className='w-56 h-32 bg-[#2b2b2b] rounded-md laptop:w-72 laptop:h-40' loading="lazy"/>
            <iframe src={`https://www.youtube-nocookie.com/embed/${video?.key}`} title={video?.id} allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-56 h-32 bg-[#2b2b2b] rounded-md laptop:w-72 laptop:h-40' loading="lazy"></iframe>
          )) : <p className='text-center my-5'>Videos Not Available</p>
        }
        </div>
      </div>
      <div className='mx-5 py-2 laptop:mx-14 laptop:pt-4 desktop:mx-16 desktop:pt-4'>
        <p className='text-base font-bold border-[var(--main-color)] border-b-2 inline laptop:text-lg'>Cast</p>
        <div className='flex gap-6 mt-3 overflow-auto slider'>
         {
          tvshowcredits?.cast?.length !==0 ?
           tvshowcredits?.cast?.slice(0,12).map((cast) => (
            <div title={cast?.name}>
              <img src={cast.profile_path ? LONG_IMAGE_URL + cast.profile_path : PROFILE_NOT_AVAILABLE} className='w-56 h-32 bg-[#2b2b2b] rounded-md laptop:w-28 laptop:h-36' loading="lazy" alt={cast?.name}/>
              <p className='text-sm text-center w-24 overflow-hidden text-ellipsis whitespace-nowrap laptop:w-28'>{cast?.name}</p>
              <p className='text-xs text-center text-[#808080] w-24 overflow-hidden text-ellipsis whitespace-nowrap laptop:w-28'>{cast?.character}</p>
            </div>
          )): <p className='text-center my-5'>Cast details Not Available</p>
        }
        </div>
      </div>


      <div className='mt-10'>
      <div className='mx-5 laptop:mx-14 desktop:mx-16'>
      <p className='flex items-center text-lg'><SiSimilarweb style={{ "color": 'var(--main-color)', "fontSize":"25px"}}/> &nbsp; Similar TV Shows</p>
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
        loading? 
          <>{
            Array(6).fill().map((skeleton, index) => (
                <div className='p-3 w-[31.3%] laptop:w-[15%] desktop:w-[15%]' key={index} >
                  <BodySkeleton />
                </div>
            ))
          }</> :
          
          <>{
            similartvshows.length>0 ?
            similartvshows.slice(0,6).map((tvshow) => (
              <div className='p-3 w-[31.3%] laptop:w-[15%] desktop:w-[15%]' key={tvshow?.id} title={tvshow?.title}>
                <Link to={`/tvshowdetails/${tvshow?.id}`}><img src={tvshow?.poster_path ? LONG_IMAGE_URL + tvshow?.poster_path : POSTER_NOT_AVAILABLE} width="230" height="345" alt={tvshow?.original_title} loading="lazy" className='bg-[#252525]'/>
                <p className='font-medium block whitespace-nowrap text-ellipsis overflow-hidden'>{tvshow?.name}</p>
                <p className='text-sm font-light text-[#CCCCCC]'>{tvshow?.first_air_date.slice(0,4)}</p></Link>
              </div>
            )) : <p className='my-14'>Similar TV Shows Not Available</p> 
          }</>
      }
    </div>

    </div>

      
    </div>
  )
}

export default TvShowDetails;