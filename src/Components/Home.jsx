import React, { useState, useEffect } from "react";
import { CiBookmark } from "react-icons/ci";

const Home = ({ favorites, setFavorites }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://saurav.tech/NewsAPI/everything/cnn.json"
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticles();
  }, []);

  const toggleFavorite = (article) => {
    const isFavorited = favorites.some((fav) => fav.url === article.url);
    if (isFavorited) {
      setFavorites(favorites.filter((fav) => fav.url !== article.url));
    } else {
      setFavorites([...favorites, article]);
    }
  };

  return (
    <div className="">
      <h1 className="text-[70px] font-candal text-center bg-red-600 font-extrabold text-white">TRENDING NEWS</h1>
      <div className="font-spectral">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col bg-white text-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[80%] mx-auto hover:bg-gray-100">
                <img
                  className="w-full rounded-t-lg h-96 md:h-auto md:w-[40%] md:rounded-none md:rounded-s-lg"
                  src={article.urlToImage}
                  alt=""
                />
                <div className="flex flex-col text-left p-4 leading-normal">
                  <div className="flex-grow">
                    <a href={article.url} target="_blank">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {article.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {article.description}
                      </p>
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p>{article.source.name}</p>
                      <p>{new Date(article.publishedAt).toLocaleString()}</p>
                    </div>
                    <CiBookmark
                      className={`text-[30px] cursor-pointer ${
                        favorites.some((fav) => fav.url === article.url)
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                      onClick={() => toggleFavorite(article)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading articles...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
