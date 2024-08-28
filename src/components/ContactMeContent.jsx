import doodleImage from "./../assets/doodle.png";

export default function ContactMeContent() {
  return (
    <div className="flex flex-col items-center justify-center w-auto h-screen align-middle">
      <div
        id="certificatetitle"
        className="flex flex-col items-center justify-center gap-6 md:w-6/12 max-sm:w-8/12"
      >
        <h2 className="text-4xl font-bold text-white" data-aos="zoom-in-up">
          Contact <span className="text-warning">Me</span>
        </h2>
        <span
          className="text-center text-white max-sm:text-sm"
          data-aos="zoom-in-up"
        >
          Contact me for your business web project, contact the email and phone
          number below for more details
        </span>
      </div>
    </div>
  );
}
