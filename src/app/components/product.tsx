
import Image from "next/image";

export default function Product() {
  return (
    <section id="product" className="pt-[10rem] bg-[#DDDDDD]">
      <div className="text-gray-900 w-[90vw] h-[50vh] mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* left side */}
        <div className="flex flex-row justify-center w-[50%] h-full border border-gray-900 rounded-lg p-4">
          <div className="flex flex-col">
            <Image 
              src={'/assets/img/about/horoscope-readings.webp'} 
              alt="Product Image" 
              width={400} 
              height={400} 
              className="w-full h-full object-cover p-2 rounded-md"
              style={{
                borderRadius: '5%'
              }}
            />
          </div>
          <div className="flex flex-col pt-4 w-[55%]">
            <h2 className="flex justify-center font-semibold pb-4 text-center">Who is this course for?</h2>
            <div className="flex flex-col items-center text-left space-y-2">
              <p className="w-3/4">For people who would like to improve their life</p>
              <p className="w-3/4">Those who are ready to start a new chapter in life</p>
              <p className="w-3/4">Who have a problem with a partner</p>
              <p className="w-3/4">For a busy mother</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-row justify-center w-[50%] h-full border border-gray-900 rounded-lg p-4">
          <div className="flex flex-col">
          <Image 
            src={'/assets/img/about/horoscope-readings.webp'} 
            alt="Product Image" 
            width={400} 
            height={400} 
            className="w-full h-full object-cover p-2"
            style={{
              borderRadius: '5%'
            }}
          />
          </div>
          <div className="flex flex-col pt-4 w-[55%]">
            <h2 className="flex justify-center font-semibold pb-4 text-center">What does the course include?</h2>
            <div className="flex flex-col items-center text-left space-y-2">
              <p className="w-3/4">10 video lessons</p>
              <p className="w-3/4">2 video calls a week</p>
              <p className="w-3/4">Community chat</p>
              <p className="w-3/4">All materials</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}