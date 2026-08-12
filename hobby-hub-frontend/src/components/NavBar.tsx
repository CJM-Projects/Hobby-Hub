import { Link } from "react-router-dom";
import appLogo from "../assets/logo.png";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between h-24 mx-4">
      <Link to="/"><img className="object-contain h-24" src={appLogo}></img></Link>
      <div className="flex gap-3 items-end">
        <Link className="hover:font-bold" to="/">Home</Link>
        <Link className="hover:font-bold" to="/quiz">Quiz</Link>
        <Link className="hover:font-bold" to="/about-us">About Us</Link>
              <div className="float-left overflow-hidden group">
                  <p>Browse Hobbies</p>
                  <div className="hidden absolute z-1 group-hover:block bg-white shadow-lg pl-2 pr-8">
                      <Link className="block float-none hover:font-bold" to="/category/active">Active</Link>
                      <Link className="block float-none hover:font-bold" to="/category/creative">Creative</Link>
                      <Link className="block float-none hover:font-bold" to="/category/strategic">Strategic</Link>
                      <Link className="block float-none hover:font-bold" to="/category/relaxing">Relaxing</Link>
                      <Link className="block float-none hover:font-bold" to="/category/social">Social</Link>
                      <Link className="block float-none hover:font-bold" to="/category/outdoor">Outdoor</Link>
                      <Link className="block float-none hover:font-bold" to="/browse-all">Browse All</Link>
                  </div>
              </div>
      </div>
    </nav>
  );
}
