import React from "react";
import { Button, Form } from "react-bootstrap";


const CheckOut = () => {
    return (
        <div className="container">
            <h2 className="checkout-title">This is check out page</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email.......
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Order Now
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;
