import { Link } from "react-router-dom";
import appLogo from "../assets/HobbyHubLogo.png";
import appNameLogo from "../assets/HobbyHubNameLogo.png";

export function NavBar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-20 items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-1">
                    <Link to="/">
                        <img
                            className="h-16 w-16 object-contain"
                            src={appLogo}
                            alt="Hobby Hub logo"
                        />
                    </Link>

                    <Link to="/">
                        <img
                            src={appNameLogo}
                            className="h-12 object-contain"
                            alt="Hobby Hub"
                        />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-1 items-center justify-end gap-8">

                    <Link
                        to="/"
                        className="font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                    >
                        Home
                    </Link>

                    {/* Browse Hobbies */}
                    <div className="group relative">
                        <button
                            className="flex items-center gap-1 font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                        >
                            Browse Hobbies
                            <span className="text-xs transition-transform group-hover:rotate-180">
                                ▼
                            </span>
                        </button>

                        <div className="invisible absolute left-0 top-full z-10 mt-3 w-36 rounded-xl border border-zinc-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

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

                    {/* Quiz CTA */}
                    <Link
                        to="/quiz"
                        className="rounded-full bg-logogreen px-5 py-2.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-hoverlogogreen hover:shadow-md"
                    >
                        Take the Quiz
                    </Link>

                </div>
            </div>
        </nav>
    );
}
