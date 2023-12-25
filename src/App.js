import "swiper/css";
import "swiper/css/pagination";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import HighlightProducts from "./components/HighlightProducts";
import Photography from "./components/Photography";
import Products from "./components/Products";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <HighlightProducts />
      <Photography />
      <Products />
      <Featured />
      {/* <Footer /> */}
    </>
  );
}

export default App;
