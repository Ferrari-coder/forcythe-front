import { useEffect, useState } from "react";
import { tabs } from "../../data";

export function Discover() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab === tabs.length ? 1 : prevTab + 1));
    }, 7000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full bg-[#030516] text-white text-base leading-[27px] px-7 lg:px-28 py-10">
      <div>
        <div>
          <p className="max-w-4xl text-center text-[36px] leading-[40px]  sm:text-[35px] sm:leading-[40px] lg:text-[42px] lg:leading-[56px] mx-auto mb-12">
            <span>Discover the </span>
            <span className="text-[#60A6E7]">transformative stories </span>
            <span>of startups that scaled new heights with us</span>
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="grid w-full min-w-[750px] grid-cols-5 border border-[#06438C] rounded-full">
          {tabs.map((tab: any) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full cursor-pointer transition-all duration-300 p-[17.6px] ${
                activeTab === tab.id ? "bg-[#0C2645]" : ""
              } ${
                tab.id === 1
                  ? "rounded-l-full"
                  : tab.id === 5
                  ? "rounded-r-full"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-full w-fit min-w-fit items-center justify-center gap-x-1.5 gap-y-1.5 text-[17px] font-medium text-white">
                <img
                  alt={tab.name}
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  src={tab.logo}
                  className="h-[27px] w-full"
                />
                {tab?.id === 1 ? tab.name : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-5 flex w-full md:w-[70%] lg:w-[50%] max-w-[840px] sm:flex-row flex-col bg-[#0C2645] rounded-[29px] p-7 xl:relative ${
    activeTab === 1 ? "left-0" : ""
  } ${
    activeTab === 2 ? "left-[20%]" : ""
  } ${
    activeTab === 3 ? "left-[40%]" : ""
  } ${
    activeTab === 4 ? "left-[30%]" : ""
  } ${
    activeTab === 5 ? "left-[50%]" : ""
  }`}>
        <div className="basis-[58%] pr-3">
          <p className="text-base leading-6 font-bold mb-4">
            {" "}
            {tabs.find((tab) => tab.id === activeTab)?.title}
          </p>
          <p className="text-base leading-7 mb-3">
            {tabs.find((tab) => tab.id === activeTab)?.description}
          </p>
          <p className="text-[15px] font-semibold mb-4">
            {" "}
            {tabs.find((tab) => tab.id === activeTab)?.author}
          </p>
        </div>
        <div className="relative mt-0 h-[250px] max-w-[330px] object-[50%_0%] basis-[42%]">
          <div className="absolute left-0 top-0 z-0 h-[250px] max-w-[330px] animate-pulse bg-[rgba(96,166,231,0.1)] rounded-xl"></div>
          <img
            alt="ceo"
            loading="lazy"
            decoding="async"
            src={tabs.find((tab) => tab.id === activeTab)?.image}
            className="h-[250px]  object-[50%_0%] w-full inset-0 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
