import React from "react";
import { Form, Row } from "react-bootstrap";

export default function DataPatient({ patient }) {
  const date = new Date();

  return (
    <>
      <div>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              DNI:
            </Form.Label>
            <Form.Label column sm="2">
              {patient?.dni}
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              DOMICILIO:
            </Form.Label>
            <Form.Label column sm="6">
              {patient?.adress}
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="8" className="pe-0">
              OBRA SOCIAL:
            </Form.Label>
            <Form.Label column sm="2" className="ps-0">
              {patient?.obraSocial}
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="10" className="pe-0">
              N° DE OBRA SOCIAL:
            </Form.Label>
            <Form.Label column sm="2" className="ps-0">
              {patient?.numberSocial}
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" className="ms-5">
              EDAD:
            </Form.Label>
            <Form.Label column sm="4">
              {date.getFullYear() - patient?.nac.substr(0, 4)}
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" className="ms-5">
              SEXO:
            </Form.Label>
            <Form.Label column>{patient?.sex}</Form.Label>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
