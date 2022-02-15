import { useState, useEffect } from "react";
import { Button, Table, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Patients() {
  const [data, setData] = useState([]);
  const [patientFound, setPatientFound] = useState();
  useEffect(() => {
    getPatient();
  }, []);
  const getPatient = async () => {
    try {
      const { data } = await axios.get("/patients");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  // ||
  // patient.lastName === e.target.value
  const handleChange = (e) => {
    setPatientFound(e.target.value);
    if (e.target.value === "") return getPatient();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patientFind(patientFound);
  };
  const patientFind = (valor) => {
    let patientFoundInData = data.filter((patient) => {
      if (
        patient.dni === parseInt(valor) ||
        patient.lastName.includes(valor.toUpperCase())
      ) {
        return patient;
      }
    });
    return setData(patientFoundInData);
  };

  const deletePatient = async (id , lastName) => {
    if (window.confirm(`Estas seguro que deseas eliminar a ${lastName}?`)){
         await axios.delete(`/patients/${id}`);
         getPatient();
    }
   
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>PACIENTES</h1>
        <Form onSubmit={(e) => handleSubmit(e)} className="w-50">
          <FormControl
            placeholder="Busca Paciente Por Documento o Apellido"
            aria-label="Busca Paciente"
            aria-describedby="basic-addon1"
            className="mt-2 find"
            onChange={(e) => handleChange(e)}
          />
        </Form>
        <Link to="patients/new" className="mt-2 me-2">
          <Button>Agregar Paciente</Button>
        </Link>
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Obra social</th>
              <th>Direccion</th>
              <th>Funciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p) => (
              <tr key={p._id}>
                <td>{p.dni}</td>
                <td>{p.lastName}</td>
                <td>{p.name}</td>
                <td>{p.phoneNumber}</td>
                <td>{p.obraSocial}</td>
                <td>{p.adress}</td>
                <td>
                  <Link className="btn btn-primary" to={`/patients/${p._id}`}>
                    Ver mas
                  </Link>{" "}
                  <Button
                    className="btn btn-danger"
                    onClick={() => deletePatient(p._id , p.lastName)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
