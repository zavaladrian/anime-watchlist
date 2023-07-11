import './App.css'
import AnimeCard from './components/AnimeCard'

const animeList = [
  {
    id: 0,
    name: "Demon Slayer",
    poster: 'Demon',
    rating: "TV-14",
    category: "Action",
    publisher: "Aniplex",
  },
  {
    id: 1,
    name: "Attack on Titan",
    poster: 'Hunter',
    rating: "TV-MA",
    category: "Action",
    publisher: "Wit Studio",
  },
  {
    id: 2,
    name: "Vinland Saga",
    poster: 'Vinland',
    rating: "Tv-MA",
    category: "Action",
    publisher: "Wit Studio",
  },
  {
    id: 3,
    name: "Black Clover",
    poster: 'Clover',
    rating: "TV-PG",
    category: "Action",
    publisher: "Pierrot",
  },
  {
    id: 4,
    name: "Heavenly Delusion",
    poster: 'Heavenly', 
    rating: "TV_MA",
    category: "Mystery",
    publisher: "Production I.G.",
  },
  {
    id: 5,
    name: "Jujutsu Kaisen",
    poster: 'Jujutsu',
    rating: "TV-MA",
    category: "Action",
    publisher: "TOHO animation",
  },
  {
    id: 6,
    name: "Naruto",
    poster:' Naruto',
    rating: "TV-PG",
    category: "Action",
    publisher: "Pierrot", 
  },
  {
    id: 7,
    name: "My Hero Academia",
    poster: 'Hero',
    rating: "TV-14",
    category: "Action",
    publisher: "Bones",
  },
  {
    id: 8,
    name: "Hunter x Hunter",
    poster: 'Hunter',
    rating: "TV-14",
    category: "Action",
    publisher: "Madhouse",
  },
 {
    id: 9,
    name: "Naruto: Shippuden",
    poster: 'Shippuden',
    rating: "TV-PG",
    category: "Adventure",
    publisher: "Pierrot",
  },
    
  ]
  
function App () {
    return (
        <div>
            <h1>Anime List</h1>
             { animeList.map( a => <AnimeCard anime = {a} /> ) }
        </div>
    )
}

export default App
