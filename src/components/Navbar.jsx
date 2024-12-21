import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import loadingImg from '../assets/images/loadingImg.png'
const Navbar = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    const handleLinkClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    };

    return (
        <nav className="absolute top-20 left-0 w-full z-50 hidden lg:block">
            <div className="flex justify-between items-center px-4 py-3 md:px-8 max-w-7xl mx-auto bg-[#1E1E1E] bg-blend-multiply">
                <div className="flex items-center">
                    <a href="/" className="text-xl font-bold text-gray-800">
                        <img src="../logo.png" alt="Logo" className="w-10" />
                    </a>
                </div>

                <div className="hidden lg:flex items-center justify-center flex-1">
                    <ul className="flex items-center justify-center space-x-20 text-[20px] nav_link">
                        {["Home", "Our Profile", "Our Services", "Career", "Contact Us"].map((link) => {
                            const linkPath = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
                            const isActive = location.pathname === linkPath || (link === "Home" && location.pathname === "/");

                            return (
                                <li key={link} className="text-center">
                                    <Link
                                        to={linkPath}
                                        className={`block ${isActive ? "active" : ""}`}
                                        onClick={handleLinkClick}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {isLoading && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[60]">
                    <img
                        src={loadingImg}
                        alt="Loading"
                        className="w-14 h-14 animate-rotate"
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
