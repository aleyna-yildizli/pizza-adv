import logos from "../../assets/logos";
import icons from "../../assets/icons";
import insta from "../../assets/insta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-stone-800">
      <div className="container p-6 md:px-20 lg:px-32 xl:px-40 mx-auto">
        {" "}
        {/* Updated padding */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-36">
          <div className="flex flex-col gap-6">
            <img
              src={logos.logo1}
              alt="Logo"
              className="w-32 h-24 md:w-52 md:h-32"
            />
            <div className="flex flex-col gap-4 md:gap-7">
              <div className="flex gap-2 items-center">
                <img src={icons.icon7} alt="Location Icon" />
                <span className="text-white">
                  341 Londonderry Road, İstanbul Türkiye
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={icons.icon8} alt="Email Icon" />
                <span className="text-white">
                  aciktim@teknolojikyemekler.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={icons.icon9} alt="Phone Icon" />
                <span className="text-white">+90 216 123 45 67</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 w-full mt-10 md:mt-20">
            <div className="flex flex-col gap-4 md:gap-10">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                Sıccacık Menüler
              </h2>
              <div className="flex flex-col text-white gap-2 md:gap-3">
                <span>Terminal Pizza</span>
                <span>5 Kişilik Hackathlon Pizza</span>
                <span>useEffect Tavuklu Pizza</span>
                <span>Beyaz Console Frosty</span>
                <span>Testler Geçti Mutlu Burger</span>
                <span>Position Absolute Acı Burger</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-10">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                Instagram
              </h2>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <img
                  src={insta.insta1}
                  className="w-20 h-20 md:w-24 md:h-24"
                  alt="Insta 1"
                />
                <img
                  src={insta.insta2}
                  className="w-20 h-20 md:w-24 md:h-24"
                  alt="Insta 2"
                />
                <img
                  src={insta.insta3}
                  className="w-20 h-20 md:w-24 md:h-24"
                  alt="Insta 3"
                />
                <img
                  src={insta.insta4}
                  className="w-20 h-20 md:w-24 md:h-24"
                  alt="Insta 4"
                />
                <img
                  src={insta.insta5}
                  className="w-20 h-20 md:w-24 md:h-24"
                  alt="Insta 5"
                />
                <img
                  src={insta.insta6}
                  className="w-20 h-20 md:w-24 md:h-24"
                  alt="Insta 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-zinc-600 mt-10 mx-auto" />
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-6 md:px-20 lg:px-36 xl:px-56">
        <span className="text-sm text-white">© 2024 Teknolojik Yemekler.</span>
        <FontAwesomeIcon icon={faTwitter} className="text-white mt-4 md:mt-0" />
      </div>
    </div>
  );
};

export default Footer;
