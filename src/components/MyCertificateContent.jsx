import CertificateItems from "../particles/CertificateItems";

export default function MyCertificateContent() {
  return (
    <div
      id="mycertificate"
      className="flex flex-col items-center justify-center h-screen gap-3 align-middle"
    >
      <div
        id="certificatetitle"
        className="flex flex-col items-center justify-center w-6/12 gap-6"
      >
        <h2 className="text-4xl font-bold text-white" data-aos="zoom-in-up">
          My <span className="text-warning">Certificate</span>
        </h2>
        <span className="text-center text-white" data-aos="zoom-in-up">
          It would not be complete if we discussed skills without recognition,
          here are the competency certificates that I received.
        </span>
      </div>
      <div id="certificateitems" className="flex justify-center w-full mt-10">
        <ul className="flex flex-row flex-wrap justify-center w-6/12 gap-20">
          {CertificateItems.map((item) => {
            return (
              <div
                className="flex flex-row gap-2 p-5 text-6xl text-white transition-all duration-150 cursor-pointer hover:secondary-background focus:scale-95"
                data-aos="zoom-in-up"
                key={item.name}
              >
                <i className={`${item.icon}`}></i>
                <span className="text-warning">{item.items.length}</span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
