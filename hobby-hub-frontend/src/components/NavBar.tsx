import { useState } from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/HobbyHubLogo.png";
import appNameLogo from "../assets/HobbyHubNameLogo.png";

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [browseOpen, setBrowseOpen] = useState(false);
    const [desktopBrowseOpen, setDesktopBrowseOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setBrowseOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">

            <div className="relative flex h-20 items-center justify-between px-4 md:hidden">

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="z-10 flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-zinc-700 transition-colors hover:bg-zinc-100"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                >
                    <span aria-hidden="true">
                        {menuOpen ? "✕" : "☰"}
                    </span>
                </button>

                <Link
                    to="/"
                    onClick={closeMenu}
                    className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap"
                >
                    <img
                        className="h-12 w-12 object-contain"
                        src={appLogo}
                        alt="Hobby Hub logo"
                    />

                    <img
                        src={appNameLogo}
                        className="h-8 object-contain"
                        alt="Hobby Hub"
                    />
                </Link>

                <Link
                    to="/quiz"
                    onClick={closeMenu}
                    className="z-10 rounded-full bg-logopurple px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-hoverlogopurple"
                >
                    Take the Quiz
                </Link>
            </div>


            <div className="mx-4 hidden h-20 items-center md:flex">

                <div>
                    <Link
                        to="/"
                        className="flex flex-nowrap items-center gap-1"
                    >
                        <img
                            className="inline-block h-16 w-16 object-contain"
                            src={appLogo}
                            alt="Hobby Hub logo"
                        />

                        <img
                            src={appNameLogo}
                            className="h-12 object-contain"
                            alt="Hobby Hub"
                        />
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end gap-8">

                    <Link
                        to="/"
                        className="font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                    >
                        Home
                    </Link>

                    <div
                        className="relative"
                        onMouseEnter={() => setDesktopBrowseOpen(true)}
                        onMouseLeave={() => setDesktopBrowseOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setDesktopBrowseOpen(!desktopBrowseOpen)}
                            className="flex items-center gap-1 font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                            aria-expanded={desktopBrowseOpen}
                            aria-haspopup="true"
                        >
                            Browse Hobbies

                            <span
                                className={`text-xs transition-transform ${desktopBrowseOpen ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        <div
                            className={`absolute left-0 top-full z-10 mt-3 w-48 rounded-xl border border-zinc-100 bg-white p-2 shadow-lg transition-all duration-200 ${desktopBrowseOpen
                                    ? "visible opacity-100"
                                    : "invisible opacity-0"
                                }`}
                        >
                            <Link
                                className="block rounded-lg px-4 py-2 text-zinc-700 hover:bg-green-50 hover:text-green-700"
                                to="/category/active"
                            >
                                Active
                            </Link>

                            <Link
                                className="block rounded-lg px-4 py-2 text-zinc-700 hover:bg-orange-50 hover:text-orange-700"
                                to="/category/creative"
                            >
                                Creative
                            </Link>

                            <Link
                                className="block rounded-lg px-4 py-2 text-zinc-700 hover:bg-blue-50 hover:text-blue-700"
                                to="/category/strategic"
                            >
                                Strategic
                            </Link>

                            <Link
                                className="block rounded-lg px-4 py-2 text-zinc-700 hover:bg-purple-50 hover:text-purple-700"
                                to="/category/relaxing"
                            >
                                Relaxing
                            </Link>

                            <Link
                                className="block rounded-lg px-4 py-2 text-zinc-700 hover:bg-yellow-50 hover:text-yellow-700"
                                to="/category/social"
                            >
                                Social
                            </Link>

                            <Link
                                className="block rounded-lg px-4 py-2 text-zinc-700 hover:bg-teal-50 hover:text-teal-700"
                                to="/category/outdoor"
                            >
                                Outdoor
                            </Link>

                            <div className="my-2 border-t border-zinc-100" />

                            <Link
                                className="block rounded-lg px-4 py-2 font-semibold text-zinc-900 hover:bg-zinc-100"
                                to="/browse-all"
                                onClick={() => setDesktopBrowseOpen(false)}
                            >
                                Browse All →
                            </Link>
                        </div>
                    </div>


                    <Link
                        to="/about-us"
                        className="font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                    >
                        About Us
                    </Link>


                    <Link
                        to="/quiz"
                        className="rounded-full bg-logopurple px-5 py-2.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-hoverlogopurple hover:shadow-md"
                    >
                        Take the Quiz
                    </Link>

                </div>
            </div>


            {menuOpen && (
                <div
                    className="fixed inset-0 top-20 z-40 bg-black/30 md:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <div
                className={`fixed left-0 top-20 z-50 h-[calc(100vh-5rem)] w-72 overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 md:hidden ${menuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col">

               
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="border-b border-zinc-200 py-4 text-lg font-medium text-zinc-700"
                    >
                        Home
                    </Link>



                    <div className="border-b border-zinc-200">

                        <button
                            onClick={() => setBrowseOpen(!browseOpen)}
                            className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-zinc-700"
                            aria-expanded={browseOpen}
                        >
                            Browse Hobbies

                            <span
                                className={`text-xs transition-transform duration-200 ${browseOpen
                                        ? "rotate-180"
                                        : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>


                        {browseOpen && (
                            <div className="flex flex-col gap-1 pb-4 pl-4">

                                <Link
                                    to="/category/active"
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-green-50 hover:text-green-700"
                                >
                                    Active
                                </Link>

                                <Link
                                    to="/category/creative"
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-orange-50 hover:text-orange-700"
                                >
                                    Creative
                                </Link>

                                <Link
                                    to="/category/strategic"
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    Strategic
                                </Link>

                                <Link
                                    to="/category/relaxing"
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-purple-50 hover:text-purple-700"
                                >
                                    Relaxing
                                </Link>

                                <Link
                                    to="/category/social"
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-yellow-50 hover:text-yellow-700"
                                >
                                    Social
                                </Link>

                                <Link
                                    to="/category/outdoor"
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-teal-50 hover:text-teal-700"
                                >
                                    Outdoor
                                </Link>

                                <Link
                                    to="/browse-all"
                                    onClick={closeMenu}
                                    className="mt-2 rounded-lg px-3 py-2 font-semibold text-zinc-900 hover:bg-zinc-100"
                                >
                                    Browse All →
                                </Link>

                            </div>
                        )}
                    </div>


                    <Link
                        to="/about-us"
                        onClick={closeMenu}
                        className="border-b border-zinc-200 py-4 text-lg font-medium text-zinc-700"
                    >
                        About Us
                    </Link>

                </div>
            </div>
        </nav>
    );
}

