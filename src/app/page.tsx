
import Zodiac from "./components/zodiac";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Product from "./components/product";

export default function Page() {
  return (
    <div>
      <Header />
      <Product />
      {/* <Zodiac /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

