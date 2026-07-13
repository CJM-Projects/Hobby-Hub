import linkIcon from '../assets/linkIcon.png'; 
export function Footer() {
    return (
      <footer>
        <hr></hr> 
        <div className="px-5 py-2">
            <h3 className="font-bold">Support</h3>
                <a className="flex items-center gap-1 text-xs" href="./contact-us">Contact Us <img className="object-contain h-2.5 inline-block" src={linkIcon}></img></a>
        </div>
      </footer>
  );
}
