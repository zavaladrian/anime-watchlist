import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchAnime = () => {
  const [animes, setAnimes] = useState([]);
  

  const options = {
    method: 'GET',
    url: 'https://api.jikan.moe/v4/top/anime',
  };
  
  useEffect(() => {
    axios(options)
      .then((response) => {
        const animes = response.data.map(anime => ({
          id: anime.mal_id,
          title: anime.title,
          poster: anime.image_url,
          text: anime.synopsis,
        }));
        setAnimes(animes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
     
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>
            <th>Animes</th>
           <td> {anime.name}</td>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAnime;