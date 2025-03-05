
// "use client";

// import { section } from "framer-motion/client";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// interface CardProps {
//   id: string;
//   title: string;
//   items: string[];
//   extraItems: string[];
// }

// export default function CourseCard({id, title, items, extraItems}: CardProps) {
//   const { t } = useTranslation();
  

//   return (
//     <section>

//       {/* card 1 */}
//       <div className="h-[30rem] flex flex-row w-full p-6 rounded-lg border-1 border-black bg-gray-100 hover:bg-gray-200 text-gray-900 overflow-hidden cursor-pointer gap-6">
//         {/* Left side */}
//         <div className="w-1/2">
//           <Image
//             src={"/assets/img/course/person-using-laptop.jpg"}
//             width={400}
//             height={300}
//             alt="random image"
//             className="border-0 rounded-lg object-cover h-full w-full"
//           />
//         </div>

//         {/* Right side */}
//         <div className="w-1/2 flex flex-col justify-center">
//           <h2 className="font-bold pb-6 text-center text-2xl">{t("course_cards.card1.title")}</h2>
//           <div className="text-center font-medium text-lg text-gray-600 space-y-3">
//             {items.map((item) => (
//               <p>{item}</p>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* card 2 */}

//     </section>
//   )
// }