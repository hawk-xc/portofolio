import Image from "../particles/Image";
import hawkimage from "../assets/hawkxc.png";

export default function App() {
  return (
    <div id="navbar" className="flex flex-row items-center justify-between p-4">
      <Image
        image={hawkimage}
        className={["w-16 rounded-md shadow-sm cursor-pointer"]}
      />
      <div className="contextBox">
        <ul className="flex flex-row gap-8 text-white list-none">
          <li className="cursor-pointer">About Me</li>
          <li className="cursor-pointer">My Skills</li>
          <li className="cursor-pointer">My Certificate</li>
          <li className="cursor-pointer">My Project</li>
        </ul>
      </div>
    </div>
  );
}
