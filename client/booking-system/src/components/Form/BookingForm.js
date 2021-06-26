import { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import * as api from "../../api";
const BookingForm = () => {
  const [state, setState] = useState({
    date: "",
    stadiumName: "",
    start: "",
    end: "",
  });
  const [validated, setValidate] = useState(false);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidate(true);
    await api
      .createBooking(state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });

    // axios
    //   .push("http://localhost:5000/bookings/", state)
    //   .then((res) => {
    //     alert(res);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });

    // console.log("Submited");
  };
  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="d-flex justify-content-center">
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="date">
          <Form.Control
            required
            name="date"
            value={state.date}
            onChange={handleChange}
            type="date"
            placeholder="date"
          />
          <Form.Control.Feedback type="invalid">
            Please enter your Date
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            required
            name="stadiumName"
            value={state.stadiumName}
            onChange={handleChange}
            type="text"
            placeholder="Enter Stadium Name"
          />
          <Form.Control.Feedback type="invalid">
            Please enter stadium's name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Control
            required
            name="start"
            value={state.start}
            onChange={handleChange}
            className="mb-3"
            type="text"
            placeholder="Start at?"
          />
          <Form.Control.Feedback type="invalid">
            Please enter the start time
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Control
            required
            name="end"
            value={state.end}
            onChange={handleChange}
            className="mb-3"
            type="text"
            placeholder="End at"
          />
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Submit
            </Button>
          </Col>
          <Col>
            <Button variant="warning" style={{ width: "100%" }}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingForm;
