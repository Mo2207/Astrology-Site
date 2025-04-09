
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
import CourseIntro from "./components/courseIntro";
import CourseWorks from "./components/courseWorks";
import Price from "./components/price";
import Guarantee from "./components/guarantee";
import Faq from "./components/faq";
import MobileHoverButton from "./components/mobileHoverButton";

export default function ClientPage() {
  return (
    <div>
      <Header />
      <Hero />
      <CourseCards />
      <About />
      <CourseCurriculum />
      <CourseIntro />
      <Bonus />
      <Reviews />
      <Guarantee />
      <Results />
      <Faq />
      <Contact />
      <CourseWorks />
      <Price />
      <CourseDifference />
      <Footer />
      <MobileHoverButton />
    </div>
  )
}