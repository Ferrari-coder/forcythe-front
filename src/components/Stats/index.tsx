export function Stats() {
  return (
    <div
      className="w-full pb-28 bg-[rgb(3,5,22)] text-white text-base leading-[27px]"
      style={{
        backgroundImage:
          "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      <div className="mx-auto max-w-[832px] bg-contain bg-no-repeat bg-center bg-[url('https://forcythe.com/images/arc-L.svg')]">
        <div className="mx-auto max-w-[576px] text-center px-5 pt-60 pb-20">
          <div className="mx-auto mb-20 max-w-[448px]">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium">
              <span>We build solutions that help </span>
              <span className="text-[rgb(96,166,231)]">businesses </span>
              <span>of all sizes to </span>
              <span className="text-[rgb(96,166,231)]">scale</span>
            </p>
          </div>
          <div className="flex items-center justify-evenly sm:justify-between gap-3">
            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-medium text-[rgb(96,166,231)]">
                50+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Clients
              </span>
            </div>
            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-medium text-[rgb(96,166,231)]">
                120+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Projects
              </span>
            </div>
            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-medium text-[rgb(96,166,231)]">
                10+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Team Leads
              </span>
            </div>
            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-medium text-[rgb(96,166,231)]">
                10+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Glorious Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
