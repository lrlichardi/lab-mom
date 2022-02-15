import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function NewPatient() {
  const [input, setInput] = useState();
  const [alert, setAlert] = useState();

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await axios.post("/patients", input);
      form.reset();
      history.push("/patients");
    } catch (error) {
      console.log(error)
      setAlert(error?.response.data?.msg);
    }
    setTimeout(() => {
      setAlert("");
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputs = { ...input, [name]: value.toUpperCase() };
    setInput(inputs);
  };

  return (
    <div className="mt-3 mb-5 d-flex flex-column align-items-center">
      {alert && <Alert variant="danger">{alert}</Alert>}
      <h1>Nuevo Paciente</h1>
      <div className="w-50 mt-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              DNI
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="number"
                name="dni"
                placeholder="Documento"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Apellido
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder="Apellido"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Nombre
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Celular
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="number"
                name="phoneNumber"
                placeholder="Celular"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              N Obra Social
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="number"
                name="numberSocial"
                placeholder="xxx-xxx"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Fecha de Nac.
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="date"
                name="nac"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Domicilio
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                name="adress"
                placeholder="Domicilio"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Row className="mb-3">
          <Form.Group
            as={Col}
            className=""
            controlId="formPlaintextPassword"
          >
          <Form.Select
            className="mb-4"
            required
            name="obraSocial"
            aria-label="Obra Social"
            onChange={(e) => handleChange(e)}
          >
            <option value="N/A">Obra Social</option>
            <option value="Boreal">Boreal</option>
            <option value="Galeno">Galeno</option>
            <option value="Subsidio">Subsidio</option>
          </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            className=""
            controlId="formPlaintextPassword"
          >
          <Form.Select
            className="mb-4"
            required
            name="sex"
            aria-label="sex"
            onChange={(e) => handleChange(e)}
          >
            <option value="N/A">Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </Form.Select>
          </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Agregar Paciente
          </Button>
        </Form>
      </div>
    </div>
  );
}
