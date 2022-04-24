import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigate('/checkout')} variant="success">Service For : {name}</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;
