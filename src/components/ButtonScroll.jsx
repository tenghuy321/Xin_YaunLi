import { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
const ButtonScroll = () => {
    // State to track if the button should be visible
    const [isVisible, setIsVisible] = useState(false);

    // Show button when the page is scrolled down
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Attach the scroll event listener when the component is mounted
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button onClick={scrollToTop} className={`fixed bottom-4 right-4 p-3 text-white rounded-full shadow-lg transition-opacity z-[100] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}
            style={{ transition: 'opacity 0.3s ease-in-out', background: 'linear-gradient(90deg, #ebb81b 0%, #dfad16 45.5%, #faf088 100%)' }}>
            <FaArrowUpLong />
        </button>
    );
}

export default ButtonScroll