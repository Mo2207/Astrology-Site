
"use client"

import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import CourseCards from "./components/courseCards";
import CourseCurriculum from "./components/courseCurriculum";
import Bonus from "./components/bonus";
import Hero from "./components/hero";
import Reviews from "./components/reviews";
import Results from "./components/results";
import CourseDifference from "./components/courseDifference";
import CourseWorks from "./components/courseWorks";
import Price from "./components/price";
import Guarantee from "./components/guarantee";
import Faq from "./components/faq";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <CourseCards />
      <CourseCurriculum />
      <Bonus />
      <Reviews />
      <About />
      <Results />
      <CourseDifference />
      <CourseWorks />
      <Price />
      <Guarantee />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

