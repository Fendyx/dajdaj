import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import "./Products.css";
import Arnold from "../../img/arnold_wooden_stand_2.png";
import Female_bodybuilder from "../../img/female_wooden_stand_2.png";
import Ball from "../../img/ball_heart_picture_3.png"

function Products() {
  return (
    <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
      <Header />
           <div>
                <div class="produts_slogan">
                    <span>Give a <b>part of yourself</b>, not just a thing</span>
                </div>
                <div class="products_page_products_wrapper">

                    <div class="products_page_product">
                        <div class="products_page_product_image">
                            <img src={Arnold}></img>
                        </div>
                        
                        <div class="products_page_purchase_section">
                            <span class="products_page_product_description">Male bodybuilder with your name</span>
                            <span class="products_page_price">59zł</span>
                            <button>Buy it!</button>
                        </div>
                    </div>

                    <div class="products_page_product">
                        <div class="products_page_product_image">
                            <img src={Female_bodybuilder}></img>
                        </div>
                        
                        <div class="products_page_purchase_section">
                            <span class="products_page_product_description">Female bodybuilder with your name</span>
                            <span class="products_page_price">59zł</span>
                            <button>Buy it!</button>
                        </div>
                    </div>

                    <div class="products_page_product">
                        <div class="products_page_product_image">
                            <img src={Ball}></img>
                        </div>
                        
                        <div class="products_page_purchase_section">
                            <span class="products_page_product_description">Ball with your image and kisses</span>
                            <span class="products_page_price">69zł</span>
                            <button>Buy it!</button>
                        </div>
                    </div>

                </div>
           </div>
      <Footer/>
    </div>
  );
}

export default Products;