import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { TEST_ANIMES } from "./Lists/TEST_ANIMES";
import FilterPage from "./pages/FilterPage";
import RandomAnimePage from "./pages/RandomAnimePage";
import AnimesPage from "./pages/AnimesPage";
import WatchListPage from "./pages/WatchListPage";
import HomePage from "./pages/HomePage";
import Signup from "./pages/SignUpPage";
import { useEffect, useReducer, useState } from "react";
import reducer from "./watchlist/reducer";
import LoginPage from "./pages/LoginPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import Account from "./pages/Account";
import PrivateRoute from "./components/PrivateRoute";
// import FetchData from "./watchlist/fetchdata";
// import axios from "axios";
// import ListPage from "./pages/ListPage";

const WATCHLIST_ANIMES = [];

function App() {
  const [watchlistAnimes, dispatch] = useReducer(reducer, WATCHLIST_ANIMES);
  const [animesList, setAnimesLists] = useState(TEST_ANIMES);
  // const [lists, setList] = useState([])

  // const url = 'https://api.jikan.moe/v4/anime/1?fields=id,title,synopsis,rating,streaming,genres'

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setList(response.data);
  //     // console.log(response.data)
  //   });
  // }, [url]);

  return (
    <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
     
      <AuthContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage animesList={animesList} />} />
          <Route
            path="/filter"
            element={
              <FilterPage
                animesList={animesList}
                dispatch={dispatch}
                watchlist={watchlistAnimes}
              />
            }
          />
          <Route
            path="/random"
            element={<RandomAnimePage animesList={animesList} />}
          />
          <Route
            path="/anime/:animeId"
            element={<AnimesPage animesList={animesList} dispatch={dispatch} />}
          />
          <Route
            path="/watchlist"
            element={
              <WatchListPage
                dispatch={dispatch}
                watchlistAnimes={watchlistAnimes}
              />
            }
          />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Login" element={<LoginPage />} />
          {/* <Route path="/List" element={<ListPage lists={lists} />} /> */}
          <Route path="/Account" element={ <PrivateRoute><Account /> </PrivateRoute>} />
        </Routes>
      </AuthContextProvider>
      <Footer className=" bottom-auto fixed" />
    </div>
  );
}
export default App;
