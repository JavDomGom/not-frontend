import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "./EditUserForm.scss";

export default function EditUserForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Editando usuario...");
  };
  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Biography"
            type="text"
            name="biography"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" placeholder="Web site" name="webSite" />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
