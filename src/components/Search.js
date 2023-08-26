import React,{useState, useEffect} from 'react';
import "./Search.css";
import { Link, useParams } from 'react-router-dom';
import { LONG_IMAGE_URL, POSTER_NOT_AVAILABLE, SEARCH_MOVIES_TVSHOWS_PEOPLE } from './utils/Api';


const Search = () => {

  document.title="iBOMMA - Search";

  const[mediatype, setMediaType] = useState("movie");

  // const[loading, setLoading] = useState(false);
  const[searchResults, setSearchResults] = useState([])

  const{text} = useParams();

  const getSearchResults = async () => {
    await fetch(SEARCH_MOVIES_TVSHOWS_PEOPLE + text)
     .then((res) => res.json())
     .then((json) => {
      setSearchResults(json?.results);
     })
     .catch((err) => console.log(err));
  };

  useEffect(() => {
    // setLoading(true);
    getSearchResults();
    // setLoading(false);
    window.scrollTo(0, 0);
  },[text])


  return (
    <div className='bg-[#1D1D1D] text-white min-h-screen'>
      <div className='mx-3 py-6 laptop:mx-14 laptop:py-6 desktop:mx-16'>
        <div>
          <p className='bg-[var(--main-color)] p-2'>Search Results({searchResults.length>0 ? searchResults.length : "0"})</p>
          <div className='flex items-center justify-around my-6'>
            <button className={mediatype === "movie" ? `bg-[var(--main-color)] p-2 rounded-lg` : `bg-[#3e3e3e] p-2 rounded-md`} onClick={() => setMediaType("movie")}>Movies({searchResults?.filter((result) => result?.media_type === "movie")?.length>0 ? searchResults?.filter((result) => result?.media_type === "movie")?.length : "0"})</button>
            <button className={mediatype === "tv" ? `bg-[var(--main-color)] p-2 rounded-lg` : `bg-[#3e3e3e] p-2 rounded-md`} onClick={() => setMediaType("tv")}>TV Shows({searchResults?.filter((result) => result?.media_type === "tv")?.length>0 ? searchResults?.filter((result) => result?.media_type === "tv")?.length : "0"})</button>
            <button className={mediatype === "person" ? `bg-[var(--main-color)] p-2 rounded-lg` : `bg-[#3e3e3e] p-2 rounded-md`} onClick={() => setMediaType("person")} disabled>People({searchResults?.filter((result) => result?.media_type === "person")?.length>0 ? searchResults?.filter((result) => result?.media_type === "person")?.length : "0"})</button>
          </div>
        </div>
        <div>
          <div>
            {
              searchResults?.filter((result) => result?.media_type === mediatype)?.length !== 0 ? 
              searchResults?.filter((result) => result?.media_type === mediatype).map((result)=>(
                <Link to={mediatype === "movie" ? `/moviedetails/${result?.id}` : `/tvshowdetails/${result?.id}`}><div className='flex items-start gap-4 my-4 border-[#3e3e3e] border-[0.5px] p-2 laptop:gap-8' key={result?.id}>
                  <div className='w-[130px] laptop:w-[12%]'>
                    <img src={result?.poster_path ? LONG_IMAGE_URL + result?.poster_path : POSTER_NOT_AVAILABLE} alt={result?.original_title} loading="lazy" className='bg-[#252525]' />
                  </div>
                  <div className='flex gap-1 flex-col w-[80%]'>
                    <p className='text-base font-[700] text-[#fafafa] mb-[2px] laptop:text-lg desktop:text-lg'>{result?.title ? result?.title : result?.name && result?.name}</p>
                    <p className='text-sm mb-2 text-[#858484] laptop:text-base laptop:mb-4 desktop:text-base'>{new Date(result?.release_date ? result?.release_date : result?.first_air_date && result?.first_air_date)?.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</p>
                    <p className='description text-xs text-white font-normal text-justify desktop:text-sm'>{result?.overview}</p>
                  </div>
                </div></Link>
              )) : <p className='text-center'>There are no search results that matched your query</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search