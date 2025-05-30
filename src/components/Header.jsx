import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../i18n";
import { useTranslation } from "react-i18next";
import enFlag from '../assets/images/en_flag.png';
import chFlag from '../assets/images/ch_flag.png';
import logo from '../assets/images/logo.png';

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/our-services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Our Profile", path: "/our-profile" },
    { label: "Career", path: "/career" },
    { label: "Contact Us", path: "/contact-us" },
];

const Header = () => {

    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState(i18n.language);

    const toggleDropdown = () => setOpen(!open);
    const selectLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Toggle the drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Close the drawer
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const flags = {
        en: enFlag,
        ch: chFlag,
    };

    const { t } = useTranslation();
    const currentPath = location.pathname;


    return (
        <div>
            <div className="w-full mx-auto py-3 px-3 xl:px-10 relative">
                <div className="flex justify-between items-center">
                    {/* <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="border border-gray-400 text-[#000000] text-[12px] rounded-sm focus:ring-[#EBB81B] focus:border-[#EBB81B] block w-full py-1 px-2"
                        >
                            {language === "en" ? "English" : "Chinese"}
                        </button>
                        {open && (
                            <div className="absolute mt-1 bg-white border border-gray-400 rounded-sm w-full">
                                <button
                                    onClick={() => selectLanguage("en")}
                                    className="block w-full text-left py-1 px-2 text-[12px] text-[#000000] hover:bg-gray-100"
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => selectLanguage("ch")}
                                    className="block w-full text-left py-1 px-2 text-[12px] text-[#000000] hover:bg-gray-100"
                                >
                                    Chinese
                                </button>
                            </div>
                        )}
                    </div> */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="border border-[#EBB81B] text-[#000000] text-[12px] rounded-sm focus:ring-[#EBB81B] focus:border-[#EBB81B] flex items-center gap-2 w-full py-1 px-4"
                        >
                            <img src={flags[language]} alt={language} className="w-7 h-5" />
                            {language === "en" ? "English" : "Chinese"}
                            <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"></path>
                            </svg>
                        </button>
                        {open && (
                            <div
                                className="absolute mt-[10px] w-full z-[999] transform transition-all duration-200 ease-out origin-top scale-95 opacity-0 animate-dropdown"
                            >
                                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#EBB81B] transform rotate-45 shadow-sm"></div>
                                <div className="bg-white border border-[#EBB81B] rounded-sm w-full shadow-md opacity-100 scale-100">
                                    <button
                                        onClick={() => selectLanguage("en")}
                                        className="flex items-center gap-2 w-full text-left py-2 px-2 text-[12px] text-[#000000] hover:bg-[#EBB81B] hover:text-[#fff]"
                                    >
                                        <img src={flags["en"]} alt="English" className="w-7 h-5" />
                                        English
                                    </button>
                                    <button
                                        onClick={() => selectLanguage("ch")}
                                        className="flex items-center gap-2 w-full text-left py-2 px-2 text-[12px] text-[#000000] hover:bg-[#EBB81B] hover:text-[#fff]"
                                    >
                                        <img src={flags["ch"]} alt="Chinese" className="w-7 h-5" />
                                        Chinese
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <button className="lg:hidden text-white"
                            onClick={toggleDrawer}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g fill="rgb(0,0,0)"><path d="m5 2c-1.65685 0-3 1.34315-3 3v3c0 1.65685 1.34315 3 3 3h3c1.65685 0 3-1.34315 3-3v-3c0-1.65685-1.34315-3-3-3z" fill="url(#SvgjsLinearGradient1015)" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1" /><path d="m5 13c-1.65685 0-3 1.3431-3 3v3c0 1.6569 1.34315 3 3 3h3c1.65685 0 3-1.3431 3-3v-3c0-1.6569-1.34315-3-3-3z" fill="url(#SvgjsLinearGradient1015)" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1" /><path clipRule="evenodd" d="m16 2c-1.6569 0-3 1.34315-3 3v3c0 1.65685 1.3431 3 3 3h3c1.6569 0 3-1.34315 3-3v-3c0-1.65685-1.3431-3-3-3zm-1 3c0-.55228.4477-1 1-1h3c.5523 0 1 .44772 1 1v3c0 .55228-.4477 1-1 1h-3c-.5523 0-1-.44772-1-1z" fillRule="evenodd" fill="url(#SvgjsLinearGradient1015)" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1" /><path d="m16 13c-1.6569 0-3 1.3431-3 3v3c0 1.6569 1.3431 3 3 3h3c1.6569 0 3-1.3431 3-3v-3c0-1.6569-1.3431-3-3-3z" fill="url(#SvgjsLinearGradient1015)" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1" /></g></g><defs><linearGradient id="SvgjsLinearGradient1015"><stop stopOpacity="1" stopColor="#ebb81b" offset="0" /><stop stopOpacity="1" stopColor="#dfad16" offset="1" /></linearGradient></defs></svg>
                        </button>
                    </div>

                    {/* md show */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-[12px]">
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.46491 8.90287C5.51442 9.03688 5.49975 9.18888 5.42595 9.30839C5.3517 9.42839 5.2284 9.4999 5.09594 9.4999H4.11919H3.14197C3.00951 9.4999 2.88621 9.42789 2.81196 9.30839C2.73817 9.18888 2.7235 9.03688 2.773 8.90287C2.94122 8.44885 3.26481 8.01233 3.73509 7.60682L3.87259 7.48831C4.01743 7.36331 4.22323 7.36381 4.36761 7.48931L4.50237 7.60682C4.9731 8.01483 5.29716 8.45085 5.46491 8.90287ZM7.7246 10.0119C7.41246 9.77641 6.98436 9.86041 6.76801 10.2019C6.6493 10.3889 6.45496 10.4999 6.24778 10.4999H2.00205C1.81825 10.4999 1.64362 10.4119 1.52261 10.2594C1.45523 10.1734 1.34614 9.99092 1.38144 9.73541C1.5359 8.61336 2.18172 7.55482 3.30102 6.58827C3.46557 6.44577 3.56183 6.22926 3.56183 6.00025C3.56183 5.77124 3.46557 5.55423 3.30102 5.41223C2.18172 4.44569 1.53544 3.38664 1.38144 2.2646C1.34614 2.00908 1.45477 1.82708 1.52261 1.74107C1.64362 1.58807 1.81825 1.50056 2.00205 1.50056H6.24824C6.43158 1.50056 6.60622 1.58757 6.72676 1.74007C6.97427 2.05309 7.40788 2.08859 7.69618 1.81808C7.98403 1.54757 8.01566 1.07405 7.76769 0.760032C7.38588 0.277012 6.83173 6.7333e-07 6.24824 6.7333e-07H2.00205C1.41765 -0.000499348 0.863038 0.277512 0.48077 0.761532C0.104003 1.23905 -0.0637544 1.86808 0.0219579 2.4871C0.197049 3.75816 0.802993 4.93671 1.82604 5.99975C0.802993 7.06279 0.197049 8.24134 0.0219579 9.5124C-0.0637544 10.1314 0.104003 10.7604 0.48077 11.238C0.863038 11.7225 1.41765 12 2.00205 12H6.24824C6.9069 12 7.52384 11.647 7.89923 11.0555C8.11558 10.7149 8.0372 10.2474 7.7246 10.0119ZM11 5.99975C11 7.65682 9.76886 8.99988 8.24988 8.99988C6.73089 8.99988 5.49975 7.65682 5.49975 5.99975C5.49975 4.34268 6.73089 2.99963 8.24988 2.99963C9.76886 2.99963 11 4.34268 11 5.99975ZM9.39576 6.54277L8.70823 5.79274V4.49969C8.70823 4.22368 8.50289 3.99967 8.24988 3.99967C7.99686 3.99967 7.79152 4.22368 7.79152 4.49969V5.79274C7.79152 6.05775 7.88823 6.31226 8.06012 6.49977L8.74765 7.2498C8.92686 7.44481 9.217 7.44481 9.39576 7.2498C9.57498 7.05429 9.57498 6.73778 9.39576 6.54277Z" fill="url(#paint0_linear_3_168)" />
                                <defs>
                                    <linearGradient id="paint0_linear_3_168" x1="0" y1="6" x2="11" y2="6" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EBB81B" />
                                        <stop offset="0.455" stopColor="#DFAD16" />
                                        <stop offset="1" stopColor="#FAF088" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p> {t("header")}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-[12px]">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0208 0H2.97917C2.18931 0.000866274 1.43204 0.317215 0.873528 0.879636C0.315012 1.44206 0.000860259 2.20462 0 3L0 9C0.000860259 9.79538 0.315012 10.5579 0.873528 11.1204C1.43204 11.6828 2.18931 11.9991 2.97917 12H10.0208C10.8107 11.9991 11.568 11.6828 12.1265 11.1204C12.685 10.5579 12.9991 9.79538 13 9V3C12.9991 2.20462 12.685 1.44206 12.1265 0.879636C11.568 0.317215 10.8107 0.000866274 10.0208 0ZM10.0208 1.63636C10.3493 1.63746 10.666 1.75994 10.9108 1.98055L7.38996 5.526C7.15082 5.756 6.83285 5.88434 6.50217 5.88434C6.17148 5.88434 5.85351 5.756 5.61438 5.526L2.09354 1.98055C2.33721 1.76093 2.65216 1.63853 2.97917 1.63636H10.0208ZM10.0208 10.3636H2.97917C2.62002 10.3636 2.27558 10.22 2.02163 9.96424C1.76767 9.70851 1.625 9.36166 1.625 9V3.82745L4.46279 6.68509C4.73025 6.95453 5.04779 7.16827 5.3973 7.3141C5.7468 7.45992 6.12141 7.53498 6.49973 7.53498C6.87805 7.53498 7.25266 7.45992 7.60216 7.3141C7.95167 7.16827 8.26921 6.95453 8.53667 6.68509L11.375 3.82745V9C11.375 9.36166 11.2323 9.70851 10.9784 9.96424C10.7244 10.22 10.38 10.3636 10.0208 10.3636Z" fill="url(#paint0_linear_3_167)" />
                                <defs>
                                    <linearGradient id="paint0_linear_3_167" x1="0" y1="6" x2="13" y2="6" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EBB81B" />
                                        <stop offset="0.455" stopColor="#DFAD16" />
                                        <stop offset="1" stopColor="#FAF088" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@xinyuanli.biz">info@xinyuanli.biz</a>
                        </div>
                        <div className="flex items-center space-x-2 text-[12px]">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0029 1.04325L11.4123 0.52881C10.6699 -0.185996 9.48312 -0.18058 8.72989 0.572132L7.60817 1.78513C7.25052 2.14254 7.05002 2.61907 7.05002 3.1281C7.05002 3.63713 7.2451 4.10825 7.60275 4.46566L7.81951 4.68226C7.13131 6.13354 6.10171 7.16242 4.69821 7.81224L4.47603 7.59564C4.11838 7.23823 3.64152 7.04329 3.13756 7.04329C2.6336 7.04329 2.15673 7.23823 1.81534 7.57939L0.558149 8.74366C0.2005 9.10106 0 9.5776 0 10.0866C0 10.5957 0.189662 11.0505 0.531055 11.4025C0.531055 11.4025 1.03501 11.9819 1.04585 11.9928C1.69612 12.6426 2.57399 13 3.51688 13C7.59191 13 13 7.59564 13 3.52341C13 2.58117 12.6424 1.70391 11.9921 1.05408L12.0029 1.04325ZM3.52772 11.3646C3.02918 11.3646 2.56315 11.1805 2.22176 10.8502C2.22176 10.8502 1.72322 10.2762 1.70696 10.2653C1.63652 10.1949 1.62568 10.1137 1.62568 10.0758C1.62568 10.0379 1.63652 9.95125 1.68529 9.90792L2.94248 8.74366C3.01292 8.67326 3.09421 8.66243 3.13214 8.66243C3.17007 8.66243 3.25677 8.67326 3.3218 8.74366L3.93414 9.35016C4.16173 9.57218 4.49771 9.64258 4.79575 9.52886C7.01751 8.68409 8.61067 7.09202 9.52647 4.80681C9.64569 4.50898 9.58066 4.16241 9.35306 3.93497L8.74614 3.31763C8.6757 3.24724 8.66486 3.16601 8.66486 3.1281C8.66486 3.0902 8.6757 3.00355 8.76782 2.91691L9.88954 1.70391C9.99792 1.60102 10.1659 1.60102 10.2743 1.70391C10.2851 1.71474 10.8595 2.21835 10.8595 2.21835C11.1901 2.55951 11.3743 3.0198 11.3743 3.52341C11.3743 6.98914 6.50271 11.3754 3.51688 11.3754L3.52772 11.3646Z" fill="url(#paint0_linear_3_166)" />
                                <defs>
                                    <linearGradient id="paint0_linear_3_166" x1="0" y1="6.5" x2="13" y2="6.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EBB81B" />
                                        <stop offset="0.455" stopColor="#DFAD16" />
                                        <stop offset="1" stopColor="#FAF088" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <p> <span><a href="tel:010 88 2019">010 88 2019</a></span></p>
                        </div>
                    </div>


                    {/* Mobile Menu */}
                    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transition: 'opacity 0.3s ease-in-out' }}>
                        <div className={`w-80 h-full bg-white shadow-lg absolute left-0 top-0 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                            <div className="">
                                <div className="flex justify-between items-center border-gradient px-4 py-3">
                                    <span>
                                        <img src={logo} alt="" className="w-10" />
                                    </span>
                                    <button onClick={closeDrawer} className="text-gray-500">
                                        <svg className="w-5 h-5" id="Glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" version="1.1"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m22.9541 16.00049s7.59664-7.59713 7.60254-7.60302c1.97479-1.97492 1.87283-5.29082-.20507-7.14893-1.94238-1.7373-4.96875-1.5874-6.89063.33643l-7.46094 7.46142-7.46094-7.46143c-1.92381-1.92381-4.94916-2.07373-6.89057-.33648-2.07575 1.85746-2.17371 5.18094-.20513 7.14849l7.60254 7.60254s-7.59125 7.59173-7.60253 7.60301c-1.92525 1.92538-1.84193 5.2761.15819 7.10646 1.91113 1.75 5.04199 1.60156 6.97656-.33301l7.42188-7.42187s7.42188 7.42188 7.42189 7.42189c1.90722 1.90902 5.14842 2.12061 7.12391.19242 1.92453-1.87845 1.89914-5.07757.01084-6.96587z" fill="url(#SvgjsLinearGradient1012)" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1" /></g><defs><linearGradient id="SvgjsLinearGradient1012"><stop stopOpacity="1" stopColor="#dfad16" offset="0" /><stop stopOpacity="1" stopColor="#dfad16" offset="0.99" /></linearGradient></defs></svg>
                                    </button>
                                </div>
                                <ul className="flex flex-col">
                                    {navLinks.map(({ label, path }) => {
                                        const isHome = path === "/" && currentPath === "/";
                                        const isOurServices =
                                            path === "/our-services" && currentPath.startsWith("/our-services");
                                        const isExactMatch = path !== "/" && path === currentPath;
                                        const isActive = isHome || isOurServices || isExactMatch;

                                        return (
                                            <li key={label} className="px-4 py-3">
                                                <Link
                                                    to={path}
                                                    className={`block text-[16px] ${isActive ? "active text-white bg-[#1E1E1EF2] py-2 px-3 rounded-md font-[700] tracking-wider" : "text-gray-700"}
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
                    </div>
                </div>
            </div>
            <hr style={{ height: '5px', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
        </div>
    )
}

export default Header