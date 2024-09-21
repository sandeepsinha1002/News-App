import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="">
      <h1 className="text-[70px] font-candal text-center bg-red-600 font-extrabold text-white">
        BOOKMARKED
      </h1>

      <div className="font-spectral">
        {favorites.length > 0 ? (
          favorites.map((article, index) => (
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
                  <div>
                    <p>{article.source.name}</p>
                    <p>{new Date(article.publishedAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite articles yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
