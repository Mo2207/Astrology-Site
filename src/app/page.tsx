
"use client"

import { useTranslation } from "react-i18next";
// import Zodiac from "./components/zodiac";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Course from "./components/course";
import Hero from "./components/hero";

export default function Page() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <About />

      {/* <Hero /> */}
      <Course />
      {/* <Zodiac /> */}
      <Contact />
      <Footer />
    </div>
  )
}

