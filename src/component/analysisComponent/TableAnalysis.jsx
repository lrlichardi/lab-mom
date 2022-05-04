import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link , useLocation } from "react-router-dom";
import { remove } from "../../services/apiService";

export default function TableAnalysis({ allAnalysis, patientId , setAlert , setAlertSuccess , getAllAnalysis}) {
  const { pathname } = useLocation();


  const deleteAnalysis = async (id) => {
    console.log(id)
    if (window.confirm('Seguro que desea eliminar')){
    try {
      const { data, error } = await remove(
        `/patients/${patientId}/analysis/${id}`,
        id
      );

      if (error) {
        return setAlert(error.response.data.msg);
      }
      getAllAnalysis()
      setAlertSuccess(data)
    } catch (error) {
      console.log(error)
    }}

    setTimeout(() => {
      setAlert("");
      setAlertSuccess("");
    }, 5000);
 
  };
 
  
  return (
    <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Doctor</th>
          <th>Fecha</th>
          <th>Protocolo</th>
          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {allAnalysis?.map((a, index) => (
          <tr key={index}>
            <th>{allAnalysis.length - index}</th>
            <th>DR.{a.doctor}</th>
            <th>{a.date}</th>
            <th>{a._id}</th>
            <th>
              {a.analysis.map((e) => {
                for (var key in e) {
                  return key.toUpperCase().concat(" ");
                }
              })}
            </th>
            <th>
              <Link className="btn btn-success me-2" to={{pathname:`${pathname}/analysis/${a._id}/view` , state:a}}>
                Ver Analisis
              </Link>
              <Button
                className="btn btn-danger me-2"
                onClick={() => deleteAnalysis(a._id)}
              >
                Eliminar
              </Button>
              <Link to={`/patients/${patientId}/analysis/${a._id}/edit`}>
              <Button
                className="btn btn-primary"
              >
                Editar
              </Button></Link>
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
