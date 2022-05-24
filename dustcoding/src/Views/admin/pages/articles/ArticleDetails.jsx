import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../../api/AdminControllerFunction";

import logo from "../../../../assets/images/services/content.png";
const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    getArticleById(id)
      .then((res) => {
        const Article = res.data;

        console.log(Article);
        setArticle({
          title: Article.title,
          description: Article.description,
          image: Article.image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
      <div className=" ml-14 mt-5   mb-10 h-full md:ml-64">
        <div className=" py-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="  space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                   src={`../../../../../images/${article.image}`}
                 
                  alt=""
                />
              </div>
              <div className="md:7/12 grid lg:w-6/12">
                <h2 className="text-2xl font-bold text-black md:text-4xl">
                  {article.title}
                </h2>
                <p className="mt-6 text-black">{article.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
