const ScrollButton = ({ scrollToNextRef, currentRefIndex }) => {
  console.log(currentRefIndex);
  return (
    <div
      id="scrollButton"
      className="fixed z-50 flex items-center justify-center transition-all duration-150 rounded-full cursor-pointer md:bottom-10 md:right-10 w-14 aspect-square backdrop-blur-md hover:scale-105 active:scale-110 hover:brightness-95 max-sm:bottom-28 max-sm:right-8"
      onClick={scrollToNextRef}
    >
      {currentRefIndex < 5 ? (
        <i className="text-3xl ri-skip-down-fill"></i>
      ) : (
        <i className="text-3xl ri-arrow-up-double-line"></i>
      )}
    </div>
  );
};

export default ScrollButton;
