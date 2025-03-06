
"use client"

// import Zodiac from "./components/zodiac";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import CourseCards from "./components/courseCards";
import CourseCurriculum from "./components/courseCurriculum";
import Hero from "./components/hero";
import Reviews from "./components/reviews";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <CourseCards />
      <CourseCurriculum />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

