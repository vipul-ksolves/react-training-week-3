import React, { useState } from "react";
import "../css/update-form.css";
import Navbar from "../components/Navbar";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { createBlog } from "../redux/features/blogSlice";

const AddNewBlog = () => {
  let blogs = useSelector((state) => state.blog.allBlogs);
  const [newBlog, setNewBlog] = useState({
    id: Math.random() * 1000,
    title: "",
    image: "",
    body: "",
    publishedAt: new Date(),
    category: "",
    isSponsored: "",
  });

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  //   const uniqueCategory = [...new Set(blogs?.map((obj) => obj.category))];

  //   const dropDown = uniqueCategory.map((category, i) => (
  //     <option key={i} value={category}>
  //       {category}
  //     </option>
  //   ));
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(createBlog(newBlog));
    console.log(newBlog);
  };
  return (
    <div>
      <Navbar />
      <div className="update-form p-5 ">
        <Form className="w-50">
          <h1 className="text-center">Add New Blog Details</h1>
          <FormGroup>
            <Label for="exampleEmail">Category</Label>
            <Input
              onChange={handleChange}
              name="category"
              placeholder="None"
              type="select"
            >
              <option>Select</option>
              <option>Travel</option>
              <option>History</option>
              <option>Game</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Sponsored</Label>
            <Input onChange={handleChange} name="isSponsored" type="select">
              <option>Select</option>
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
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input
              onChange={handleChange}
              name="title"
              placeholder="Title..."
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              onChange={handleChange}
              id="exampleText"
              name="body"
              type="textarea"
            />
          </FormGroup>

          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNewBlog;
