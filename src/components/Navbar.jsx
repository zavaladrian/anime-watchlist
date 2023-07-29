import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 '>
        <nav className='bg-black py-5 text-center'>
        <div className="flex justify-center">
          <Link to="/" type="button" className="rounded bg-blue-300 me-6 px-2">Home</Link>
          <Link to="/filter" type="button" className="rounded bg-blue-300 me-6 px-2">Sort by TV-Rating</Link>
          <Link to="/watchlist" type="button" className="rounded bg-blue-300 me-6 px-2">Watch List</Link>
          <Link to="/random" type="button" className="rounded bg-blue-300 px-1 ">What should I watch tonight?</Link>
        </div>
        </nav>
      </div>
    )
}    
export default Navbar;