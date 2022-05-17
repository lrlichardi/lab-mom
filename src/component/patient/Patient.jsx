import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button, Alert } from "react-bootstrap";
import PatientEdit from "./PatientEdit";
import TableAnalysis from "../analysisComponent/TableAnalysis";
import DataPatient from "../DataPatient";
import Loading from "../loader/Loading";
import { get } from "../../services/apiService";
import "../../css/Patient.css";

export default function Patient() {
  const { state } = useLocation();
  const id = state;
  const [patient, setPatient] = useState();
  const [allAnalysis, setAllAnalysis] = useState();
  const [alertSuccess, setAlertSuccess] = useState();
  const [alert, setAlert] = useState();

  // Manejadores del modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getOnePatient = async () => {
      try {
        const { data } = await get(`/patients/${id}`);
        setPatient(data.patient);
      } catch (error) {
        console.log(error);
      }
    };

    getOnePatient();
    getAllAnalysis();
  }, []);

  const getAllAnalysis = async () => {
    const idValue = { id };

    try {
      const { data } = await get(`/patients/${id}/analysis`, idValue);
      setAllAnalysis(data.reverse());
    } catch (error) {
      console.log(error);
      setAlert(error);
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
            <PatientEdit
              patient={patient}
              setPatient={setPatient}
              handleClose={handleClose}
              setAlertSuccess={setAlertSuccess}
            />
          </Modal.Body>
        </Modal>
      </div>
      {alert && <Alert variant="danger">{alert}</Alert>}
      {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
      {!patient ?  <Loading/> : (
      <div>
        <div className="d-flex">
          <div>
            <Link to={{ pathname: `/patients` }}>
              <Button className="m-2 w-100 h-75" variant="success">
                Atras
              </Button>
            </Link>
          </div>
          <div className="mx-auto">
            <h1>
              PACIENTE: {patient?.lastName} {patient?.name}
            </h1>
          </div>
        </div>
        <h2 className="border w-75 mx-auto">Datos</h2>
        <div className="d-flex justify-content-around border w-75 mx-auto datos">
          <DataPatient patient={patient} />
          <div className="d-flex flex-column">
            <Button
              variant="primary"
              onClick={handleShow}
              className="h-25 my-auto"
            >
              Editar Datos
            </Button>
            <Button
              variant="success"
              onClick={handleShow}
              className="h-25 my-auto"
            >
              <Link
                to={{
                  pathname: `/patients/${patient?.lastName}${patient?.name}/analysis/newAnalysis`,
                  state: `${patient?._id}`,
                }}
                className="text-white text-decoration-none"
              >
                Nuevo Analisis
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <h1 className="mt-4">Historial de analisis</h1>

          <div>
            <TableAnalysis
              allAnalysis={allAnalysis}
              patientId={patient?._id}
              setAlert={setAlert}
              setAlertSuccess={setAlertSuccess}
              getAllAnalysis={getAllAnalysis}
            />
          </div>
        </div>
      </div>)}
    </div>
  );
}
