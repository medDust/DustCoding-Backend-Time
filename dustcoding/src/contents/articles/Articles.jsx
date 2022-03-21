import React from "react";
import Img from "../../assets/images/pic1.jpg";

const Articles = () => {
  const articles = [
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
    { url: Img, title: "web Application", description: "Creation of Websites" },
  ];
  return (
    <div className="bg-dustDark pt-20">
      <div className="items-center justify-center text-center mt-2/5">
        <h5 className=" text-4xl text-white font-extrabold">Our Articles</h5>
      </div>
      <div className="mx-auto max-w-5xl py-10">
        <ul className="-mx-2 flex flex-wrap overflow-hidden">
          {articles.map((article) => (
            <li className="my-2 w-full overflow-hidden px-2 md:w-1/3 lg:w-1/3 xl:w-1/3">
              <div
                className=" bg-dustLight relative mx-2 flex items-center justify-center overflow-hidden rounded-lg bg-cover bg-center"
                style={{
                  height: "400px;",
                }}
              >
                <div className="absolute z-10 h-full w-full bg-black opacity-50">
                  <img src={Img} alt="" />
                </div>
                <div className="relative z-20 p-5 text-center">
                  <span className="inline-block text-xl uppercase tracking-wide text-white">
                    {article.title}
                  </span>
                  <h2 className="text-md my-5 font-serif font-semibold text-white">
                    {article.description}
                  </h2>
                  <span className="inline-block font-sans text-sm text-white">
                    {article.date}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
