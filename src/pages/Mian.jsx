import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Bavariya from "../components/Bavariya/Bavariya";
import Padarka from "../components/Padarka/Padarka";
import Bvcards from "../components/Bvcards";
import Delivery from "../components/Delivery";
import Order from "../components/Order";
import Khaos from "../components/Khaos";
import Footer from "../components/Footer";

const Mian = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Bavariya />
      <Padarka />
      <Bvcards />
      <Delivery />
      <Order />
      <Khaos />
      <Footer />
    </div>
  );
};

export default Mian;
