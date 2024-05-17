import React from "react";
import "./Destination.css";
import kalamata from "../../assets/kalamata.png";
import nomoni from "../../assets/nomoni.png";
import malenge from "../../assets/malenge.png";

const DestinationCards = () => {
  return (
    <>
      <div className="destination-container">
        {/* Card 1 */}
        <div className="destination-card">
          <img
            src={kalamata}
            alt="Destination 1"
            className="destination-image"
          />
          <div className="destination-info">
            <h2>Kalamata Fort</h2>
            <p>
              A silent witness to past struggles, captivating with its
              magnificent classical architecture and spectacular views from the
              towering hilltops
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="destination-card">
          <img src={nomoni} alt="Destination 2" className="destination-image" />
          <div className="destination-info">
            <h2>Nomoni Waterfall </h2>
            <p>
              The stunning natural beauty, with its cascading waters from a
              height, flowing through lush green forests, creates an enchanting
              atmosphere for adventure-seeking visitors
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="destination-card">
          <img
            src={malenge}
            alt="Destination 3"
            className="destination-image"
          />
          <div className="destination-info">
            <h2>Malenge Island</h2>
            <p>
              Explore the hidden wonders beneath its waters and relax on the
              captivating shores of its white sandy beaches
            </p>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default DestinationCards;
