import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticle } from "../../api/AdminControllerFunction";
import Img from "../../assets/images/pic1.jpg";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticle()
      .then((res) => {
        const article = res.data;
        setArticles(article);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-dustDark pt-20">
      <div className="mt-2/5 items-center justify-center text-center">
        <h5 className=" text-4xl font-extrabold text-white">Our Articles</h5>
      </div>
      <div className=" mx-auto max-w-5xl py-10">
        <ul className="-mx-2 flex flex-wrap overflow-hidden">
          {articles.map((article) => (
            <li
              className="my-2 w-full overflow-hidden px-2  md:w-1/3   lg:w-1/3  xl:w-1/3"
              key={article._id}
            >
              <Link to={`/Article/${article._id}`}>
                <div className=" relative mx-2 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-dustLight bg-cover bg-center">
                  <div className="absolute z-10 h-full w-full bg-black opacity-50 ">
                    <img src={Img} alt="img" />
                  </div>
                  <div className="relative z-20 p-5 text-center">
                    <span className="inline-block text-xl uppercase tracking-wide text-white">
                      {article.title}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
