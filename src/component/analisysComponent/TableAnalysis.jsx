import React from 'react'
import { Table , Button} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function TableAnalysis({allAnalysis}) {
console.log(allAnalysis);
    return (
        <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            { allAnalysis?.map((a , index ) => (
              <tr key={index}>
                 <th>{index+1}</th>
                 <th>DR.{a.doctor}</th>
                 <th>{a.date.substr(0, 10)}</th>
                 <th>{a.analysis.map((e) => {for(var key in e) { return key.toUpperCase().concat(' ') }})
                   }</th>
                 <th><Link className="btn btn-success me-2" to="">
                    Ver Analisis
                  </Link>{" "}
                  <Button
                    className="btn btn-danger me-2"
                    onClick=''
                  >
                    Eliminar
                  </Button>
                  <Button
                    className="btn btn-primary"
                    onClick=''
                  >
                    Editar
                  </Button></th>
                 
             </tr>
            ))}
        
        </tbody>
      </Table>
    )
}
