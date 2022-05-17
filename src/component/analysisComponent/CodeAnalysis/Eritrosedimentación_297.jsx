import React , {useState} from 'react'
import { Form, FloatingLabel, Col, } from "react-bootstrap";

export default function Eritrosedimentación_297() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputs = { ...input, [name]: value };
    setInput(inputs);
  };

  return (
    
    <Col xs={2} className="border border-dark contentHemo">
    <h3>Eritrosedimentación</h3>
    <h5>Método Westergren</h5>
    <FloatingLabel
      controlId="floatingInput"
      label="1 Hora:"
      className="mb-3"
    >
      <Form.Control
        name="onehs"
        type="number"
        placeholder="1 Hora:"
        onChange={(e) => handleChange(e)}
      />
    </FloatingLabel>
  </Col>
  )
}
