import React from "react";
import dust from "../../assets/images/pic4.jpg";

const articles = [
  {
    id: 1,
    img: dust,
    title: "Comming Soon",
    description: "we well post our content soon",
  },
  {
    id: 2,
    img: dust,
    title: "Comming Soon",
    description: "we well post our content soon",
  },
  {
    id: 3,
    img: dust,
    title: "Comming Soon",
    description: "we well post our content soon",
  },
  {
    id: 4,
    img: dust,
    title: "Comming Soon",
    description: "we well post our content soon",
  },
];
const ArticleSection = () => {
  return (
    <div className=" p-4">
      <h1 className="font-bold text-3xl text-white text-center">Articles</h1>
      <section className="grid grid-cols-1 md:flex md:flex-wrap md:px-24 gap-4 px-5 py-20 sm:grid-cols-2 sm:gap-4 md:children:w-5/12 items-center justify-center">
        {articles.map((article) => (
          <div
            key={article.id}
            className=" text-center shadow-md rounded-lg bg-white"
          >
            <img
              className="rounded-t-lg hover:border-opacity-80 transform hover:scale-105 transition duration-300"
              src={article.img}
              alt="article"
            />
            <div className="px-4 pb-5 ">
              <h3 className="font-bold text-xl my-2">{article.title}</h3>
              <p className="text-base font-medium">{article.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArticleSection;
