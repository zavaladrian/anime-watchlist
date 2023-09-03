import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div >
        <nav className='bg-black py-5 text-center'>   
        <div className="bg-black flex ">
          <Link to="/">
          <img
            src="src/assets/img/logo.jpg"
            alt=""
            className="object-scale-down h-auto w-20 justify-start"
          /> 
          </Link>
        <div className="flex-auto py-5 space-x-9 text-2xl">
          <Link to="/" type="button" className=" text-white rounded me-6 px-2 hover:bg-indigo-400">Home</Link>
          <Link to="/filter" type="button" className="text-white rounded  me-6 px-2 hover:bg-indigo-400">Top Ten Suggestions</Link>
          <Link to="/random" type="button" className=" text-white rounded  px-1 me-6 hover:bg-indigo-400" >What should I watch tonight?</Link>
          <Link to="/watchlist" type="button" className=" text-white rounded me-6 px-2 hover:bg-indigo-400 ">Watch List</Link>
          </div>
        </div>
        </nav>
      </div>
    )
}    
export default Navbar;