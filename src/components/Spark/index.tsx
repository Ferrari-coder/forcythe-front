import { Play } from "lucide-react";
import { useState } from "react";
import { sparkstabs } from "../../data";
export function Spark() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-[#030516] text-white px-7 lg:px-28 py-20">
      <div className="mb-7 max-w-[720px]">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
          <span>From </span>
          <span className="capitalize text-[#60A6E7]">Spark </span>
          <span>to </span>
          <span className="capitalize text-[#60A6E7]">Spotlight: </span>
          <span>we take you every step of the way to success.</span>
        </p>
      </div>
      <div className="flex lg:items-end flex-col md:flex-row">
        <div className="flex mb-8 md:mb-0 basis-1/2">
          <div className="md:pr-10">
            <div className="mb-12 grid grid-cols-4 gap-1 border-2 border-[#B3D0F2] rounded-full p-3.5">
            {sparkstabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer overflow-hidden text-center text-base leading-6 font-medium rounded-full px-2.5 py-3.5 transition-all duration-300 hover:bg-[#B3D0F2] hover:text-black ${
                    activeTab === tab.id
                      ? "bg-[#B3D0F2] text-black"
                      : "text-white"
                  }`}
                >
                  {tab.name}
                </div>
              ))}
            </div>
            <p className="text-[32px] font-medium leading-[32px] mb-12">
            {sparkstabs[activeTab].title}
            </p>
            <p className="text-lg leading-7 text-[#AEA9B1] mb-8">
            {sparkstabs[activeTab].description}
            </p>
            <div className="relative w-[147.547px]">
              <button className="relative z-10 flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-5 rounded-full transition-all duration-300 hover:bg-[#064386] hover:text-white">
                Book a call
                <Play className="w-3 h-3" />
              </button>
              <div className="absolute right-1.5 top-1.5 z-0 h-12 w-[147.547px] border border-dashed border-[#E5E7EB] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            alt="tab-img"
            src={sparkstabs[activeTab].image}
            className="h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
          />
        </div>
      </div>
    </div>
  );
}
