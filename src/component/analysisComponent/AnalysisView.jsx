import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import ViewHemoglobina from "./viewAnalysis/ViewHemoglobina";
import ViewQuimica from "./viewAnalysis/ViewQuimica";
import ViewOrina from './viewAnalysis/ViewOrina';
import "./analysisView.css";

const AnalysisView = () => {
  const history = useHistory();
  const { state } = useLocation();
  
  const PrevWindows = () => {
    history.goBack();
  };

  const analysis = state.analysis;

  return (
    <div className="text-start pe-2">
      <Button className="ms-1 me-2" onClick={() => PrevWindows()}>
        Atras
      </Button>
      <div>
        <h3>Fecha del analisis: {state.date.substr(0, 10)}</h3>
        <h3>Doctor: {state.doctor}</h3>
        <h3>Protocolo: {state._id}</h3>
      </div>
      <div>
        <h1>Analisis paciente:</h1>
      </div>
      <div>
        {analysis.map((e, index) =>
          Object.keys(e)[0] === "hemoglobina" ? ( <ViewHemoglobina hemoglobina={e.hemoglobina} index={index} /> ) : null
        )}
        <div>
          {analysis.map((e, index) =>
            Object.keys(e)[0] === "quimica" ? (<ViewQuimica quimica={e.quimica} index={index} />) : null
          )}
        </div>
        <div>
        {analysis.map((e, index) =>
            Object.keys(e)[0] === "orina" ? (<ViewOrina orina={e.orina} index={index} />) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisView;
