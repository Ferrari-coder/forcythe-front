import { ProjectImage } from "../ProjectImage/index";

const projects = [
  {
    src: "/images/stac.svg",
    width: "398.281px",
  },
  {
    src: "/images/activity.svg",
    width: "215.656px",
  },
  {
    src: "/images/africaFund.svg",
    width: "398.281px",
  },
  {
    src: "/images/starks.svg",
    width: "398.281px",
  },
  {
    src: "/images/exec-pro.svg",
    width: "398.281px",
  },
  {  
    src: "/images/phone.svg",
    width: "215.656px", 
  },
];
export function ImageScroller() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b from-[#030516] via-transparent to-transparent">
      <div className="overflow-x-hidden flex flex-row relative w-full">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex-none min-w-full z-[1] flex flex-row items-center animate-scroll"
          >
            <div className="flex-none flex min-w-auto flex-row items-center">
              <div className="transform-none">
                <div className="ml-5 flex w-[2144.44px] items-stretch gap-5 overflow-hidden">
                  {projects.map((project, idx) => (
                    <ProjectImage
                      key={idx}
                      src={project.src}
                      width={project.width}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-x-hidden flex flex-row relative w-full">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex-none min-w-full z-[1] flex flex-row items-center animate-scroll-reverse"
          >
            <div className="transform-none">
              <div className="ml-5 flex w-[2144.44px] items-stretch gap-5 overflow-hidden">
                {projects.map((project, idx) => (
                  <ProjectImage
                    key={idx}
                    src={project.src}
                    width={project.width}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
