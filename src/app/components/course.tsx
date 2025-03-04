
import CourseCard from "@/app/components/courseCard";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

export default function Course() {
  const { t } = useTranslation();
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null); // Track expanded card

  // Get all card keys dynamically from the JSON translations
  const courseCards = t("course_cards", { returnObjects: true }) as Record<string, any>;

  // const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <section id="course" className="py-[8rem] bg-[#1F2937]">
      <div className="h-full w-[80%] mx-auto flex md:flex-col items-center justify-center gap-[4rem]">

      {Object.keys(courseCards).map((cardId) => (
          <CourseCard
            key={cardId}
            id={cardId}
            title={courseCards[cardId].title}
            items={courseCards[cardId].items}
            extraItems={courseCards[cardId].extraItems}
            expandedCardId={expandedCardId}
            setExpandedCardId={setExpandedCardId}
          />
        ))}

      </div>
    </section>
  );
}