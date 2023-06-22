import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Home Page</h2>
      <div className="d-flex flex-wrap">
        {postData.map(post => (
          <Card key={post.id} className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
