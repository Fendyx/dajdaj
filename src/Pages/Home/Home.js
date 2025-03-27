import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HeroSection from "../../Components/HeroSection/HeroSection.js";
import Products_component from "../../Components/Products/Products_component.js";


function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <HeroSection />
      <Products_component />     
      <Footer/>
    </div>
  );
}

export default Home;