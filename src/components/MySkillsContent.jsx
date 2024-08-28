import Image from "../particles/Image";
import Icons from "../particles/Icons";

export default function MySkillsContent() {
  return (
    <div
      id="myskill"
      className="flex flex-col items-center justify-center w-full h-screen align-middle"
    >
      <div
        id="iconBox"
        className="w-11/12 md:p-10 max-sm:p-5 darken-secondary-background"
      >
        <h2 className="mb-2 text-3xl text-white">
          My <span className="text-warning">Skills and Technology</span> iam
          used
        </h2>
        <span className="mt-2 max-sm:text-md">
          The following are more or less the skills and technologies that I
          learned and used
        </span>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-5 mt-10 align-middle">
          {Icons.map((icon) => (
            <li
              key={icon.alt}
              className="flex items-center justify-center align-middle bg-white rounded-md md:w-20 max-sm:w-16 aspect-square hover:shadow-lg"
            >
              <Image
                image={icon.image}
                alt={icon.alt}
                className={[
                  "md:w-20 max-sm:w-16 hover:scale-110 p-2 duration-150 transition-all",
                ]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
