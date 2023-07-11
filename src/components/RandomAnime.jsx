export default function RandomAnime( { animesList}) {
    

    const randomAnime = animesList[ Math.floor(Math.random() * animesList.length)]
    return(
        <div> 
            <h1>You should watch...</h1> 
            <h2 className=' text-8xl'> { randomAnime.name} </h2>
        </div>
    )
}