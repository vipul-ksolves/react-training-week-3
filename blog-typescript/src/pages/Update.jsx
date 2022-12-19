import React, { useState, useEffect } from "react";
import "../css/update-form.css";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getBlog, editBlog } from "../redux/features/blogSlice";

//component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//redux
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Update = () => {
  // const allBlogs = useSelector((state) => state.blog.allBlogs);

  let blog = useSelector((state) => state.blog.blogDetails);
  // console.log(blog);
  const [newBlog, setNewBlog] = useState({});
  // console.log(newBlog);
  let isSponsored = newBlog.isSponsored;

  const dispatch = useDispatch();
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    dispatch(getBlog(id));
    setNewBlog(blog);
  }, []);

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  // const uniqueCategory = [...new Set(allBlogs?.map((obj) => obj.category))];

  // const dropDown = uniqueCategory.map((category, i) => (
  //   <option key={i} value={category}>
  //     {category}
  //   </option>
  // ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newBlog);
    dispatch(editBlog(newBlog));
  };
  return (
    <div>
      <Navbar />
      <div className="update-form p-4 ">
        <Form className="w-50">
          <h1 className="text-center">Update The Blog Details</h1>
          <FormGroup>
            <Label>Category</Label>
            <Input
              onChange={handleChange}
              name="category"
              placeholder="None"
              type="select"
              className="text-uppercase"
            >
              <option disabled>{newBlog.category}</option>
              <option>Travel</option>
              <option>History</option>
              <option>Game</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Sponsored</Label>
            <Input
              onChange={handleChange}
              name="isSponsored"
              placeholder="None"
              type="select"
              className="text-uppercase"
            >
              <option disabled>{`${isSponsored}`}</option>
              <option>True</option>
              <option>False</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Enter Image url</Label>
            <Input
              onChange={handleChange}
              name="image"
              placeholder="Enter Image url ...."
              type="text"
              value={newBlog.image}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input
              onChange={handleChange}
              name="title"
              placeholder="Title..."
              type="text"
              value={newBlog.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              value={newBlog.body}
              id="exampleText"
              name="body"
              type="textarea"
              onChange={handleChange}
            />
          </FormGroup>

          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
