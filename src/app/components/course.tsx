
import Image from "next/image";
import CourseCard from "@/app/components/courseCard";

export default function Course() {
  return (
    <section id="course" className="py-[8rem] bg-[#070707]">
      <div className="h-full w-[80%] mx-auto flex md:flex-col items-center justify-center gap-[4rem]">

        <CourseCard 
          title="Who is this course for?"
          items={[
            "For people who would like to improve their life",
            "Those who are ready to start a new chapter in life",
            "Those who have a problem with a partner",
            "For a busy mother",
          ]} 
        />

        <CourseCard 
          title="What does the course include?"
          items={[
            "10 video lessons",
            "2 video calls a week",
            "Community chat",
            "All materials",
          ]} 
        />

      </div>

    </section>
  );
}