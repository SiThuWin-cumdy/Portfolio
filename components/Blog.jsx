import Link from "next/link";

const blogs = [
  {
    id: "1",
    date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
    topic:
      "Five Solid Evidences Attending Design Is Good For Your Career Development.",
    image: "https://sergio-react.vercel.app/static/img/blog-1.jpg",
  },
  {
    id: "2",
    date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
    topic:
      "Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.",
    image: "https://sergio-react.vercel.app/static/img/blog-2.jpg",
  },
  {
    id: "3",
    date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
    topic: "I Will Tell You The Truth About Design In The Next 60 Seconds.",
    image: "https://sergio-react.vercel.app/static/img/blog-3.jpg",
  },
  {
    id: "4",
    date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
    topic: "What You Know About Design And What You Don't Know About Design.",
    image: "https://sergio-react.vercel.app/static/img/blog-4.jpg",
  },
];
export default function BlogComponent() {
  return (
    <>
      <div className="container mx-auto  mb-5 grid grid-cols-2 gap-2 px-28 pt-24 text-white">
        <h3 className="font-light tracking-widest text-3xl col-span-2 mb-10">
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
        <div className="mt-3 col-span-2 text-center">
          <button className="transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
            More Blogs
          </button>
        </div>
      </div>
    </>
  );
}
