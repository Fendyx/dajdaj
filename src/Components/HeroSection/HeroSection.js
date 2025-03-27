import "./HeroSection.css";
import male from "../../img/arnold_wooden stand.png"
import female from "../../img/female_wooden_stand.png"
import ball from "../../img/ball_heart_picture_1.png";

function HeroSection() {
    return (
      <div class="parent">
      <div class="image-block"></div>
      <div class="content">
          <div class="text-block">
              <p class="pre_title_text">Personalized creative gift for your significant other and not only) Stand out! Give a part of yourself!</p>
              <p class="title_text">Personalized present</p>
          </div>
          <div class="small-blocks">
              <div class="product_block">
                  <div><img src={female} alt="female_wooden_stand"></img></div>
                  <div class="name_of_product">female bodybuilder with your name</div>
                  <div class="price">59zł</div>
                  <div class="product_button">Buy it!</div>
              </div>
              <div class="product_block">
                  <div><img src={male} alt="arnold_wooden stand"></img></div>
                  <div class="name_of_product">male bodybuilder with your name</div>
                  <div class="price">59zł</div>
                  <div class="product_button">Buy it!</div>
              </div>
              <div class="product_block">
                  <div><img src={ball} alt="ball_for_site"></img></div>
                  <div class="name_of_product">ball with your kisses and text</div>
                  <div class="price">59zł</div>
                  <div class="product_button">Buy it!</div>
              </div>
          </div>
          <div class="shopnow_button">Shop now!</div>
      </div>
  </div>
    );
  }
  
  export default HeroSection;