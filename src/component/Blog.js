import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Blog() {
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumu

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Veriler yüklenirken spinner'ı görünür yap
        setLoading(true);

        const querySnapshot = await getDocs(collection(db, "news"));
        const newsData = [];
        querySnapshot.forEach((doc) => {
          newsData.push(doc.data());
        });
        setNews(newsData);
        setLoading(false); // Veriler yüklendikten sonra spinner'ı gizle
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Veriler yüklenirken spinner'ı görünür yap
        setLoading(true);

        const querySnapshot = await getDocs(collection(db, "blog"));
        const blogsData = [];
        querySnapshot.forEach((doc) => {
          blogsData.push(doc.data());
        });
        setBlogs(blogsData);
        setLoading(false); // Veriler yüklendikten sonra spinner'ı gizle
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  function truncateExplanation(explanation, maxLength) {
    if (explanation.length > maxLength) {
      return explanation.substring(0, maxLength) + "...";
    } else {
      return explanation;
    }
  }

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const recentBlogs = blogs.slice(-2);

  const displayBlogs = showMoreBlogs ? blogs : recentBlogs;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:px-10 px-4 container mx-auto md:-translate-y-0 -translate-y-24 mb-20 md:mt-0 mt-16">
      <div>
        <div className="text-3xl text-left font-bold text-green-900 mb-8 font-display2 ml-2">
          Güncel Haberler
        </div>
        {loading ? ( // Yükleme durumuna göre spinner'ı görüntüle veya gizle
          <div className="p-4 max-w-md ">
            <div className="animate-pulse h-16 w-16 rounded-full bg-green-900 mx-auto"></div>
            <p className="text-center mt-4 text-gray-800 font-display">
              Yükleniyor...
            </p>
          </div>
        ) : (
          <Slider {...settings} className="-translate-y-4">
            {news.map((haber) => (
              <div key={haber.id}>
                <a
                  href={`/haber/${haber.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative">
                    <img
                      className="shadow "
                      src={haber.image}
                      alt={haber.title}
                    />
                    <div className="flex flex-col absolute bottom-0 left-0 w-full md:w-[500px] md:h-40 h-32  w-[300px] bg-black bg-opacity-70 p-2 pl-4 md:-translate-y-0 -translate-y-1">
                      <div className="text-white font-bold text-left font-display md:text-2xl text-lg">
                        {truncateExplanation(haber.title, 50)}
                      </div>
                      <div className="mt-4 font-display text-white md:text-lg text-xs text-left">
                        {truncateExplanation(haber.explanation, 100)}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className="md:mt-0 mt-9 md:mb-0 mb-8">
        <div className="text-3xl text-left font-bold text-green-900 mb-4 font-display2 ">
          İşinize Yarayacak Bilgiler{" "}
        </div>
        {loading ? ( // Yükleme durumuna göre spinner'ı görüntüle veya gizle
          <div className="p-4 max-w-md ">
            <div className="animate-pulse h-16 w-16 rounded-full bg-green-900 mx-auto"></div>
            <p className="text-center mt-4 text-gray-800 font-display">
              Yükleniyor...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {displayBlogs.map((blog) => (
              <div className="flex flex-col " key={blog.id}>
                <a
                  href={`/blog/${blog.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full md:w-72 md:h-64 h-40">
                    <img
                      className="w-full h-full rounded-lg shadow"
                      src={blog.image}
                      alt={blog.title}
                    />
                  </div>
                  <div className="text-left mt-4 font-bold text-green-900 font-display text-xl">
                  {truncateExplanation(blog.title, 26)}
                  </div>
                  <div className="text-left mt-4 font-semibold text-black font-display2 text-xs md:text-base">
                  {truncateExplanation(blog.explanation, 130)}
                  </div>
                </a>
              </div>
            ))}

            <div>
              <button href="/blog/yazılar" className="border px-3 py-3 text-white font-normal font-display2 bg-green-900 hover:bg-black md:translate-x-32 translate-x-24 md:mt-2 mt-8 shadow rounded duration-500 ease-in-out transform hover:scale-110">
                Daha Fazlasını Gör
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
