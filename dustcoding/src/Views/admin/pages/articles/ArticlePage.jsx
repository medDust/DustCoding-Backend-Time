import React, { useState } from "react";
import axios from "axios";
import { CreateArticle } from "../../../../api/AdminControllerFunction";
const ArticlePage = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const imageFile = image;
    formData.append("image", imageFile);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:5000/api/image-upload", formData, config)
      .then((res) => {
   
        setImages(res.data.response.imagename);

        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
    const data = { title, description, images };
    CreateArticle(data)
      .then((res) => {
        console.log(data);
        console.log(res);
      })
      .catch((err) => {
        console.log({ err: err.message });
      });
  };
  return (
    <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      <div className=" ml-14 mt-5 mb-10 grid h-full md:ml-64">
        {/* <h1>Upload and Display Image using React Hook's</h1>
        {image && (
          <div>
            {title}
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(image)}
            />
            <br />
            <button onClick={() => setImage(null)}>Remove</button>
          </div>
        )}
        <br />

        <br /> */}
        <form onSubmit={onSubmit} id="form-data">
          <div className="min-h-screen bg-indigo-50 pt-6 md:px-20">
            <div className=" mx-auto max-w-2xl rounded-md bg-white px-6 py-10">
              <h1 className="mb-10 text-center text-2xl font-bold text-gray-500">
                {" "}
                ADD Article Add Article
              </h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="text-lx font-serif">
                    Title :
                  </label>
                  <input
                    type="text"
                    className="text-md ml-2 rounded-md border-2 py-1 px-2 outline-none"
                    name="Title"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
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
                    type="text"
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="whrite here.."
                    className="w-full rounded-md  bg-indigo-50 p-4 font-serif text-gray-600 outline-none"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
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
                    type="file"
                    name="image"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setImage(event.target.files[0]);
                    }}
                  />
                </div>
                <button
                  className=" mx-auto block rounded-md bg-indigo-600 px-6 py-2 text-lg font-semibold text-indigo-100  "
                  type="submit"
                >
                  Create Article
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticlePage;
