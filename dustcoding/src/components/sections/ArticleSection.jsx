import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api/AdminControllerFunction.jsx";

const ArticleSection = () => {
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
    <div className="bg-dustDark py-16">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={article.image} alt="img" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              {article.title}
            </h2>
            <p className="mt-6 text-white">{article.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
