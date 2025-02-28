
import Image from "next/image";

export default function Course() {
  return (
    <section id="course" className="py-[8rem] bg-[#070707]">
      <div className="h-full w-[80%] mx-auto flex md:flex-col items-center justify-center gap-[4rem]">

        <div className="flex justify-center w-[80%] h-[100%] p-6 rounded-lg bg-[#FFFFFF] text-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg">
          <div className="flex flex-col items-center w-full">
            <h2 className="font-bold pb-6 text-center text-4xl">Who is this course for?</h2>
            <div className="flex flex-col items-center text-center font-semibold text-gray-600 text-lg space-y-3">
              <p>For people who would like to improve their life</p>
              <p>Those who are ready to start a new chapter in life</p>
              <p>Those who have a problem with a partner</p>
              <p>For a busy mother</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-[80%] h-[100%] p-6 rounded-lg bg-[#FFFFFF] text-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg">
          <div className="flex flex-col items-center w-full">
            <h2 className="font-bold pb-6 text-center text-4xl">What does the course include?</h2>
            <div className="flex flex-col items-center text-center font-semibold text-gray-600 text-lg space-y-3">
              <p>10 video lessons</p>
              <p>2 video calls a week</p>
              <p>Community chat</p>
              <p>All materials</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}