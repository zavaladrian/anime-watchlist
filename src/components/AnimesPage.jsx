import { useParams } from "react-router-dom"


export default function AnimesPage({animesList}) {
    let { animeId } = useParams()
    animeId = parseInt(animeId)

    const anime = animesList.find(a => a.id === animeId)

    if(!anime) {
        return <h2> Anime Not Found</h2>
    }

    return(
        <div>
            <h3>{ anime.name }</h3>
            <img src={anime.poster} alt={anime.name} />
            <p>{ anime.rating }</p>
            <p>{ anime.text }</p>
        </div>
    )
}  