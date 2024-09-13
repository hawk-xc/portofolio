const ModalBox = ({ modalData }) => {
  return (
    <dialog id="my_modal" className="modal">
      <form method="dialog" className="modal-box">
        <p className="flex flex-row gap-2 font-bold max-sm:text-lg md:text-3xl">
          <i className={modalData?.icon}></i>
          <span className="text-warning">{modalData?.name}</span>
        </p>
        <ul className="flex flex-col gap-2 py-4 overflow-y-scroll">
          {modalData?.items.map((item) => (
            <li key={item.name}>
              <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="text-xl font-medium collapse-title">
                  {item.name}
                </div>
                <div className="collapse-content">
                  <p>
                    Publisher :{" "}
                    <span className="">{item?.publisher ?? "-"}</span>
                  </p>
                  <p>
                    Credential :{" "}
                    <span className="">
                      {item?.credential ? item.credential : "-"}
                    </span>
                  </p>
                  <p>
                    Year :{" "}
                    <span className=""> {item?.year ? item.year : "-"}</span>
                  </p>
                  {item?.ref ? (
                    <p className="mt-3">
                      <a href={item?.ref} className="text-white">
                        <i class="ri-link"></i> Ref
                      </a>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default ModalBox;
