import React, { HtmlHTMLAttributes } from "react";
//css
import "../css/home.css";

//components
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/Footer";

//redux
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { filterBlog } from "../redux/features/blogSlice";

//typeScript
// type Button = {
//   handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };
const Home = (): JSX.Element => {
  const allBlogs = useSelector((state: RootState) => state.blog.allBlogs);
  const dispatch = useDispatch();
  // console.log(allBlogs);

  // const uniqueCategory = [
  //   ...new Set(allBlogs?.map((obj) => obj.category)),
  // ];

  // const dropDown = uniqueCategory.map((category, i) => (
  //   <option key={i} value={category}>
  //     {category}
  //   </option>
  // ));

  const handleSelect = (e: any) => {
    dispatch(filterBlog(e.target.value));
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid py-5 py-md-6 bg-dark text-white hero-page">
          <div className="container">
            <h1 className="display-1">Blog</h1>
            <div className="col-lg-8">
              <p className="lead text-light display-6 mb-6">
                This is what we are thinking about...
              </p>
              <div className="filer-section ">
                <div className="filter-data">
                  <h4 className="text-white">Filter</h4>
                  <select
                    onChange={handleSelect}
                    className="width text-uppercase"
                  >
                    <option>All</option>
                    {/* {dropDown} */}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blogs />
      </div>
      <Footer />
    </>
  );
};

export default Home;

// const Home = (): JSX.Element => {
//   const inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
//     event
//   ) => {
//     console.log(event.target.value);
//   };

//   return <input type="text" onChange={inputChange} />;
// };

// export default Home;
