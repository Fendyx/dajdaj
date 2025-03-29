import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import "./Contacts.css";
import facebbok_logo from "../../img/facebook_logo.png";
import mail_logo from "../../img/mail_logo.png";

function Contacts() {
  return (
    <div>
      <Header />
           <div class="contacts_us_wrapper">
              <span class="contact_us_text">Contact us</span>
              <div class="contact_type_wrapper">
                <div class="contact_type">
                  <img src={mail_logo}></img>
                  <span class="contact_type_name">Email</span>
                  <span class="contact_type_name_description">Describe your problem in detail in one Email</span>
                  <button class="contact_button">Contact us</button>
                </div>

                <div class="contact_type">
                  <img src={facebbok_logo}></img>
                  <span class="contact_type_name">Facebook</span>
                  <span class="contact_type_name_description">Describe your problem in detail in one measege</span>
                  <button class="contact_button">Contact us</button>
                </div>
                
              </div>
           </div>
      <Footer/>
    </div>
  );
}

export default Contacts;