import { Link } from "react-router-dom";
import appLogo from "../assets/logo.png";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between h-24">
      <Link to="/"><img className="object-contain h-24" src={appLogo}></img></Link>
      <div className="flex gap-3 items-end">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/browse-all">Browse All</Link>
      </div>
    </nav>
  );
}
