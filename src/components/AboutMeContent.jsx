export default function AboutMeContent() {
  return (
    <div id="AboutMeContent" className="flex flex-row">
      <div id="contactBox" className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold text-white md:w-80">
          For any Question & Discus
        </h2>
        <p className="flex flex-row items-end gap-1 mt-4">
          <span className="text-sm font-bold text-warning">Let's talk.</span>
          <span>
            <hr className="w-10 pb-1 font-bold text-warning" />
          </span>
        </p>
        <span id="email" className="font-bold text-md text-warning">
          wahyutricahyono777@gmail.com
        </span>
        <span id="email" className="mt-10 text-sm">
          WhatsApp: +62 821-3946-5611
        </span>
      </div>
      <div id="aboutmeBox" className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold text-white">About me</h2>
        <span className="pr-2 text-sm">
          In addition to being a student, I am also a full stack web developer
          based on PHP and JS framework. I have been involved in the web
          developer field since 2020, I have quite a lot of competency
          certificates.
        </span>
        <button className="w-32 mt-10 text-sm font-normal btn btn-warning">
          Download CV
        </button>
      </div>
    </div>
  );
}
