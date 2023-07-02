import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Search from './components/Search';
import Footer from './components/Footer';
import Context from './components/utils/Context';
import { Routes, Route } from 'react-router-dom';
import BugReport from './components/BugReport';
import About from './components/About';
import Contact from './components/Contact';
import Dmca from './components/Dmca';
import TermsandConditions from './components/TermsandConditions';
import MovieDetails from './components/MovieDetails';
import Navigation from './components/Navigation';
import TVShowDetails from './components/TVShowDetails';
import NotFound from './components/NotFound';


function App() {

  const[nav, setNav] = useState(false);
  const[search, setSearch] = useState(false);
  const[searchtext, setSearchText] = useState(" ");
  return (
    <Context.Provider value={{nav, setNav, search, setSearch, searchtext, setSearchText}}>
      <div className="App">
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/bugreport" element={<BugReport/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dmca" element={<Dmca/>}/>
          <Route path="/termsandconditions" element={<TermsandConditions/>}/>
          <Route path="/moviedetails/:movieid" element={<MovieDetails/>}/>
          <Route path="/tvshowdetails/:tvshowid" element={<TVShowDetails/>}/>
          <Route path="/search/:text" element={<Search/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
      {console.clear()}
    </Context.Provider>
  );
}

export default App;
