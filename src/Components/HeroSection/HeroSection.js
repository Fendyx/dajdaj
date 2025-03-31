import "./HeroSection.css";
import male from "../../img/arnold_wooden stand_2.png"
import female from "../../img/female_wooden_stand_2.png"
import ball from "../../img/ball_heart_picture_3.png";

function HeroSection() {
    return (
      <div class="parent">
      <div class="image-block"></div>
      <div class="content">
          <div class="text-block">
              <p class="pre_title_text">A one-of-a-kind gift for your loved one and beyond!. Be unforgettable — <i>give a piece of your heart.</i></p>
              <p class="title_text">Personalized present</p>
          </div>
          <div class="small-blocks">
              <div class="product_block">
                  <div><img src={female} alt="female_wooden_stand"></img></div>
                  <div class="name_of_product">Female bodybuilder with your name</div>
                  <div class="price">59zł</div>
                  <div class="product_button">Buy it!</div>
              </div>
              <div class="product_block">
                  <div><img src={male} alt="arnold_wooden stand"></img></div>
                  <div class="name_of_product">Male bodybuilder with your name</div>
                  <div class="price">59zł</div>
                  <div class="product_button">Buy it!</div>
              </div>
              <div class="product_block">
                  <div><img src={ball} alt="ball_for_site"></img></div>
                  <div class="name_of_product">Ball with your pictures & kisses</div>
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