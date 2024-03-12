import React from "react";
import { cardsData } from "./About";

function Information() {
  return (
    <div>
      <section>
        <h1>Funkcije</h1>
        <div className="container">
          <div className="cards">
            {cardsData.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="div-img">
                  <img style={{ width: "60%" }} src={card.img}></img>
                </div>
                <button className="btn">Vise</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information;
