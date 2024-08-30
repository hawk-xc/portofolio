import Image from "../particles/Image";
import wahyu_image from "../assets/wahyu_creative.png";

export default function HeroContent({ reference, contactmeRef }) {
  return (
    <div
      id="HeroContext"
      className="flex flex-row flex-wrap items-center h-screen justify-evenly"
    >
      <div
        id="titleBox"
        className="z-50 flex flex-col flex-1 gap-2 max-sm:translate-y-16 md:p-10 max-sm:px-8"
        data-aos="fade-up-right"
      >
        <span className="text-sm text-warning max-sm:hidden">
          {"<>Hello World</>"}
        </span>
        <h2 className="text-white md:font-extrabold max-sm:font-extrabold md:text-8xl max-sm:text-7xl">
          I’m <span className="text-warning">Wahyu Tri</span>
        </h2>
        <h3 className="text-white md:text-xl">
          Student & Freelance Fullstack Web Developer
        </h3>
        <span className="w-full text-sm">
          I love exploring new things, my motto is "be a better version of the
          previous second"
        </span>
        <button
          className="w-24 mt-5 text-sm font-normal btn btn-warning"
          onClick={() => {
            reference(contactmeRef);
          }}
        >
          Hire Me
        </button>
      </div>
      <div
        id="imageBox"
        className="flex items-start justify-center flex-1 w-full max-sm:absolute"
        data-aos="fade-up-left"
      >
        <Image
          image={wahyu_image}
          className={[
            "md:w-[28rem] max-sm:w-64 absolute md:-translate-y-[20rem] max-sm:-translate-y-96  md:object-cover md:filter md:hover:grayscale md:grayscale-0 md:transition-all md:duration-300 z-0",
          ]}
        />
      </div>
    </div>
  );
}
