import Link from "next/link"; 
import portfolio from '@/public/data/portfolio'; 

export default function BlogComponent() {
  const { blogs } = portfolio;
  return (
    <>
      <div className=" mx-auto  mb-5 grid grid-cols-1 gap-2 px-6 text-white lg:grid-cols-2 lg:gap-8 lg:pt-32 md:px-18 lg:px-24 xl:px-28">
        <h3 className="font-light tracking-widest text-3xl mb-10 lg:col-span-2">
          LATEST BLOG.
        </h3>
        {blogs.map((t) => (
          <div key={t.id} className="transition duration-300 ease-in">
            <Link href="#blogs">
              <div className="hover:underline decoration-1">
                <div className="blog-image overflow-hidden grayscale-0 hover:grayscale  ">
                  <img
                    className="transition duration-500 ease-in  hover:bg-indigo-500 hover:scale-110	"
                    src={t.image}
                  />
                </div>
                <div className="blog-info p-10 bg-black ml-16 -mt-20 mb-4 relative">
                  <p className="font-light text-sm ">{t.date}</p>
                  <h6 className="mt-2 text-2xl font-bold  hover:underline decoration-1">
                    {t.topic}
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="mt-3 text-center lg:col-span-2">
          <button className="transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
            More Blogs
          </button>
        </div>
      </div>
    </>
  );
}
