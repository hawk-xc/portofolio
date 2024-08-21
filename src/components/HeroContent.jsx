import Image from "../particles/Image";
import wahyu_image from "../assets/hawk_image.png";

export default function HeroContent() {
  return (
    <div
      id="HeroContext"
      className="flex flex-row flex-wrap items-center h-screen justify-evenly"
    >
      <div id="titleBox" className="flex flex-col flex-1 gap-2 p-10">
        <span className="text-sm text-warning">{"<>Hello World</>"}</span>
        <h2 className="text-5xl font-bold text-white">I’m Wahyu Tri</h2>
        <h3 className="text-white">
          Student & Freelance Fullstack Web Developer
        </h3>
        <span className="text-sm w-80">
          I love exploring new things, my motto is "be a better version of the
          previous second"
        </span>
        <button className="w-24 mt-5 text-sm font-normal btn btn-warning">
          Hire Me
        </button>
      </div>
      <div id="imageBox" className="relative flex-1 ">
        <Image
          image={wahyu_image}
          className={[
            "w-[24rem] absolute -translate-y-[19rem] md:object-cover md:filter md:grayscale md:hover:grayscale-0 md:transition-all md:duration-300",
          ]}
        />
      </div>
    </div>
  );
}
