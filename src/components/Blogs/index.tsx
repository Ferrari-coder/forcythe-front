import { Play } from "lucide-react";
import { blogPosts } from "../../data";

export function Blogs() {
  return (
    <div className="w-full h-full bg-[#030516] text-white px-7 lg:px-28 py-10 pb-24 text-base leading-[27px]">
      {/* Header section with title and call-to-action button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
            Read our articles, news and product blog
          </p>
        </div>
        <div className="relative w-[135px]">
          <a href="/blog" className="block">
            <span className="relative z-10 flex items-center justify-center gap-2 bg-white text-black font-semibold px-2 py-3 rounded-full transition-all duration-300 hover:bg-[#064386] hover:text-white">
              Visit Blog
              <Play className="w-3 h-3" />
            </span>
          </a>
          <div className="absolute right-[6px] top-[6px] z-0 h-12 w-[135px] border border-dashed border-gray-200 rounded-full"></div>
        </div>
      </div>
      {/* Blog posts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="relative w-full cursor-pointer overflow-hidden pb-5 transition-all duration-500 rounded-[21px] hover:bg-white/5"
          >
            <div className="relative mb-6 h-56">
              <div className="absolute left-0 top-0 z-0 h-56 w-full bg-[rgba(96,166,231,0.1)] rounded-[21px] animate-pulse"></div>
              <img
                alt={post.title}
                src={post.image}
                className="absolute inset-0 block h-56 w-full object-cover rounded-[21px] transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative pl-5 transition-all duration-300 h-28">
              <span className="absolute left-0 top-14 h-[101px] w-px bg-white transform -translate-y-[50.4px]"></span>
              <p className="text-lg leading-7 font-semibold mb-1">
                {post.category}
              </p>
              <div className="mb-6 flex items-center text-base leading-6 text-[#AEA9B1]">
                <span>{post.author}</span>
                <div className="mx-1.5 h-2 w-2 bg-white rounded-full"></div>
                <span>{post.date}</span>
              </div>
              <h6 className=" text-xl md:text-2xl font-semibold leading-8 line-clamp-2 overflow-hidden">
                {post.title}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
