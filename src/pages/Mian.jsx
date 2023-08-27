import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Bavariya from "../components/Bavariya/Bavariya";
import Padarka from "../components/Padarka/Padarka";
import Bvcards from "../components/Bvcards";
import Delivery from "../components/Delivery";
import Pokupke from "../components/Pokupke/Pokupka";
import Order from "../components/Order";
import Khaos from "../components/Khaos";
import Footer from "../components/Footer";
import Youtube from "../components/Youtube/Youtube";
import Otziv from "./../components/Otziv/Otziv";
import Kanstruktor from "../components/Kasntruktor/Kanstruktor";
import Manage from "./../components/Manage/Manage";
import Zakajite from "./../components/Zakajite/Zakajite";
import Yandexmap from "../components/Yandexmap/Yandexmap";
import ZakajiteModal from "../components/Zakajite/Zakajitemodal/ZakajiteModal";
const Mian = () => {
  return (
    <div>
      {/* <Header />
      <Hero />
      <Bavariya /> 
      <Youtube />
      <Padarka />
      <Bvcards />
      <Delivery />
      <Kanstruktor/> */}
      <Manage/>
      {/* <Otziv />
      <Zakajite />
      <Pokupke />
      <Order />
      <Khaos />
      <Yandexmap/>    
      <Footer />  */}
    </div>
  );
};

export default Mian;
