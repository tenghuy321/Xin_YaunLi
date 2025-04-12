// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import loadingImg from '../assets/images/loadingImg.png';
import '../style';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png';

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/our-services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Our Profile", path: "/our-profile" },
    { label: "Career", path: "/career" },
    { label: "Contact Us", path: "/contact-us" },
];


const Navbar = () => {
    // const location = useLocation();
    // const [isLoading, setIsLoading] = useState(false);

    // const handleLinkClick = () => {
    //     // setIsLoading(true);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 200);
    // };
    const { t } = useTranslation();

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <nav className="absolute top-20 left-0 w-full z-50 hidden lg:block">
            <div className="flex justify-between items-center py-3 px-3 max-w-7xl mx-auto bg-black/80 bg-blend-multiply">
                <div className="flex items-center">
                    <a href="/" className="text-xl font-bold text-gray-800">
                        <img src={logo} alt="Logo" className="w-10" />
                    </a>
                </div>

                <div className="hidden lg:flex items-center justify-center flex-1">
                    <ul className="flex items-center justify-center space-x-20 text-[18px] xl:text-[20px] nav_link">
                        {navLinks.map(({ label, path }) => {
                            const isHome = path === "/" && currentPath === "/";
                            const isOurServices =
                                path === "/our-services" && currentPath.startsWith("/our-services");
                            const isExactMatch = path !== "/" && path === currentPath;
                            const isActive = isHome || isOurServices || isExactMatch;

                            return (
                                <li key={label} className="text-center">
                                    <Link
                                        to={path}
                                        className={`block transition duration-200 hover:text-blue-500 ${isActive ? "active text-blue-600 font-semibold" : ""
                                            }`}
                                    >
                                        {t(label)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
