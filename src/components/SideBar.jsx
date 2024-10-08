// SideBar.jsx
import SideBarLists from "./../particles/SideBarLists";

export default function SideBar({ sidebar, reference, refLists }) {
  const translate = sidebar ? "-translate-x-[0%]" : "-translate-x-[100%]";

  return (
    <div
      id="sidebar"
      className={`${translate} duration-150 transition-all fixed top-0 left-0 h-full w-64 bg-slate-800/30 backdrop-blur-[15px] shadow-lg p-8 bg-opacity-70 z-50`}
    >
      <ul className="flex flex-col gap-2 font-light text-white list-none">
        {SideBarLists.map((item) => (
          <li
            key={item.name}
            className="flex flex-row gap-2 px-2 py-2 text-lg cursor-pointer hover:bg-orange-500/90"
            onClick={() => {
              reference(refLists[item.name]);
            }}
          >
            <div id="icon">
              <i className={item.icon}></i>
            </div>
            <div id="title">{item.links}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
