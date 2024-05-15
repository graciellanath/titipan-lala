import React from "react";
import "./Destination.css";
import pantai from "../../assets/pantai.png";
import danau from "../../assets/danau.png";
import banggai from "../../assets/banggai.png";
import lorelindu from "../../assets/lorelindu.png";
import saluopa from "../../assets/saluopa.png";
import tomini from "../../assets/tomini.png";
import kalamata from "../../assets/kalamata.png";
import nomoni from "../../assets/nomoni.png";
import malenge from "../../assets/malenge.png";

const DestinationCards = () => {
  return (
    <>
      <div className="destination-container w-full flex justify-center flex-wrap mx-48">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              {/* Card 1 */}
              <div className="destination-card">
                <img
                  src={banggai}
                  alt="Destination 1"
                  className="destination-image"
                />
                <div className="destination-info">
                  <h2>Lake Paisu Pok Luk Panenteng</h2>
                  <p>
                    Sparkling amidst the Banggai Islands of Central Sulawesi, it
                    offers a captivating natural charm with calm waters and
                    enticing mysteries
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              {/* Card 2 */}
              <div className="destination-card">
                <img
                  src={pantai}
                  alt="Destination 2"
                  className="destination-image"
                />
                <div className="destination-info">
                  <h2>Tanjung Karang Beach</h2>
                  <p>
                    A tropical paradise in Central Sulawesi that offers pristine
                    white sands, crystal blue sea waters, and stunning natural
                    landscapes
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              {/* Card 3 */}
              <div className="destination-card">
                <img
                  src={danau}
                  alt="Destination 3"
                  className="destination-image"
                />
                <div className="destination-info">
                  <h2>Lake Poso</h2>
                  <p>
                    A blue gem in the heart of Central Sulawesi, captivating
                    with its enchanting natural beauty and profound cultural
                    richness
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
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
            </div>
            <div class="swiper-slide">
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
                    Captivates with its stunning natural charm, as its water
                    cascades down steep cliffs, creating an enchanting and
                    refreshing atmosphere
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              {/* Card 3 */}
              <div className="destination-card">
                <img
                  src={tomini}
                  alt="Destination 3"
                  className="destination-image"
                />
                <div className="destination-info">
                  <h2>The Tomini Bay</h2>
                  <p>
                    The endless beauty of its sea and its enchanting beaches
                    make for the perfect blend of adventure and tranquility in
                    Central Sulawesi
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
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
                    magnificent classical architecture and spectacular views
                    from the towering hilltops
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              {/* Card 2 */}
              <div className="destination-card">
                <img
                  src={nomoni}
                  alt="Destination 2"
                  className="destination-image"
                />
                <div className="destination-info">
                  <h2>Nomoni Waterfall </h2>
                  <p>
                    The stunning natural beauty, with its cascading waters from
                    a height, flowing through lush green forests, creates an
                    enchanting atmosphere for adventure-seeking visitors
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
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
                    Explore the hidden wonders beneath its waters and relax on
                    the captivating shores of its white sandy beaches
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-navigation"></div>
        </div>
      </div>

      <br />
    </>
  );
};

export default DestinationCards;
