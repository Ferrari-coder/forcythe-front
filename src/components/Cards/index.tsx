import { Layers } from "lucide-react";
function Card({
  title,
  description,
  gradientPosition,
}: {
  title: string;
  description: string;
  gradientPosition: "top-left" | "right" | "top-right";
}) {
  const gradientStyles = {
    "top-left":
      "bg-[radial-gradient(18.3566%_46.049%_at_22.0483%_71.4395%,_#fff_0%,_rgba(255,255,255,0)_100%)]",
    right:
      "bg-[radial-gradient(16.2527%_41.3035%_at_99.3846%_49.4158%,_#fff_0%,_rgba(255,255,255,0)_100%)]",
    "top-right":
      "bg-[radial-gradient(18.9716%_47.0911%_at_28.9269%_22.4215%,_#fff_0%,_rgba(255,255,255,0)_100%)]",
  };
  return (
    <div className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
      <div className="z-10 w-full rounded-2xl bg-transparent text-white">
        <div className="w-full rounded-2xl bg-[rgb(3,5,22)] p-10 transition-all duration-300">
          <div className="mb-5 w-[46px] rounded-md bg-[rgba(96,166,231,0.6)] p-2">
            <Layers className="h-[30px] w-[30px]" />
          </div>
          <h4 className="mb-5 text-2xl font-medium leading-8">{title}</h4>
          <div>
            <p className="m-0 text-[17.5px] text-[rgb(174,169,177)]">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 z-0 h-[281px] w-full flex-none overflow-hidden rounded-2xl blur-sm ${gradientStyles[gradientPosition]}`}
      ></div>
      <div className="absolute inset-[2px] flex-none rounded-2xl bg-black"></div>
    </div>
  );
}
export function Cards() {
  return (
    <div className="w-full bg-[rgb(3,5,22)] bg-[linear-gradient(0deg,rgb(12,38,69)_20%,rgb(3,5,22)_70%)] px-7 lg:px-28 py-14 text-base leading-[27px] text-white">
      <div>
        <p className="mb-10 text-[36px] leading-[40px] sm:text-[35px] sm:leading-[40px] lg:text-[42px] lg:leading-[56px] mx-auto text-[#b3d0f2]">
          Your best call for B2B/B2C product innovation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
        <Card
          title="Experience"
          description="Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."
          gradientPosition="top-left"
        />
        <Card
          title="Quick Support"
          description="We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth."
          gradientPosition="right"
        />
        <Card
          title="Cost Savings"
          description="Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."
          gradientPosition="top-right"
        />
      </div>
    </div>
  );
}
