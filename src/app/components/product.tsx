
import Image from "next/image";

export default function Product() {
  return (
    <section id="product" className="pt-[2rem] bg-[#DDDDDD]">
      <div className="text-gray-900 max-w-6xl h-[60vh] mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* left side */}
        <div className="flex flex-col justify-center w-full h-[50vh]">
          <Image 
            src={'/assets/img/about/horoscope-readings.webp'} 
            alt="Product Image" 
            width={400} 
            height={400} 
            className="w-[75%] h-full object-cover rounded-lg"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col justify-center w-full h-[50vh]">
          <h2 className="flex justify-center font-semibold pb-4">Product title</h2>
          <p className="flex justify-center">Product description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae alias tempore rerum explicabo, amet quaerat praesentium dolore! Libero officiis sit odio dolorum officia unde vel.</p>
        </div>

      </div>

    </section>
  );
}