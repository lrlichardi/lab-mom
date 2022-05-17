import React, { useState } from "react";
import { Form, FloatingLabel, Button, Col, Row } from "react-bootstrap";
import "../../css/hemoglobina.css";

export default function Hemoglobina({
  setAnalysisState,
  setAlertSuccess,
  setSelect,
}) {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputs = { ...input, [name]: value };
    setInput(inputs);
  };
console.log(input)
  const handleSubmit = (e) => {
    e.preventDefault();
    const hemoglobina = { hemoglobina: input };
    if (Object.keys(input).length >= 1) {
      setAnalysisState((old) => [...old, hemoglobina]);
      setAlertSuccess("Hemoglobina Creada Exitosamente");
      setSelect("");
      setTimeout(() => {
        setAlertSuccess("");
      }, 5000);
    } else {
      window.alert("Estan Vacios Todos Los Campos");
    }
  };

  
  return (
    <div className="mt-3">
      <h1 className="title border border-dark ">Hemoglobina</h1>
      <div className="ms-3 border p-2">
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-around flex-wrap">
            <Col xs={2} className="border border-dark contentHemo">
              <h3>Recuento Globular</h3>
              <FloatingLabel
                controlId="floatingInput"
                label="Hematíes/ul:"
                className="mb-3"
              >
                <Form.Control
                  name="hematies"
                  type="number"
                  placeholder="Hematíes/ul:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Leucocitos/ul:"
                className="mb-3"
              >
                <Form.Control
                  name="leucocitos"
                  type="number"
                  placeholder="Leucocitos/ul:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Plaquetas/ul:"
                className="mb-3"
              >
                <Form.Control
                  name="plaquetas"
                  type="number"
                  placeholder="Plaquetas/ul:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Col>
            <Col xs={2} className="border border-dark">
              <h3>Fórmula Leucocitaria</h3>
              <FloatingLabel
                controlId="floatingInput"
                label="Metamielocitos:"
                className="mb-3"
              >
                <Form.Control
                  name="metamielocitos"
                  type="number"
                  placeholder="Metamielocitos."
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Neutrófilos en cayado:"
                className="mb-3"
              >
                <Form.Control
                  name="neutrofilosCayados"
                  type="number"
                  placeholder="Neutrófilos en cayado:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Neutrófilos segmentados:"
                className="mb-3"
              >
                <Form.Control
                  name="neutrofilosSegmentados"
                  type="number"
                  placeholder="Neutrófilos segmentados:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Eosinófilos:"
                className="mb-3"
              >
                <Form.Control
                  name="eosinofilos"
                  type="number"
                  placeholder="Eosinófilos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Basófilos:"
                className="mb-3"
              >
                <Form.Control
                  name="basofilos"
                  type="number"
                  placeholder="Basófilos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Linfocitos:"
                className="mb-3"
              >
                <Form.Control
                  name="linfocitos"
                  type="number"
                  placeholder="Linfocitos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Monocitos:"
                className="mb-3"
              >
                <Form.Control
                  name="monocitos"
                  type="number"
                  placeholder="Monocitos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Col>

            <Col xs={4} className="border border-dark contentHemo">
              <h3>Dosaje de Hemoglobina y Hematocrito</h3>
              <FloatingLabel
                controlId="floatingInput"
                label="Det. en gr.(%):"
                className="mb-3"
              >
                <Form.Control
                  name="det"
                  type="number"
                  placeholder="Det. en gr.%:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Hematocrito(%):"
                className="mb-3"
              >
                <Form.Control
                  name="hematocrito"
                  type="number"
                  placeholder="Hematocrito(%):"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Col>

          </Row>

          <Button variant="primary" type="submit" className='w-25 mt-2'>
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
}
