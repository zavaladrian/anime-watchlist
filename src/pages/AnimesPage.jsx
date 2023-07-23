import { useParams } from "react-router-dom"

export default function AnimesPage({animesList}) {
    let { animeId } = useParams()
    animeId = parseInt(animeId)

    const animes = animesList.find(a => a.id === animeId)

    if(!animes) {
        return <h2> Anime Not Found</h2>
    }

    return(
        <div className='text-center'>
            <br />
            <h3 className='text-6xl text-white'>{ animes.name }</h3>
            <br />
            <img src={animes.poster} alt={animes.name} />
            <p className='text-5xl bg-black bg-opacity-50 text-white'>{ animes.text }</p>
            <p className='text-3xl text-opacity-80'>This show has a { animes.rating } rating </p>
        </div>
    )
}  