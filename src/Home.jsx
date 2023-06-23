import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const incomingData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const formattedData = await incomingData.json();
      setBlogs(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ border: "2px solid black" }}>
      <h1 style={{ fontStyle: "italic", color: "red" }}><center>Blog Cards</center></h1>
      <Container fluid>
        <div className="d-flex flex-wrap gap-3">
          {blogs.slice(0, 10).map((blog, index) => (
            <div key={blog.id} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className="mb-3">Blog {index + 1}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{blog.title}</Card.Subtitle>
                  <Card.Text>{blog.body}</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Author: John Doe</small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
