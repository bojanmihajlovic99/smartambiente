import React from "react";
import "./About.css";
import { useState } from "react";

export const cardsData = [
  {
    title: "Ulazak",
    img: "https://cdn-icons-png.flaticon.com/512/4728/4728569.png",
  },
  {
    title: "Rasveta",
    img: "https://cdn-icons-png.flaticon.com/512/4300/4300971.png",
  },
  {
    title: "Interfon",
    img: "https://cdn-icons-png.flaticon.com/512/4552/4552155.png",
  },
  {
    title: "Alarm i kamere",
    img: "https://cdn-icons-png.flaticon.com/512/3979/3979810.png",
  },
  {
    title: "Bezbednost",
    img: "https://cdn-icons-png.flaticon.com/512/4749/4749426.png",
  },
  {
    title: "Navodnjavanje",
    img: "https://cdn-icons-png.flaticon.com/512/9550/9550518.png",
  },
  {
    title: "Roletne",
    img: "https://cdn-icons-png.flaticon.com/512/3545/3545521.png",
  },
  {
    title: "Sauna i bazen",
    img: "https://cdn-icons-png.flaticon.com/512/9672/9672826.png",
  },
];
const About = () => {
  const [cards] = useState(cardsData);
  return null;
};

export default About;
