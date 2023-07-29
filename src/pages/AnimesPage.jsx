import { useParams } from "react-router-dom"

export default function AnimesPage({animesList}) {
    let { animeId } = useParams()
    animeId = parseInt(animeId)

    const animes = animesList.find(a => a.id === animeId)

    if(!animes) {
        return <h2> Anime Not Found</h2>
    }

    return (
        <div className='text-center'>
          <br />
          <h3 className='text-6xl text-black'>{animes.name}</h3>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={animes.poster} alt={animes.name} style={{ maxWidth: '80%', height: 'auto' }} />
          </div>
          < br />
          < br />
          <p className='text-5xl bg-black bg-opacity-50 text-black'>{animes.aboutText}</p>
          < br />
          <p className='text-3xl text-opacity-80'>This show has a {animes.rating} rating </p>
        </div>
      );
    }