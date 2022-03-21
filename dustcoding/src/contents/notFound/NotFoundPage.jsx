import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <div className="bg-dustDark mx-auto my-auto h-screen w-full items-center py-12 text-center text-white">
        <h1 className="mb-4 text-4xl font-semibold">404 NOT FOUND PAGE</h1>
        <p className="text-text-white mb-10">Sorry, This Page is not define</p>
        <Link
          to="/"
          className="text-dustDark hover:bg-dustLight bg-white px-6 py-2 text-sm uppercase tracking-wider"
        >
          &larr; back To Home Page
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
