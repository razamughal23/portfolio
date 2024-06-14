import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
import Portfolio from "../components/Portfolio/portfolio";
import Contact from "../components/contact-us/contact";
const home = () => {
  return (
    <div className="Home-Page -z-10">
      <Banner />
      <MyExpertise />
      <Portfolio />
      <Recommendations />
      <ClientReviews />
      <Contact />
    </div>
  );
};

export default home;
