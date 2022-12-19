import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

//css
import "../../css/card.css";

//components
import CalcRT from "../Calc-RT";
import Update from "../../pages/Update";

//redux
import { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteBlog } from "../../redux/features/blogSlice";
import { getAllBlog } from "../../redux/features/blogSlice";

const Card = () => {
  let blogs = useAppSelector((state: RootState) => state.blog.allBlogs);
  let { loading } = useAppSelector((state: RootState) => state.blog);

  // const afterDelete = useSelector((state) => state.blog.deleteBlog);
  const afterFilter = useAppSelector(
    (state: RootState) => state.blog.filteredBlog
  );
  console.log(blogs);

  // if (afterDelete && afterDelete.length) {
  //   blogs = afterDelete;
  // }
  if (afterFilter && afterFilter.length) {
    blogs = afterFilter;
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBlog());
  }, []);

  return (
    <>
      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          {blogs.map((card, index) => {
            return (
              <div className="col-md-6  col-xl-4 mb-5 " key={index}>
                <div className="card border-0 img-rising mb-lg-5">
                  <img
                    src={card.image}
                    className="card-img-top img-fluid"
                    alt="Why clean design creates better experiences"
                    width="640"
                    height="400"
                  ></img>
                  <div className="card-body px-0">
                    <div className="text-muted text-uppercase mb-2">
                      {card.category}
                    </div>
                    <h2 className="card-title h3">
                      <Link
                        to={`/detail/${card.id}`}
                        className="stretched-link text-decoration-none text-dark"
                      >
                        {card.title}
                      </Link>
                    </h2>
                    <div className="small text-muted mb-3">
                      {/* <ReactTimeAgo date={card.publishedAt} locale="en-US" /> */}
                      {card.publishedAt} <span /> | <span /> {CalcRT(card.body)}{" "}
                      min read
                    </div>
                    <p className="card-text">{card.body}</p>
                  </div>
                </div>
                <div className="mx-3 d-flex justify-content-between">
                  <button
                    onClick={() => dispatch(deleteBlog(card.id))}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <Link to={`/update/${card.id}`}>
                    <button type="button" className="btn btn-info">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Card;
