import React, { useState, useEffect } from "react";
import { useLocation , useHistory , useParams , Link} from "react-router-dom";
import { Form, Alert, Button, FloatingLabel } from "react-bootstrap";
import Hemograma_475 from "./analysisComponent/CodeAnalysis/Hemograma_475";
import Quimica from "./analysisComponent/Quimica";
import Orina from "./analysisComponent/Orina";
import { post } from "../services/apiService";

export default function Analysis() {
  const { pathName } = useParams()
  const { state } = useLocation();
  const id = state
  let history = useHistory();
  const [select, setSelect] = useState();
  const [analysisState, setAnalysisState] = useState([]);
  const [alertSuccess, setAlertSuccess] = useState();
  const [alert, setAlert] = useState();
  const date = new Date();
  const [input, setInput] = useState({ date: formato(), patientId: id });

  useEffect(() => {
    setInput({ ...input, analysis: analysisState });
  }, [analysisState]);

  function formato(){
    const [day , month , year] = [date.getDate(), date.getMonth(), date.getFullYear()]
    const newDate = day+'-'+month+'-'+year
    return newDate
  }
 
  const eraseArray = (e) => {
    const type = Object.keys(e).toString();

    if (window.confirm(`Seguro que desea eliminar ${type.toUpperCase()}?`)) {
      const newArray = analysisState.filter(
        (typeAnalysis) => Object.keys(typeAnalysis).toString() !== type
      );

      setAnalysisState(newArray);
      setAlertSuccess(`${type.toUpperCase()} ELIMINADO`);

      setTimeout(() => {
        setAlertSuccess("");
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const formSubmit = async () => {
    if (analysisState.length > 0) {
      const response = await post(`patients/${id}/analysis/newAnalysis`, input);

      if(Object.keys(response)[0] === "error"){
        return setAlert(response.error.response.data.msg)
      }
      history.push(`/patients/${pathName}` , id);
    } else {
      window.alert("No Hay Nada Cargado");
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    
    const inputs = {
      ...input,
      [name]: value.toUpperCase(),
      analysis: analysisState,
    };
    
    setInput(inputs);
  };

  return (
    <div>
      {alert && <Alert variant="danger">{alert}</Alert>}
      <div className="d-flex justify-content-between">
        <div className="d-flex mt-2">
        <Link to={{pathname:`/patients/${pathName}` , state:`${id}`}} ><Button className='ms-1 me-2'>Atras</Button></Link>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => handleChange(e)}
            className=""
          >
            <option>Seleccione El Tipo de Analisis</option>
            <option value="475-Hemograma">475-Hemograma</option>
            <option value="474-Hemograma">474-Hemograma</option>
            <option value="477-Hemograma">477-Hemograma</option>
          </Form.Select>

          <FloatingLabel
            controlId="floatingInput"
            label="Doctor:"
            className="ms-3"
          >
            <Form.Control
              required
              name="doctor"
              type="text"
              placeholder="Doctor:"
              onChange={(e) => handleChangeInput(e)}
            />
          </FloatingLabel>

          {analysisState
            ? analysisState.map((e) => (
                <Button
                    onClick={() => {
                    eraseArray(e);
                  }}
                  className="ms-2"
                  key= {e}
                >
                  {Object.keys(e).toString().toUpperCase()}
                </Button>
              ))
            : null}
        </div>
        <div className="mt-2">
          <Button variant="success" onClick={() => formSubmit()}>
            Guardar Analisis
          </Button>
        </div>
      </div>
      <div>
        {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
        {select === "475-Hemograma" ? (
          <Hemograma_475
            setAnalysisState={setAnalysisState}
            analysisState={analysisState}
            setAlertSuccess={setAlertSuccess}
            setSelect={setSelect}
          />
        ) : null}
        {select === "quimica" ? (
          <Quimica
            setAnalysisState={setAnalysisState}
            analysisState={analysisState}
            setAlertSuccess={setAlertSuccess}
            setSelect={setSelect}
          />
        ) : null}
        {select === "orina" ? (
          <Orina
            setAnalysisState={setAnalysisState}
            analysisState={analysisState}
            setAlertSuccess={setAlertSuccess}
            setSelect={setSelect}
          />
        ) : null}
      </div>
    </div>
  );
}
