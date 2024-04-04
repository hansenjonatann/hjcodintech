import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Layanan from "../components/Layanan";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Layanan />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
