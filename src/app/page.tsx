
"use client"

// import Zodiac from "./components/zodiac";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Course from "./components/course";
import Hero from "./components/hero";
import Reviews from "./components/reviews";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Course />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

