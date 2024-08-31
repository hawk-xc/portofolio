import hawkImage from "./../assets/codewithhawk.png";

export default function ContactMeContent() {
  return (
    <div className="flex items-center justify-center w-auto h-screen align-middle md:flex-row max-sm:flex-col md:px-20 md:gap-5 max-sm:gap-10">
      <div id="avatar" data-aos="zoom-in-up">
        <img
          src={hawkImage}
          alt="codewithhawk image"
          className="rounded-full shadow-lg max-sm:w-24 md:w-52"
        />
      </div>
      <div
        id="contactContent"
        className="flex flex-col gap-5 max-sm:items-center max-sm:align-middle md:pl-10 max-sm:justify-center"
      >
        <div id="contactDetail" className="text-white" data-aos="zoom-in-up">
          <ul className="flex flex-col gap-3">
            <li>
              <i className="ri-map-pin-2-line"></i> Surakarta, Indonesia
            </li>
            <li>
              <i className="ri-mail-line"></i> wahyutricahyono777@gmail.com
            </li>
            <li>
              <i className="ri-phone-line"></i> +62 821-3946-5611
            </li>
          </ul>
        </div>
        <div
          id="socialMediaDetail"
          className="text-white md:text-6xl max-sm:text-4xl md:mt-5 max-sm:mt-10 max-sm:gap-3 max-sm:flex max-sm:flex-row"
          data-aos="zoom-in-up"
        >
          <a href="https://www.linkedin.com/in/wahyu-tri-cahyono-2824052b7/">
            <i className="ri-linkedin-box-fill hover:text-blue-50"></i>
          </a>
          <a href="https://www.instagram.com/wahyutrieee___/">
            <i className="ri-instagram-fill hover:text-blue-50"></i>
          </a>
          <a href="https://github.com/hawk-xc">
            <i className="ri-github-fill hover:text-blue-50"></i>
          </a>
          <a href="https://wa.me/6282139465611">
            <i className="ri-whatsapp-fill hover:text-blue-50"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
