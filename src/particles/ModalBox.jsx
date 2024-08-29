const ModalBox = ({ modalData }) => {
  return (
    <dialog id="my_modal" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">
          {modalData?.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </p>
        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default ModalBox;
