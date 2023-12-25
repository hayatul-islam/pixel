import "swiper/css";
import "swiper/css/pagination";
import Banner from "./components/Banner";
import HighlightProducts from "./components/HighlightProducts";
import Photography from "./components/Photography";
import Products from "./components/Products";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <HighlightProducts />
      <Photography />
      <Products />
      <Footer />
    </>
  );
}

export default App;
