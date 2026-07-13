import appLogo from "../assets/logo.png";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between h-24">
      <img className="object-contain h-24" src={appLogo}></img>
      <div className="flex gap-3 items-end">
        <a href="./quiz">Quiz</a>
        <a href="./about-us">About Us</a>
        <a href="./browse-all">Browse All</a>
      </div>
    </nav>
  );
}
