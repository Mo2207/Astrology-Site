
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
            "febje srfi ueufnf eeafh ebnaogh aedujie.",
            "febje srfi ebnaogh aedujie.",
            "febje srfi ueufnf eeafh fgjeim."
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
            "febje srfi ueufnf eeafh ebnaogh aedujie.",
            "febje srfi ebnaogh aedujie.",
            "febje srfi ueufnf eeafh fgjeim."
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
            "febje srfi ueufnf eeafh ebnaogh aedujie.",
            "febje srfi ebnaogh aedujie.",
            "febje srfi ueufnf eeafh fgjeim."
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
            "febje srfi ueufnf eeafh ebnaogh aedujie.",
            "febje srfi ebnaogh aedujie.",
            "febje srfi ueufnf eeafh fgjeim."
          ]}
        />

      </div>

    </section>
  );
}