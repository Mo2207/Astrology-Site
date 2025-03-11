
"use client"

// import Zodiac from "./components/zodiac";
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
      <Contact />
      <Footer />
    </div>
  )
}

