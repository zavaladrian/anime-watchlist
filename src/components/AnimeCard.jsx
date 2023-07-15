import { Link } from "react-router-dom";

function AnimeCard(props) {
  return (
    <div className="grid grid-cols-2 gap-60 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div />
        <h4 className="mt-5 text-xl font-medium text-gray-900">{props.anime.name}</h4>
          <div className="mt-5 flex flex-grow flex-col justify-between">
            <p>{props.anime.category}</p>
            <p>{props.anime.rating}</p>
            <p>{props.anime.publisher} </p>
            <Link to ={"/anime/" + props.anime.id} type="button" className="rounded-full bg-blue-300 hover:bg-blue-700 shadow-lg shadow-blue-500/50 "><p className='text-center'>Details</p></Link> 
          </div>
          
      </div>
  );
}

export default AnimeCard;
