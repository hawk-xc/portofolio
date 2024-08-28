import CertificateItems from "../particles/CertificateItems";

export default function MyCertificateContent() {
  return (
    <div
      id="mycertificate"
      className="flex flex-col items-center justify-center h-screen gap-3 align-middle"
    >
      <div
        id="certificatetitle"
        className="flex flex-col items-center justify-center gap-6 md:w-6/12 max-sm:w-8/12"
      >
        <h2 className="text-4xl font-bold text-white" data-aos="zoom-in-up">
          My <span className="text-warning">Certificate</span>
        </h2>
        <span
          className="text-center text-white max-sm:text-sm"
          data-aos="zoom-in-up"
        >
          It would not be complete if we discussed skills without recognition,
          here are the competency certificates that I received.
        </span>
      </div>
      <div
        id="certificateitems"
        className="flex justify-center w-full md:mt-10 max-sm:mt-2"
      >
        <ul className="flex flex-wrap justify-center md:flex-row max-sm:flex-col md:w-6/12 max-sm:w-8/12 md:gap-20 max-sm:gap-5">
          {CertificateItems.map((item) => {
            return (
              <div
                className="flex flex-row gap-2 text-white transition-all duration-150 cursor-pointer md:text-6xl max-sm:text-3xl md:p-5 max-sm:p-3 hover:secondary-background focus:scale-95 max-sm:secondary-background max-sm:rounded-md max-sm:focus:scale-95"
                data-aos="zoom-in-up"
                key={item.name}
              >
                <i className={`${item.icon}`}></i>
                <span className="text-warning max-sm:hidden">
                  {item.items.length}
                </span>
                <span className="flex flex-col justify-center px-2 text-xs text-warning md:hidden">
                  {item.name}
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
