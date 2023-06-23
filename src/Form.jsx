import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default function AddForm() {
  return (
    <div>
      <Container>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Blog Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the name of the Blog" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter the  Description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Authors Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the name of the Author" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to Terms and Conditions" />
          </Form.Group>
          <Button variant="outline-info">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}