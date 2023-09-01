import styles from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className={`bg-neutral-900 ${styles.paddingX} ${styles.flexStart} overflow-hidden`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
