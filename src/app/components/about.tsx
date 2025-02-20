
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-10 pb-10 bg-[#dddddd] text-gray-900">
      <div className="w-[80vw] mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src={'/assets/img/about/empty-profile.jpg'} 
            alt="Astrology Image" 
            width={400} 
            height={400} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 flex justify-center">About Maria</h2>
          <p className="text-lg mb-6">
            Maria is a passionate and experienced astrologer dedicated to helping people unlock their potential and navigate life’s challenges through the wisdom of the cosmos. With years of experience in astrology, she specializes in natal charts, predictive astrology, relationship compatibility, and career guidance. Blending ancient knowledge with modern insights, Maria empowers clients to understand their strengths, overcome obstacles, and align with their true path. Whether you’re seeking clarity, transformation, or deeper self-awareness, she offers personalized guidance to illuminate your journey.
          </p>
        </div>

      </div>
    </section>
  );
}