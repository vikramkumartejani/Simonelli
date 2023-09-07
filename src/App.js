import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Hero, Layout, TrendingProducts, WeSupport, TopSellingProduct, Contact } from "./containers";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Layout />
      <TrendingProducts />
      <WeSupport />
      <TopSellingProduct />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
