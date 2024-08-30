import { useState } from "react";
import projectLists from "./../particles/ProjectLists";
import ProjectModalBox from "./../particles/ProjectModalBox";
import projectModalBox from "./../particles/ProjectModalBox";

export default function MyProjectContent() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-auto h-screen align-middle">
      <div
        id="projectBox"
        className="w-11/12 secondary-background md:p-10 max-sm:p-4"
      >
        <div id="titleBox" className="flex flex-col gap-2">
          <h2 className="font-extrabold md:text-4xl max-sm:text-3xl">
            My <span className="text-warning">Project</span>
          </h2>
          <span className="text-xs">
            Here are some projects I have created using web technologies that I
            have mastered.
          </span>
        </div>
        <div
          id="projectContent"
          className="flex flex-wrap items-center justify-center gap-5 py-5 align-middle md:flex-row max-sm:flex-col max-sm:px-3"
        >
          {projectLists.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-2 p-3 text-white transition-all duration-150 cursor-pointer md:w-5/12 max-sm:w-full active:darken-secondary-background-2 hover:scale-105 darken-secondary-background"
              onClick={() => {
                setModalData(item);
                my_modal_3.showModal();
              }}
            >
              <span className="md:text-xs">{item.date}</span>
              <h2 className="text-xl font-bold text-warning">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <ProjectModalBox modalData={modalData} />
    </div>
  );
}
