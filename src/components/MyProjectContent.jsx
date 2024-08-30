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
        data-aos="zoom-in-down"
      >
        <div id="titleBox" className="flex flex-col gap-2">
          <h2
            className="font-extrabold md:text-4xl max-sm:text-2xl"
            data-aos="zoom-in-up"
          >
            My <span className="text-warning">Project</span>
          </h2>
          <span className="text-xs" data-aos="zoom-in-up">
            Here are some projects I have created using web technologies that I
            have mastered.
          </span>
        </div>
        <div
          id="projectContent"
          className="flex flex-wrap items-center justify-center align-middle md:gap-5 md:py-5 max-sm:pt-4 max-sm:gap-2 md:flex-row max-sm:flex-col max-sm:px-3"
        >
          {projectLists.map((item) => (
            <div
              data-aos="zoom-out-up"
              key={item.name}
              className="flex flex-col p-3 text-white transition-all duration-150 cursor-pointer md:gap-2 max-sm:gap-1 md:w-5/12 max-sm:w-full active:darken-secondary-background-2 hover:scale-105 darken-secondary-background"
              onClick={() => {
                setModalData(item);
                my_modal_3.showModal();
              }}
            >
              <span className="md:text-xs max-sm:text-[12px]">{item.date}</span>
              <h2 className="text-xl font-bold text-warning">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <ProjectModalBox modalData={modalData} />
    </div>
  );
}
