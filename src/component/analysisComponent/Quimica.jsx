import React, { useState } from "react";
import { Form, FloatingLabel, Button, Row } from "react-bootstrap";
import "../../css/quimica.css";

export default function Quimica({
  setAnalysisState,
  setAlertSuccess,
  setSelect,
  analysisState,
}) {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputs = { ...input, [name]: value };
    setInput(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quimica = { quimica: input };

    if (Object.keys(input).length >= 1) {
      
      setAnalysisState((old) => [...old, quimica]);
      setAlertSuccess("Quimica Creada Exitosamente");
      setSelect("");

      setTimeout(() => {
        setAlertSuccess("");
      }, 5000);

    } else {
      window.alert("Estan Vacios Todos Los Campos");
    }
  };

  return (
    <div className="border border-dark mt-3">
      <h1 className="title border border-dark ">Quimica</h1>
      <div className="ms-3 p-2">
        <Form onSubmit={handleSubmit}>
          <Row xs={3} className="border contentHemo p-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Glucemia:"
              className="mb-3"
            >
              <Form.Control
                name="glucemia"
                type="number"
                placeholder="Glucemia:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Trigliceridemia:"
              className="mb-3"
            >
              <Form.Control
                name="trigliceridemia"
                type="number"
                placeholder="Trigliceridemia:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Colesterolemia:"
              className="mb-3"
            >
              <Form.Control
                name="colesterolemia"
                type="number"
                placeholder="Colesterolemia/ul:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="HDL-Colesterol:"
              className="mb-3"
            >
              <Form.Control
                name="hdl"
                type="number"
                placeholder="HDL-Colesterol:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="LDL-Colesterol:"
              className="mb-3"
            >
              <Form.Control
                name="ldl"
                type="number"
                placeholder="LDL-Colesterol:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Uremia:"
              className="mb-3"
            >
              <Form.Control
                name="uremia"
                type="number"
                placeholder="Uremia:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Creatinina:"
              className="mb-3"
            >
              <Form.Control
                name="creatinina"
                type="number"
                placeholder="Creatinina:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Uricemia:"
              className="mb-3"
            >
              <Form.Control
                name="uricemia"
                type="number"
                placeholder="Uricemia:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="GOT:"
              className="mb-3"
            >
              <Form.Control
                name="got"
                type="number"
                placeholder="GOT:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="GPT:"
              className="mb-3"
            >
              <Form.Control
                name="gpt"
                type="number"
                placeholder="GPT:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Bilirrubina Directa:"
              className="mb-3"
            >
              <Form.Control
                name="bilirubinaDirect"
                type="number"
                placeholder="Bilirrubina Directa:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Bilirrubina Indirecta:"
              className="mb-3"
            >
              <Form.Control
                name="bilirubinaIndirect"
                type="number"
                placeholder="Bilirrubina Indirecta:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Bilirrubina Total:"
              className="mb-3"
            >
              <Form.Control
                name="bilirubinaTotal"
                type="number"
                placeholder="Bilirrubina Total:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Fosfatasa Alcalina:"
              className="mb-3"
            >
              <Form.Control
                name="fosfatasaAlcalina"
                type="number"
                placeholder="Fosfatasa Alcalina:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Calcio:"
              className="mb-3"
            >
              <Form.Control
                name="calcio"
                type="number"
                placeholder="Calcio:"
                onChange={(e) => handleChange(e)}
              />
            </FloatingLabel>
          </Row>

          <Button variant="primary" type="submit" className="mt-4 w-25">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
}
