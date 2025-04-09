// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import loadingImg from '../assets/images/loadingImg.png';
import '../style';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
    const location = useLocation();
    // const [isLoading, setIsLoading] = useState(false);

    // const handleLinkClick = () => {
    //     // setIsLoading(true);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 200);
    // };
    const { t } = useTranslation();

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
                        {["Home", "Our Services", "Gallery", "Our Profile", "Career", "Contact Us"].map((link) => {
                            const linkPath = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
                            const currentPath = location.pathname;
                            const isHome = link === "Home" && currentPath === "/";
                            const isOurServices = link === "Our Services" && currentPath.startsWith("/our-services");
                            const isActive = isHome || isOurServices || currentPath === linkPath;

                            return (
                                <li key={link} className="text-center">
                                    <Link
                                        to={linkPath}
                                        className={`block ${isActive ? "active" : ""}`}
                                    >
                                        {t(link)}
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
