import React from "react";
import "./Destination.css";
import lorelindu from "../../assets/lorelindu.png";
import saluopa from "../../assets/saluopa.png";
import tomini from "../../assets/tomini.png";

const DestinationCards = () => {
  return (
    <>
      <div className="destination-container">
        {/* Card 1 */}
        <div className="destination-card">
          <img
            src={lorelindu}
            alt="Destination 1"
            className="destination-image"
          />
          <div className="destination-info">
            <h2>The Lore Lindu National Park</h2>
            <p>
              Extraordinary biodiversity, presenting the majestic blend of
              tropical rainforest, rare primate habitats, and breathtaking
              natural panoramas
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="destination-card">
          <img
            src={saluopa}
            alt="Destination 2"
            className="destination-image"
          />
          <div className="destination-info">
            <h2>The Saluopa Waterfall </h2>
            <p>
              Captivates with its stunning natural charm, as its water cascades
              down steep cliffs, creating an enchanting and refreshing
              atmosphere
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="destination-card">
          <img src={tomini} alt="Destination 3" className="destination-image" />
          <div className="destination-info">
            <h2>The Tomini Bay</h2>
            <p>
              The endless beauty of its sea and its enchanting beaches make for
              the perfect blend of adventure and tranquility in Central Sulawesi
            </p>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default DestinationCards;
