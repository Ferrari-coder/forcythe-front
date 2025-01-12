export function Cta() {
  return (
    // Main container for the call-to-action section
    <div className="w-full min-h-full bg-[#030516] bg-gradient-to-t from-[#071626] via-[#030516] to-[#030516] text-white text-center px-7 lg:px-28 py-10">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
          <span className="text-[#60A6E7]">Ready to Scale?</span>
          <br />
          Join successful brands that chose us as their
          <span className="text-[#60A6E7]"> growth accelerator</span>
        </h2>
        <div>
          {/* Container for the button section */}
          <div className="relative w-[132px] mx-auto mb-5">
            <button className="relative z-10 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-[#064386] hover:text-white">
              Book a Call
            </button>
            <div className="absolute right-[6px] top-[6px] h-12 w-[132px] rounded-full border border-dashed border-gray-200 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
