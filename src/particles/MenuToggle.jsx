export default function MenuToggle({ handleSideBarAction, sidebar }) {
  return (
    <div
      id="MenuToggle"
      className="fixed z-50 flex items-center justify-center p-2 text-lg align-middle transition-all duration-150 rounded-md cursor-pointer md:hidden hover:text-xl w-14 aspect-square secondary-background bottom-4 right-4 hover:shadow-md active:scale-90"
      onClick={() => handleSideBarAction(sidebar)}
    >
      <i className="ri-menu-4-line"></i>
    </div>
  );
}
