import iBommaIcon from "../../images/iBommaIcon.png"
import PosterNotAvailable from "../../images/PosterNotAvailable.jpg"
import ActorProfile from "../../images/ActorProfile.jpeg";
import NotFoundImage from "../../images/NotFound.gif";
import TmdbLogo from "../../images/TMDBLogo.png";
import iBommaMovieContent from "../../images/iBommaMovieContent.jpg";

export const API_KEY = `aa4f461fe6a0b439ca344503367b743f`;

// -------------------- TOP RATED & UPCOMING --------------------

export const TOP_RATED_MOVIES = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

export const UPCOMING_MOVIES = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`


// -------------------- IMAGES API --------------------

export const LONG_IMAGE_URL = `https://image.tmdb.org/t/p/original`;

export const SHORT_IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

// -------------------- MOVIES API --------------------

export const TRENDING_MOVIES = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

//https://api.themoviedb.org/3/movie/{movie_id}
export const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/`;

//https://api.themoviedb.org/3/movie/{movie_id}/images
export const MOVIE_IMAGES = `https://api.themoviedb.org/3/movie/`;

//https://api.themoviedb.org/3/movie/{movie_id}/videos
export const MOVIE_VIDEOS = `https://api.themoviedb.org/3/movie/`;

//https://api.themoviedb.org/3/movie/{movie_id}/credits
export const MOVIE_CREDITS = `https://api.themoviedb.org/3/movie/`

//https://api.themoviedb.org/3/movie/{movie_id}/similar
export const SIMILAR_MOVIES = `https://api.themoviedb.org/3/movie/`;

// -------------------- TV SHOWS API --------------------

export const TRENDING_TV_SHOWS = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;

//https://api.themoviedb.org/3/tv/{series_id}
export const TV_DETAILS = `https://api.themoviedb.org/3/tv/`;

//https://api.themoviedb.org/3/tv/{series_id}/images
export const TV_IMAGES = `https://api.themoviedb.org/3/tv/`;

//https://api.themoviedb.org/3/tv/{series_id}/videos
export const TV_VIDEOS = `https://api.themoviedb.org/3/tv/`;

//https://api.themoviedb.org/3/tv/{series_id}/credits
export const TV_CREDITS = `https://api.themoviedb.org/3/tv/`

//https://api.themoviedb.org/3/tv/{series_id}/similar
export const SIMILAR_TV_SHOWS = `https://api.themoviedb.org/3/tv/`;

// -------------------- SEARCH API --------------------

//https://api.themoviedb.org/3/search/movie
export const SEARCH_MOVIES = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

//https://api.themoviedb.org/3/search/tv
export const SEARCH_TV = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`;

//https://api.themoviedb.org/3/search/multi
export const SEARCH_MOVIES_TVSHOWS_PEOPLE = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`;

// -------------------- NOT AVAILABLE --------------------

export const POSTER_NOT_AVAILABLE = `https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/Poster%20Not%20Available.jpg`;

export const PROFILE_NOT_AVAILABLE = `https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/Profile.jpeg`;

export { iBommaIcon, PosterNotAvailable, TmdbLogo, ActorProfile, NotFoundImage, iBommaMovieContent };