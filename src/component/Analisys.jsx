import React, { useState , useEffect} from "react";
import { useParams , useHistory} from "react-router-dom";
import { Form , Alert , Button , FloatingLabel } from "react-bootstrap";
import Hemoglobina from "./analisysComponent/Hemoglobina";
import Quimica from "./analisysComponent/Quimica";
import Orina from "./analisysComponent/Orina";
import axios from "axios";

export default function Analisys() {
  const {id} = useParams();
  let history = useHistory();
  const [select, setSelect] = useState();
  const [analysisState, setAnalysisState] = useState([]);
  const [alertSuccess, setAlertSuccess] = useState();
  const d = new Date();
  const dateinSting = d.toISOString();
  const [input , setInput] = useState({date:dateinSting , patientId:id});
  console.log(analysisState)
  
  useEffect(() => {
    setInput({... input , analysis:analysisState})
  }, [analysisState]);

  const eraseArray = (e) =>{
    const type = Object.keys(e).toString();
    if(window.confirm(`Seguro que desea eliminar ${type.toUpperCase()}?`)){
    const newArray = analysisState.filter(typeAnalysis => typeAnalysis !== type );
    console.log(newArray);
    // setAnalysisState(newArray);
    setAlertSuccess(`${type.toUpperCase()} ELIMINADO`);
    setTimeout(() => {
      setAlertSuccess("");
    },2000);
    }
  }
  
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const formSubmit = async () => {
    if(analysisState.length > 0){
    await axios.post(`patients/${id}/analisys/newAnalisys` , input )
    history.push(`/patients/${id}`);
  }else {
    window.alert('No Hay Nada Cargado')
  }
    }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    const inputs = { ...input, [name]: value.toUpperCase() , analysis:analysisState};
    setInput(inputs);
  };

  console.log(input);

  return (
    <div>
      <div className='d-flex justify-content-between'>
      <div className='d-flex mt-2'>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => handleChange(e)}
        className=''
      >
        <option>Seleccione El Tipo de Analisis</option>
        <option value="hemoglobina">HEMOGLOBINA</option>
        <option value="quimica">QUIMICA</option>
        <option value="orina">ORINA</option>
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
          
      {analysisState ? analysisState.map((e)  => (
       <button onClick={() => {eraseArray(e)}} className='ms-2'>{Object.keys(e).toString().toUpperCase()}</button>
      )) : null }
    </div>
    <div className="mt-2">
    <Button variant='success' onClick={() => formSubmit()}>Guardar Analisis</Button>
    </div>
    </div>
      <div>
        {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
        {select === "hemoglobina" ? (
          <Hemoglobina
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
