
import Image from "next/image";
import CourseCard from "@/app/components/courseCard";

export default function Course() {
  return (
    <section id="course" className="py-[8rem] bg-[#1F2937]">
      <div className="h-full w-[80%] mx-auto flex md:flex-col items-center justify-center gap-[4rem]">

        <CourseCard 
          title="Who is this course for?"
          items={[
            "For people who would like to improve their life",
            "Those who are ready to start a new chapter in life",
            "Those who have a problem with a partner",
            "For a busy mother",
          ]} 
          extraItems={[
            "If you're feeling stuck or unsure about your future, this course provides guidance and clarity.",
            "Designed for individuals who are looking for personal growth and self-awareness.",
            "Perfect for those who want to improve relationships and create deeper connections in life."
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
          extraItems={[
            "Each lesson is structured to provide both theoretical knowledge and practical applications.",
            "Weekly video calls allow for personalized guidance and Q&A sessions with the instructor.",
            "The community chat lets you connect with like-minded individuals and get additional support."
          ]}

        />

        <CourseCard 
          title="What will you learn?" 
          items={[
            "The basics of astrology and zodiac signs",
            "How to read and interpret birth charts",
            "Understanding planetary transits and their effects",
            "Using astrology for personal growth and relationships",
          ]}
          extraItems={[
            "You'll gain a deep understanding of astrology and how it impacts your life.",
            "Learn to analyze your birth chart to uncover personal strengths and challenges.",
            "Discover how planetary movements influence emotions, decisions, and life events."
          ]}
        />

        <CourseCard 
          title="Why choose this course?" 
          items={[
            "Taught by an experienced astrologer",
            "Easy-to-follow lessons for beginners",
            "Practical exercises to apply astrology in daily life",
            "Exclusive access to a supportive community",
          ]}
          extraItems={[
            "Led by an expert with years of experience in astrology and life coaching.",
            "The course is structured to be beginner-friendly, ensuring you grasp every concept with ease.",
            "Includes real-life case studies and exercises to help you apply astrology in daily decision-making."
          ]}
        />

      </div>

    </section>
  );
}