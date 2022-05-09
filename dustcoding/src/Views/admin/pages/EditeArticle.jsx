import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  getArticleById,
  UpdateArticle,
} from "../../../api/AdminControllerFunction";
import HeaderComponent from "./DashBoardComponents/HeaderComponent";

const EditArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState();
  const [descriptions, setDescriptions] = useState();
  const [Images, setImages] = useState();
  const [Article, setArticle] = useState({
    title: "",
    description: "",
    image: "",
  });
  const { title, description, image } = Article;

  const onChange = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    getArticleById(id).then((res) => {
      const name = res.data.title;
      const desc = res.data.description;
      setName(name);
      setDescriptions(desc);
    });
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { title, description, image } = Article;

    const data = { title, description, image };
    setArticle({ ...Article });
    UpdateArticle(id, data)
      .then((res) => {
        console.log(data);
        navigate("/Admin/Articles/");
        setArticle({ title: "", description: "", image: "" });
      })
      .catch((err) => {
        console.log("error :", err);
        setArticle({ ...Article });
      });
  };

  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <HeaderComponent />
      <div className="ml-14 mt-14 mb-10 h-full md:ml-64">
        <form onSubmit={onSubmit}>
          <div className="min-h-screen bg-indigo-50 pt-6 md:px-20">
            <div className=" mx-auto max-w-2xl rounded-md bg-white px-6 py-10">
              <h1 className="mb-10 text-center text-2xl font-bold text-gray-500">
                Update Article <br /> {name}
              </h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="text-lx font-serif">
                    Title:
                  </label>
                  <input
                    type="text"
                    placeholder="title"
                    id="title"
                    className="text-md ml-2 rounded-md border-2 py-1 px-2 outline-none"
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block font-serif text-lg"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder="whrite here.."
                    className="w-full rounded-md  bg-indigo-50 p-4 font-serif text-gray-600 outline-none"
                    name="description"
                    value={description}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="user_avatar"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-transparent focus:outline-none "
                    aria-describedby="file"
                    id="file"
                    type="file"
                    name="image"
                    value={image}
                    onChange={onChange}
                  />
                </div>
                <button
                  onSubmit={onSubmit}
                  className=" mx-auto block rounded-md bg-indigo-600 px-6 py-2 text-lg font-semibold text-indigo-100  "
                >
                  Update Article
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
