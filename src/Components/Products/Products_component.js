import "./Products.css";
import '@google/model-viewer/dist/model-viewer';


function Products_component() {
    return (
        <div>

            <div class="body_of_product_info">

                <div class="main-container">
                    <div class="image-section">
                    <model-viewer
                    id="ballViewer"
                    src="/dajdaj/3d_objects/ball_people/ball_with_people.gltf"
                    shadow-intensity="1"
                    autoplay
                    camera-orbit="100deg 75deg "
                    camera-controls
                    disable-zoom
                    
                    >
                  </model-viewer>
                        
                    </div>
                
                    <div class="description-section">
                        <div class="heading-block">
                        <h1>Personalized Ball with Your Photos & Messages</h1>
                        <p>The perfect gift for football, basketball, and volleyball players. Customize it with your pictures and heartfelt touches!</p>

                        </div>
                
                        <div class="features-list">
                        <div class="feature-element">
                            <div class="feature-icon">🖼️</div>
                            <div class="feature-details">
                                <h3>Customize with Your Photos</h3>
                                <p>Personalize each side of the heart with your own pictures.</p>
                            </div>
                        </div>

                        <div class="feature-element">
                            <div class="feature-icon">🏆</div>
                            <div class="feature-details">
                                <h3>Perfect for Any Sport</h3>
                                <p>Designed for football, basketball, volleyball players, and more.</p>
                            </div>
                        </div>

                        <div class="feature-element">
                            <div class="feature-icon">💖</div>
                            <div class="feature-details">
                                <h3>Make It Special</h3>
                                <p>Add your kisses, a special date, or a unique message on the ball.</p>
                            </div>
                        </div>

                        <div class="feature-element">
                            <div class="feature-icon">♻️</div>
                            <div class="feature-details">
                                <h3>Eco-Friendly</h3>
                                <p>Made from sustainable PLA material, safe for the planet.</p>
                            </div>
                        </div>
                    </div>

                    <div class="purchase-section">
                        <div class="price-tag">69zł</div>
                        <button class="purchase-button">Buy Now</button>
                    </div>
                  </div>

                </div>
            </div>

            <div class="body_of_product_info">

        <div class="main-container">
          <div class="image-section">
            <model-viewer
          id="ballViewer"
          src="/dajdaj/3d_objects/male_bodybuilder/another_stand.gltf"
          shadow-intensity="1"
          autoplay
          camera-orbit="-75deg 75deg "
          camera-controls
          disable-zoom
          
          >
        </model-viewer>
          </div>
      
          <div class="description-section">
            <div class="heading-block">
              <h1>Male bodubuilder with your name</h1>
              <p>The perfect gift for gym bro. Customize it with person name!</p>
            </div>
      
            <div class="features-list">
              <div class="feature-element">
                  <div class="feature-icon">🔠</div>
                  <div class="feature-details">
                      <h3>Personalized Name</h3>
                      <p>Engrave the name of your loved one or a special friend for a unique touch.</p>
                  </div>
              </div>

              <div class="feature-element">
                  <div class="feature-icon">🎁</div>
                  <div class="feature-details">
                      <h3>A Gift Like No Other</h3>
                      <p>Every man will love it! Surprise them with a one-of-a-kind present.</p>
                  </div>
              </div>

              <div class="feature-element">
                  <div class="feature-icon">🔥</div>
                  <div class="feature-details">
                      <h3>Boost Confidence & Motivation</h3>
                      <p>Highlight your boyfriend’s strength and style with a meaningful keepsake.</p>
                  </div>
              </div>

              <div class="feature-element">
                  <div class="feature-icon">♻️</div>
                  <div class="feature-details">
                      <h3>Eco-Friendly Choice</h3>
                      <p>Made from sustainable PLA material, safe for both you and the planet.</p>
                  </div>
              </div>
          </div>

          <div class="purchase-section">
              <div class="price-tag">59zł</div>
              <button class="purchase-button">Buy Now</button>
          </div>

          </div>
        </div>
      </div>

      <div class="body_of_product_info">

        <div class="main-container">
          <div class="image-section">
            <model-viewer
          id="ballViewer"
          src="/dajdaj/3d_objects/female_bodybuilder/female_bodybuilder.gltf"
          shadow-intensity="1"
          autoplay
          camera-orbit="0deg 75deg"
          camera-controls
          disable-zoom
          >
        </model-viewer>
          </div>
      
          <div class="description-section">
            <div class="heading-block">
              <h1>Female bodubuilder with your name</h1>
              <p>The perfect gift for gym sis. Customize it with person name!</p>
            </div>
      
            <div class="features-list">
              <div class="feature-element">
                  <div class="feature-icon">🔠</div>
                  <div class="feature-details">
                      <h3>Personalized Name</h3>
                      <p>Engrave the name of your loved one or a special friend for a unique touch.</p>
                  </div>
              </div>

              <div class="feature-element">
                  <div class="feature-icon">🎁</div>
                  <div class="feature-details">
                      <h3>A Gift Like No Other</h3>
                      <p>Every girl will love it! Surprise them with a one-of-a-kind present.</p>
                  </div>
              </div>

              <div class="feature-element">
                  <div class="feature-icon">🔥</div>
                  <div class="feature-details">
                      <h3>Boost Confidence & Motivation</h3>
                      <p>Highlight your girlfriend’s strength and style with a meaningful keepsake.</p>
                  </div>
              </div>

              <div class="feature-element">
                  <div class="feature-icon">♻️</div>
                  <div class="feature-details">
                      <h3>Eco-Friendly Choice</h3>
                      <p>Made from sustainable PLA material, safe for both you and the planet.</p>
                  </div>
              </div>
          </div>

          <div class="purchase-section">
              <div class="price-tag">59zł</div>
              <button class="purchase-button">Buy Now</button>
          </div>

          </div>
        </div>
      </div>

        </div>
        
    );
  }
  
  export default Products_component;