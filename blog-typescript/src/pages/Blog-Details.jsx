import React from "react";

//css
import "../css/article.css";

//components
import Navbar from "../components/Navbar";
import Details from "../components/blogs/Details";
import Footer from "../components/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <Details />
      <Footer />
    </>
  );
};

export default BlogDetails;
