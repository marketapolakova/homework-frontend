import React from "react";
import Button from "./Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type PropsType = {
  img: string;
  name: string;
  position: string;
  description: string;
};

function BusinessCard({ img, name, position, description }: PropsType) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={2}>
            <Card.Img src={img} alt="profile-pic" />
          </Col>

          <Col md={10}>
            <h1>
              {position} {name}
            </h1>
            <p> {description}</p>

            <Button
              name="Kontaktovat"
              contacting={() => alert(`Kontaktuji${" "}${name}`)}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default BusinessCard;
