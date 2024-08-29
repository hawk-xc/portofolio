import Image from "../particles/Image";
import hawkimage from "../assets/hawkxc.png";
import SideBarLists from "./../particles/SideBarLists";

export default function App({ reference, refLists }) {
  return (
    <div id="navbar" className="flex flex-row items-center justify-between p-4">
      <Image
        image={hawkimage}
        className={["w-16 rounded-md shadow-sm cursor-pointer max-sm:w-10"]}
      />
      <div className="contextBox">
        <ul className="flex flex-row gap-8 text-white list-none max-sm:hidden">
          {SideBarLists.filter((_, index) => index !== 0).map((item) => (
            <li
              key={item.name}
              className="cursor-pointer"
              onClick={() => {
                reference(refLists[item.name]);
              }}
            >
              {item.links}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
