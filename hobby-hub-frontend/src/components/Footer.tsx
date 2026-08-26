import { Link } from "react-router-dom";
import linkIcon from "../assets/linkIcon.png";

export function Footer() {
  return (
    <footer className="bottom-0">
      <hr className="border-zinc-300 shadow-sm"></hr>
      <div className="mx-auto max-w-6xl px-8 py-2">
        <h2 className="font-bold mb-1.5">Support</h2>
        <Link
          className="flex items-center gap-1 text-xs mb-2"
          to="./contact-us"
        >
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
