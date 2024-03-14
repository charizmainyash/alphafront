import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Service } from "../Service/Service";
import { Featured } from "../Featured/Featured";
import { Content } from "../Contents/Content";
import { HeaderVideo } from "../HeaderVideo/HeaderVideo";
import { MovingLogos } from "../Brands/brands";
import "./Home.css";
import { WorkWithUs } from "../WorkWithUs/WorkWithUs";
import { Footer } from "../Footer/Footer";
import { EmpoweringChange } from "../CSR_Section/CSR_Section";

export const Home = () => (
  <div className="main">
    <Header />
    <div className="content-wrapper">
      <HeaderVideo />
      <div className="scrollable-content">
        <Content />
        <MovingLogos />
        <Featured />
        <EmpoweringChange />
        <Service />
        <WorkWithUs />
        <Footer />
      </div>
    </div>
  </div>
);



