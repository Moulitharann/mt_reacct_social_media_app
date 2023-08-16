import { Link } from "react-router-dom";
import Home from './Home';
 const Nav=({search,setsearch})=>{
  return(
    <nav className="Nav">
      <form className="searchform" onSubmit={(e)=>e.preventDefault}>
        <label htmlFor="search">Search Post</label>
        <input
        id="search"
        type="text"
        placeholder="Search post" value={search}
        onChange={(e)=>setsearch(e.target.value)}></input>
      </form>
      <ul>
             <li><Link to={'./'}>Home</Link></li>
             <li><Link to={'./About'}>About</Link></li>
             <li><Link to={'./Post'}>Postpage</Link></li>
      </ul>
    </nav>
  )
 }
 export default Nav