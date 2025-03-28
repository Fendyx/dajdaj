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
                    src="/dajdaj/3d_objects/ball/ball.gltf"
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
                        <h1>Product</h1>
                        <p>Изысканный аромат в минималистичном дизайне, подчеркивающий стиль и индивидуальность.</p>
                        </div>
                
                        <div class="features-list">
                        <div class="feature-element">
                            <div class="feature-icon">🌿</div>
                            <div class="feature-details">
                            <h3>Натуральные ингредиенты</h3>
                            <p>Формула на основе органических компонентов, безопасна для кожи.</p>
                            </div>
                        </div>
                
                        <div class="feature-element">
                            <div class="feature-icon">💧</div>
                            <div class="feature-details">
                            <h3>Долговечный аромат</h3>
                            <p>Стойкий запах сохраняется до 12 часов, оставляя тонкий след.</p>
                            </div>
                        </div>
                
                        <div class="feature-element">
                            <div class="feature-icon">🌎</div>
                            <div class="feature-details">
                            <h3>Экологичная упаковка</h3>
                            <p>Используем перерабатываемые материалы, заботимся о планете.</p>
                            </div>
                        </div>
                
                        <div class="feature-element">
                            <div class="feature-icon">🧴</div>
                            <div class="feature-details">
                            <h3>Эргономичный флакон</h3>
                            <p>Удобно лежит в руке, идеально подходит для повседневного использования.</p>
                            </div>
                        </div>
                        </div>
                
                        <div class="purchase-section">
                        <div class="price-tag">$79.99</div>
                        <button class="purchase-button">Купить сейчас</button>
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
              <h1>Product</h1>
              <p>Изысканный аромат в минималистичном дизайне, подчеркивающий стиль и индивидуальность.</p>
            </div>
      
            <div class="features-list">
                <div class="feature-element">
                  <div class="feature-icon">🔤</div>
                  <div class="feature-details">
                    <h3>Custom name</h3>
                    <p>Make your custom name of your friend or lovely one.</p>
                  </div>
                </div>
              
                <div class="feature-element">
                  <div class="feature-icon">🎁</div>
                  <div class="feature-details">
                    <h3>Unusual present</h3>
                    <p>Every man wants it! Make a unique present!</p>
                  </div>
                </div>
              
                <div class="feature-element">
                  <div class="feature-icon">💪</div>
                  <div class="feature-details">
                    <h3>Compliment and motivation</h3>
                    <p>Accentuate your boyfriend's beautiful figure!</p>
                  </div>
                </div>
              
                <div class="feature-element">
                  <div class="feature-icon">🌱</div>
                  <div class="feature-details">
                    <h3>Eco friendly</h3>
                    <p>We are friendly! The product made by PLA.</p>
                  </div>
                </div>
            </div>
              
      
            <div class="purchase-section">
              <div class="price-tag">$79.99</div>
              <button class="purchase-button">Купить сейчас</button>
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
              <h1>Product</h1>
              <p>Изысканный аромат в минималистичном дизайне, подчеркивающий стиль и индивидуальность.</p>
            </div>
      
            <div class="features-list">
              <div class="feature-element">
                <div class="feature-icon">🌿</div>
                <div class="feature-details">
                  <h3>Натуральные ингредиенты</h3>
                  <p>Формула на основе органических компонентов, безопасна для кожи.</p>
                </div>
              </div>
      
              <div class="feature-element">
                <div class="feature-icon">💧</div>
                <div class="feature-details">
                  <h3>Долговечный аромат</h3>
                  <p>Стойкий запах сохраняется до 12 часов, оставляя тонкий след.</p>
                </div>
              </div>
      
              <div class="feature-element">
                <div class="feature-icon">🌎</div>
                <div class="feature-details">
                  <h3>Экологичная упаковка</h3>
                  <p>Используем перерабатываемые материалы, заботимся о планете.</p>
                </div>
              </div>
      
              <div class="feature-element">
                <div class="feature-icon">🧴</div>
                <div class="feature-details">
                  <h3>Эргономичный флакон</h3>
                  <p>Удобно лежит в руке, идеально подходит для повседневного использования.</p>
                </div>
              </div>
            </div>
      
            <div class="purchase-section">
              <div class="price-tag">$79.99</div>
              <button class="purchase-button">Купить сейчас</button>
            </div>
          </div>
        </div>
      </div>

        </div>
        
    );
  }
  
  export default Products_component;