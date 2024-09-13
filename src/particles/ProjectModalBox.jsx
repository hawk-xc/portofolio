const ProjectModalBox = ({ modalData }) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
        </form>
        <span>{modalData?.date}</span>
        <h3 className="text-2xl font-bold text-warning">{modalData?.name}</h3>
        <span className="flex flex-row flex-wrap gap-2 mt-3 text-xs">
          {modalData?.technology.map((data) => (
            <div className="p-1 transition-all duration-150 cursor-pointer hover:scale-105 bg-base-200">
              {data}
            </div>
          ))}
        </span>
        <p className="py-4">{modalData?.summary}</p>
        <div className="flex flex-row gap-5 text-3xl">
          <a
            href={modalData?.reference}
            className={modalData?.reference ?? "hidden"}
          >
            <i className="transition-all duration-150 cursor-pointer ri-slideshow-line hover:scale-105 hover:text-white"></i>
          </a>
          <a href={modalData?.github} className={modalData?.github ?? "hidden"}>
            <i className="transition-all duration-150 cursor-pointer ri-github-fill hover:scale-105 hover:text-white"></i>
          </a>
          <a
            href={modalData?.prototype}
            className={modalData?.prototype ?? "hidden"}
          >
            <i className="transition-all duration-150 cursor-pointer ri-article-line hover:scale-105 hover:text-white"></i>
          </a>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectModalBox;
