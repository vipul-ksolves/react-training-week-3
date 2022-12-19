import React, { memo } from "react";

//css
import "../../css/card.css";
import "../../css/blogs.css";

//components
import Card from "./Card";

const Blogs = () => {
  return (
    <>
      <div className="bg-white text-black pb-5 pb-md-6">
        <div className="container py-2">
          <div id="html" className="row mt-6 article-card">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Blogs);
