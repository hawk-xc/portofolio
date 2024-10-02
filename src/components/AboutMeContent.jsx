export default function AboutMeContent() {
  return (
    <div
      id="AboutMeContent"
      className="flex items-center justify-center h-screen align-middle md:flex-row max-sm:flex-col-reverse max-sm:gap-5"
    >
      <div
        id="contactBox"
        className="flex flex-col md:flex-1 px-7"
        data-aos="zoom-out-right"
      >
        <h2 className="font-bold text-white md:text-6xl max-sm:text-3xl md:w-96">
          For any Question & Discus
        </h2>
        <p className="flex flex-row items-end gap-1 mt-4">
          <span className="text-sm font-bold text-warning">Let's talk.</span>
          <span>
            <hr className="w-10 pb-1" />
          </span>
        </p>
        <span id="email" className="font-bold text-md text-warning">
          wahyutricahyono777@gmail.com
        </span>
        <span id="email" className="mt-10 text-sm text-slate-400">
          Contact Me and let's create new things
        </span>
      </div>
      <div
        id="aboutmeBox"
        className="flex flex-col md:flex-1 px-7"
        data-aos="zoom-out-left"
      >
        <h2 className="font-bold text-white md:text-8xl max-sm:text-6xl">
          About me
        </h2>
        <span className="py-5 pr-2 text-sm text-white">
          In addition to being a student, I am also a full stack web developer
          based on PHP and JS framework. I have been involved in the web
          developer field since 2020, I have quite a lot of competency
          certificates.
        </span>
        <a href="https://drive.google.com/file/d/1TdXqOw47wkCAmNxrZ6vF9LTMjWUuEn0Z/view?usp=sharing">
          <button className="w-32 text-sm font-normal md:mt-12 max-sm:mb-10 max-sm:mt-2 btn btn-warning">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}
