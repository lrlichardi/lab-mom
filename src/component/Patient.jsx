import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Form, Row, Modal, Button, Alert } from "react-bootstrap";
import "../css/Patient.css";
import PatientEdit from "./PatientEdit";
import TableAnalysis from "./analisysComponent/TableAnalysis";

export default function Patient() {
  const { id } = useParams();
  const [patient, setPatient] = useState();
  const [allAnalysis , setAllAnalysis] = useState();
  // Manejadores del modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alertSuccess, setAlertSuccess] = useState();

  useEffect(() => {
    getOnePatient();
  }, []);

  const getOnePatient = async () => {
    try {
      const { data } = await axios.get(`/patients/${id}`);
      setPatient(data.patient);
      setAllAnalysis(data.analysis);
    } catch (error) {
      console.log(error);
    }
  };
  const fecha = new Date();
  return (
    <div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Paciente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PatientEdit
              patient={patient}
              setPatient={setPatient}
              handleClose={handleClose}
              setAlertSuccess={setAlertSuccess}
            />
          </Modal.Body>
        </Modal>
      </div>
      {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
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
              <Form.Label column sm="5">
                DOMICILIO:
              </Form.Label>
              <Form.Label column sm="6">
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
              <Form.Label column sm="2" className="ms-5">
                EDAD:
              </Form.Label>
              <Form.Label column sm="4">
                {fecha.getFullYear() - patient?.nac.substr(0, 4)}
              </Form.Label>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2" className="ms-5">
                SEXO:
              </Form.Label>
              <Form.Label column >
                {patient?.sex}
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex flex-column">
          <Button
            variant="primary"
            onClick={handleShow}
            className="h-25 my-auto"
          >
            Editar Datos
          </Button>
          <Link
            to={`/patients/${patient?._id}/analisys/newAnalysis`}
            className="h-25 my-auto btn btn-success"
          >
            Nuevo Analisis
          </Link>
        </div>
      </div>
      <div>
        <h1 className="mt-4">Analisis</h1>

        <div>
          <TableAnalysis allAnalysis={allAnalysis}/>
        </div>
      </div>
    </div>
  );
}
