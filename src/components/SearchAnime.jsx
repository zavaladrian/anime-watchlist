import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const options = {
    method: "GET",
    url: `https://myanimelist.p.rapidapi.com/anime/search?q=${searchTerm}`,
    headers: {
      "X-RapidAPI-Key": 'f579da24famsh39f3ad9ba6478bcp10ada0jsnc0596468a8a6',
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios(options)
      .then((response) => {
        const animes = response.data.results.map(anime => ({
          id: anime.id,
          title: anime.name,
          poster: anime.image_url,
          text: anime.text,
        }));
        setAnimes(animes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an anime"
        onChange={event => setSearchTerm(event.target.value)}
      />
      <ul>
        {animes.map(anime => (
          <li key={anime.id}>
            {anime.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAnime;