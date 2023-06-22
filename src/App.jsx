import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
  const blogData = [
    {
      title: "Hamlet",
      author: 'William Shakespeare',
      description: 'Tragedy about a prince haunted by his father\'s ghost',
    },
    {
      title: "Romeo and Juliet",
      author: 'William Shakespeare',
      description: 'Tragic love story of two young star-crossed lovers',
    },
    {
      title: "Macbeth",
      author: 'William Shakespeare',
      description: 'Dark tragedy about ambition and guilt',
    },
    {
      title: "A Midsummer Night's Dream",
      author: 'William Shakespeare',
      description: 'Comedy set in a magical forest with mischievous fairies',
    },
    {
      title: "Othello",
      author: 'William Shakespeare',
      description: 'Tragedy about a Moorish general consumed by jealousy',
    },
  ];

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#add-blog">Add Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h2>Blog Cards</h2>
        <div className="d-flex flex-wrap">
          {blogData.map((blog, index) => (
            <Card key={index} className="m-2" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.author}
                </Card.Subtitle>
                <Card.Text>{blog.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <small>Published: June 22, 2023</small>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}


