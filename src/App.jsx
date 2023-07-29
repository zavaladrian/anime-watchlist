import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes} from "react-router-dom";
import { TEST_ANIMES } from "./Lists/TEST_ANIMES";
import  FilterPage from "./pages/FilterPage";
import RandomAnimePage from "./pages/RandomAnimePage";
import AnimesPage from "./pages/AnimesPage";
import WatchListPage from "./pages/WatchListPage";
import HomePage from "./pages/HomePage";
import { useReducer, useState } from "react";
import reducer from "./watchlist/reducer";

const WATCHLIST_ANIMES = [];

function App() {
  const [watchlistAnimes, dispatch] = useReducer(reducer, WATCHLIST_ANIMES)
  const [animesList, setAnimesLists]= useState( TEST_ANIMES )

  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage animesList={animesList} />} />
        <Route path="/filter" element={ <FilterPage animesList={animesList} />} />
        <Route path="/random" element={ <RandomAnimePage animesList={animesList} />}/>
        <Route path="/anime/:animeId" element={ <AnimesPage animesList={animesList}/>} />
        <Route path="/watchlist" element={ <WatchListPage dispatch={dispatch} watchlistAnimes={watchlistAnimes} />}/>
      </Routes> 

      <Footer className=' bottom-auto fixed' />   
    </div>
  );
}
export default App;