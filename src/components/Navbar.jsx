import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div >
        <nav className='bg-black py-5 text-center'>
        <div className="flex justify-center">
          <Link to="/" type="button" className="text-xl rounded bg-blue-300 me-6 px-2">Home</Link>
          <Link to="/filter" type="button" className="text-xl rounded bg-blue-300 me-6 px-2">Sort by TV-Rating</Link>
          <Link to="/watchlist" type="button" className="text-xl rounded bg-blue-300 me-6 px-2">Watch List</Link>
          <Link to="/random" type="button" className="text-xl rounded bg-blue-300 px-1" >What should I watch tonight?</Link>
        </div>
        </nav>
      </div>
    )
}    
export default Navbar;