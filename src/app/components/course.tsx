
import CourseCard from "@/app/components/courseCard";
import { useTranslation } from "react-i18next";

export default function Course() {
  const { t } = useTranslation();

  return (
    <section id="course" className="py-[8rem] bg-[#1F2937]">
      <div className="h-full w-[80%] mx-auto flex md:flex-col items-center justify-center gap-[4rem]">

        <CourseCard
          title={t("course_cards.card1.title")}
          items={t("course_cards.card1.items", { returnObjects: true }) as string[]}
          extraItems={t("course_cards.card1.extraItems", { returnObjects: true }) as string[]}
        />
        <CourseCard
          title={t("course_cards.card2.title")}
          items={t("course_cards.card2.items", { returnObjects: true }) as string[]}
          extraItems={t("course_cards.card2.extraItems", { returnObjects: true }) as string[]}
        />
        <CourseCard
          title={t("course_cards.card3.title")}
          items={t("course_cards.card3.items", { returnObjects: true }) as string[]}
          extraItems={t("course_cards.card3.extraItems", { returnObjects: true }) as string[]}
        />
        <CourseCard
          title={t("course_cards.card4.title")}
          items={t("course_cards.card4.items", { returnObjects: true }) as string[]}
          extraItems={t("course_cards.card4.extraItems", { returnObjects: true }) as string[]}
        />

      </div>

    </section>
  );
}