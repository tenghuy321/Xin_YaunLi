import { BarLoader } from "react-spinners";
import Logo from '../assets/images/loadingImg.png';
import '../index.css';
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#D9ECEE]">
            <img src={Logo} alt="Loading" className="w-20" />
            <h1 className="py-4 text-[18px] font-[700] text-gradient uppercase tracking-[2px]">Xin Yaunli</h1>
            <BarLoader color={"#EBB81B"} />
        </div>

    );
};

export default Loading;
