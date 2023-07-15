export default function RandomAnime( { animesList}) {
    

    const randomAnime = animesList[ Math.floor(Math.random() * animesList.length)]
    return(
        <div> 
            <h1 className='text-3xl'>You should watch...</h1> 
            <h2 className=' text-7xl'> { randomAnime.name} </h2>
            <img src={randomAnime.poster} alt={randomAnime.name} />
            <p className='text-2xl'>{ randomAnime.text }</p>
        </div>
    )
}