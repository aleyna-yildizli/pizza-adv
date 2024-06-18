import React from "react";
import Button from "../../components/Button";
import "./style.css";
import icons from "../../assets/icons";
import logo from "../../assets/logos";
import images from "../../assets/images";

export default function HomePage() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          src={logo.banner}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Banner"
        />
        <div className="relative z-10 flex flex-col items-center justify-start space-y-8">
          <img src={logo.logo2} className="w-1/4 mt-10" alt="Logo" />
          <div className="flex flex-col">
            <span className="homePageMainDivTitle text-[#FDC913]">
              fırsatı kaçırma
            </span>
            <p className="text-[67px] text-white text-center font-instrument-serif leading-none">
              KOD ACIKTIRIR <br />
              PIZZA, DOYURUR
            </p>
          </div>
          <Button
            id="order-pizza"
            text="ACIKTIM"
            to="/pizza"
            className="bg-yellow-400 font-semibold text-black py-3 px-10 rounded-full hover:scale-105"
          />
        </div>
      </div>
      <section className="flex justify-center flex-wrap p-4 gap-4 md:gap-12 bg-white ">
        <div className="iconDiv">
          <img src={icons.icon1} alt="Icon 1" />
          <span className="iconSpan">YENİ! Kore</span>
        </div>
        <div className="iconDiv">
          <img src={icons.icon2} alt="Icon 2" />
          <span className="iconSpan">Pizza</span>
        </div>
        <div className="iconDiv">
          <img src={icons.icon3} alt="Icon 3" />
          <span className="iconSpan">Burger</span>
        </div>
        <div className="iconDiv">
          <img src={icons.icon4} alt="Icon 4" />
          <span className="iconSpan">Kızartmalar</span>
        </div>
        <div className="iconDiv">
          <img src={icons.icon5} alt="Icon 5" />
          <span className="iconSpan">Fast Food</span>
        </div>
        <div className="iconDiv">
          <img src={icons.icon6} alt="Icon 6" />
          <span className="iconSpan">Gazlı İçecek</span>
        </div>
      </section>
      <section className="bg-gray-50 w-full flex flex-col justify-center items-center py-20 gap-10">
        <div className="max-w-7xl w-full flex flex-col justify-center items-center md:flex-row gap-6">
          <div className="flex-1 flex flex-col justify-between">
            <div className="relative w-full h-64 md:h-auto">
              <img
                src={images.kart1}
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 text-white p-10 flex flex-col gap-2">
                <h4 className="text-5xl font-bold">
                  Özel <br /> Lezzetus
                </h4>
                <span className="text-sm font-bold">
                  Position: Absolute Acı pizza
                </span>
                <Button
                  id="order-pizza"
                  text="ŞİPARİŞ VER"
                  to="/pizza"
                  className="bg-white font-semibold text-red-500 py-2 px-3  rounded-full text-[10px] hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div className="relative w-full h-32 md:h-auto">
              <img
                src={images.kart2}
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 text-white p-5 flex flex-col gap-3">
                <span className="text-xl font-bold">
                  Hackathlon <br /> Burger Menü
                </span>
                <Button
                  id="order-pizza"
                  text="ŞİPARİŞ VER"
                  to="/pizza"
                  className="bg-white font-semibold text-red-500 py-2 px-3 rounded-full text-[10px] hover:scale-105"
                />
              </div>
            </div>
            <div className="relative w-full h-32 md:h-auto">
              <img
                src={images.kart3}
                className="rounded-md w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 text-white p-5 flex flex-col gap-2">
                <div>
                  <span className="text-red-500 font-bold text-xl">
                    Çooook{" "}
                  </span>
                  <span className="font-bold text-black text-xl"> hızlı</span>
                </div>
                <span className="font-bold text-black text-xl">
                  npm gibi kurye
                </span>
                <Button
                  id="order-pizza"
                  text="ŞİPARİŞ VER"
                  to="/pizza"
                  className="bg-white font-semibold text-red-500 py-2 px-3 rounded-full text-[10px] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7 py-20">
          <span className="homePageMainDivTitle text-red-600 text-center">
            en çok paketlenen menüler
          </span>
          <h3 className="text-black font-semibold text-2xl md:text-4xl text-center">
            Acıktıran Kodlara Doyuran Lezzetler
          </h3>
          <section className="flex justify-center flex-wrap p-4 gap-4 md:gap-12">
            <div className="iconDiv bg-white rounded-full px-6 py-3">
              <img src={icons.icon1} alt="Icon 1" className="mx-auto" />
              <span className="iconSpan">Ramen</span>
            </div>
            <div className="iconDiv bg-black rounded-full px-6 py-3">
              <img src={icons.icon2} alt="Icon 2" className="mx-auto" />
              <span className="selectIconSpan ">Pizza</span>
            </div>
            <div className="iconDiv bg-white rounded-full px-6 py-3">
              <img src={icons.icon3} alt="Icon 3" className="mx-auto" />
              <span className="iconSpan">Burger</span>
            </div>
            <div className="iconDiv bg-white rounded-full px-6 py-3">
              <img src={icons.icon4} alt="Icon 4" className="mx-auto" />
              <span className="iconSpan">French fries</span>
            </div>
            <div className="iconDiv bg-white rounded-full px-6 py-3">
              <img src={icons.icon5} alt="Icon 5" className="mx-auto" />
              <span className="iconSpan">Fast Food</span>
            </div>
            <div className="iconDiv bg-white rounded-full px-6 py-3">
              <img src={icons.icon6} alt="Icon 6" className="mx-auto" />
              <span className="iconSpan">Soft drinks</span>
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-5">
            <div className="bg-white rounded-lg p-5 md:p-10 space-y-3">
              <img src={images.food1} className="mx-auto" />
              <h2 className="text-black font-extrabold text-center">
                Terminal Pizza
              </h2>
              <div className="flex justify-between text-black">
                <span>4.9</span>
                <span>(200)</span>
                <span className="font-extrabold">60₺</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 md:p-10 space-y-3">
              <img src={images.food2} className="mx-auto" />
              <h2 className="text-black font-extrabold text-center">
                Position Absolute Acı Pizza
              </h2>
              <div className="flex justify-between text-black">
                <span>4.9</span>
                <span>(928)</span>
                <span className="font-extrabold">85₺</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 md:p-10 space-y-3">
              <img src={images.food3} className="mx-auto" />
              <h2 className="text-black font-extrabold text-center">
                UseEffect Tavuklu Burger
              </h2>
              <div className="flex justify-between text-black">
                <span>4.9</span>
                <span>(462)</span>
                <span className="font-extrabold">75₺</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
