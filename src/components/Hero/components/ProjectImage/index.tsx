interface ProjectImageProps {
  src: string;
  width: string;
  index: number;
}
export function ProjectImage({ src, width, index }: ProjectImageProps) {
  return (
    <div
      className="relative h-[340px]"
      style={{
        width,
      }}
    >
      <div className="absolute left-0 top-0 z-[-10] h-[340px] w-full animate-pulse bg-[#60A6E7]/10" />
      <img
        alt={`project-image-${index}`}
        loading="lazy"
        width="100"
        height="100"
        decoding="async"
        src={src}
        className="block h-[340px] w-full overflow-hidden"
      />
    </div>
  );
}
