import { Link } from "react-router-dom";
import linkIcon from "../assets/linkIcon.png";

export function Footer() {
  return (
    <footer className="bottom-0">
      <hr></hr>
      <div className="mx-auto max-w-6xl px-20 py-2">
        <h2 className="font-bold">Support</h2>
        <Link className="flex items-center gap-1 text-xs" to="./contact-us">
          Contact Us{" "}
          <img
            className="object-contain h-2.5 inline-block"
            src={linkIcon}
            alt=""
            aria-hidden="true"
          ></img>
        </Link>
      </div>
    </footer>
  );
}
