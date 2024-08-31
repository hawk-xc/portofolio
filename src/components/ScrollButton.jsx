const ScrollButton = ({ scrollToNextRef, currentRefIndex }) => {
  console.log(currentRefIndex);
  return (
    <div
      id="scrollButton"
      className="fixed flex items-center justify-center transition-all duration-150 rounded-full cursor-pointer bottom-10 right-10 w-14 aspect-square secondary-background hover:scale-105 active:scale-110 hover:brightness-95"
      onClick={scrollToNextRef}
    >
      {currentRefIndex < 5 ? (
        <i className="text-3xl text-white ri-skip-down-fill"></i>
      ) : (
        <i className="text-3xl text-white ri-arrow-up-double-line"></i>
      )}
    </div>
  );
};

export default ScrollButton;
