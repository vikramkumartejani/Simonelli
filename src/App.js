import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import TrendingProducts from './components/TrendingProducts/TrendingProducts';
import WeSupport from './components/WeSupport/WeSupport';
import TopSellingProduct from './components/TopSellingProducts/TopSellingProduct';
import Banner from './components/SubscribeBanner/Banner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Layout/>
    <TrendingProducts/>
    <WeSupport/>
    <TopSellingProduct/>
    <Banner/>
    <Footer/>

    </>
  );
}

export default App;
