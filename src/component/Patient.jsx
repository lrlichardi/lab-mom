import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Row, Table, Modal, Button } from "react-bootstrap";
import "../css/Patient.css";
import PatientEdit from "./PatientEdit";

export default function Patient() {
  const { id } = useParams();
  const [patient, setPatient] = useState();
  // Manejadores del modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getOnePatient();
  }, []);

  const getOnePatient = async () => {
    try {
      const { data } = await axios.get(`/patients/${id}`);
      setPatient(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Paciente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PatientEdit patient={patient} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <h1>
        PACIENTE: {patient?.lastName} {patient?.name}
      </h1>
      <h2 className="border w-75 mx-auto">Datos</h2>
      <div className="d-flex justify-content-around border w-75 mx-auto datos">
        <div>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                DNI:
              </Form.Label>
              <Form.Label column sm="2">
                {patient?.dni}
              </Form.Label>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="6">
                DOMICILIO:
              </Form.Label>
              <Form.Label column sm="2">
                {patient?.adress}
              </Form.Label>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="4" className="me-1">
                CELULAR:
              </Form.Label>
              <Form.Label column sm="3">
                {patient?.phoneNumber}
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
        <div>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="8" className="pe-0">
                OBRA SOCIAL:
              </Form.Label>
              <Form.Label column sm="2" className="ps-0">
                {patient?.obraSocial}
              </Form.Label>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="10" className="pe-0">
                N° DE OBRA SOCIAL:
              </Form.Label>
              <Form.Label column sm="2" className="ps-0">
                {patient?.numberSocial}
              </Form.Label>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="5">
                EDAD:
              </Form.Label>
              <Form.Label column sm="2">
                {patient?.edad}
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
        <Button variant="primary" onClick={handleShow} className="h-50 my-auto">
          Editar Datos
        </Button>
      </div>
      <div>
        <h1 className="mt-2">Analisis</h1>
        <div>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
