import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalFooter,
  Label,
} from "reactstrap";

import { createBlog } from "../redux/features/blogSlice";
import { useDispatch } from "react-redux";

const ModalComponent = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [newBlog, setNewBlog] = useState({
    id: Math.random() * 1000,
    title: "",
    image: "",
    body: "",
    publishedAt: new Date(),
    category: "",
    isSponsored: "",
  });

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const submit = () => {
    setModal(!modal);
    dispatch(createBlog(newBlog));
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add New
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Blog</ModalHeader>
        <div className="p-2">
          <Label for="exampleSelect">Catagory</Label>
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
        </div>
        <div className="p-2">
          <Label for="exampleSelect">Sponsored</Label>
          <Input onChange={handleChange} name="isSponsored" type="select">
            <option>Select</option>
            <option>True</option>
            <option>False</option>
          </Input>
        </div>
        <div className="p-2">
          <Label for="newImage">Image</Label>
          <Input
            onChange={handleChange}
            name="image"
            placeholder="Enter Image url ...."
            type="text"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Title</Label>
          <Input
            onChange={handleChange}
            name="title"
            placeholder="Title..."
            type="text"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Description</Label>
          <Input
            onChange={handleChange}
            name="body"
            placeholder="Description...."
            type="textarea"
          />
        </div>

        <ModalFooter>
          <Button color="primary" onClick={submit}>
            Create Post
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
