import Image from "../particles/Image";
import Icons from "../particles/Icons";

export default function MySkillsContent() {
  return (
    <div
      id="myskill"
      className="flex flex-col items-center justify-center w-full h-screen align-middle"
    >
      <div id="iconBox" className="w-11/12 p-10 darken-secondary-background">
        <h2 className="mb-2 text-3xl text-white">
          My <span className="text-warning">Skills and Technology</span> iam
          used
        </h2>
        <span className="mt-2">
          Following are the skills and technologies that I master
        </span>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-5 mt-10 align-middle">
          {Icons.map((icon) => (
            <li
              key={icon.alt}
              className="flex items-center justify-center w-20 align-middle bg-white rounded-md aspect-square"
            >
              <Image
                image={icon.image}
                alt={icon.alt}
                className={[
                  "w-20 hover:scale-105 p-2 duration-150 transition-all shadow-md",
                ]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
