import { BarLoader } from "react-spinners";
import Logo from '../assets/images/loadingImg.png';
import '../index.css';
import { useTranslation } from "react-i18next";
const Loading = () => {

    const {t} = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#D9ECEE]">
            <img src={Logo} alt="Loading" className="w-20" />
            <h1 className="py-4 text-[18px] font-[700] text-gradient uppercase tracking-[2px]">{t("xin_yuan_li")}</h1>
            <BarLoader color={"#EBB81B"} />
        </div>

    );
};

export default Loading;
