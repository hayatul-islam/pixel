import "swiper/css";
import "swiper/css/pagination";
import Banner from "./components/Banner";
import HighlightProducts from "./components/HighlightProducts";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <HighlightProducts />
      <Footer />
    </>
  );
}

export default App;
