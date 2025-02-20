import { Button } from "./ui/button/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-[15rem] bg-[#dddddd] text-gray-900 flex justify-center">

      <div className="flex flex-col items-center w-[60%]">
        <h1 className="font-light text-6xl">Intensive Course <br /><span className="block text-center">"Resource"</span></h1>
        <p className="pt-8">Gain insights, overcome challenges, and create the life you desire with our intensive course.</p>
        <Button>Buy Course</Button>
      </div>

    </section>
  );
}