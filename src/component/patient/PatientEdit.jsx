import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { put } from '../../services/apiService'

export default function PatientEdit({ patient , setPatient , handleClose , setAlertSuccess}) {
  const [input, setInput] = useState(patient);
  const [alert, setAlert] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await put(`/patients/${patient._id}`, input);
      form.reset();

      setPatient(input)
      setAlertSuccess('Paciente Editado correctamente!')
      handleClose()

    } catch (error) {
      setAlert(error.response.data.msg);
    }
    setTimeout(() => {
      setAlertSuccess("");
    }, 5000);
    
    setTimeout(() => {
      setAlert("");
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputs = {...input, [name]: value.toUpperCase() };
    setInput(inputs);
  };

  return (
    <div className="mb-2 d-flex flex-column ">
      {alert && <Alert variant="danger">{alert}</Alert>}
      <div className="">
        <Form  onSubmit={handleSubmit}>
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
                defaultValue={patient.dni}
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
                defaultValue={patient.lastName}
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
            <Form.Label column sm="2" >
              Nombre
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                defaultValue={patient.name}
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
            <Form.Label column sm="2" >
              Celular
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                defaultValue={patient.phoneNumber}
                type="number"
                name="phoneNumber"
                placeholder="Celular"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2" className='pt-0'>
              N° Obra Social
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                defaultValue={patient.numberSocial}
                type="number"
                name="numberSocial"
                placeholder="xxx-xxx"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2" className='pt-0'>
              Fecha de Nac.
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                defaultValue={patient.nac}
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
                defaultValue={patient.adress}
                type="text"
                name="adress"
                placeholder="Domicilio"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Select
            className="mb-4"
            required
            name="obraSocial"
            aria-label="Obra Social"
            onChange={(e) => handleChange(e)}
          >
            <option defaultValue={patient.obraSocial}>
              {patient.obraSocial}
            </option>
            <option value="Boreal">Boreal</option>
            <option value="Galeno">Galeno</option>
            <option value="Subsidio">Subsidio</option>
          </Form.Select>
          <hr  />
          <div className='d-flex justify-content-end'>
          <Button variant="secondary" onClick={handleClose} className='me-2'>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Aplicar Cambios
          </Button>
          </div>
          
        </Form>
      </div>
    </div>
  );
}
