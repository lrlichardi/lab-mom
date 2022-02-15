import React, { useState } from "react";
import { Form, FloatingLabel, Button, Col, Row } from "react-bootstrap";
import "../../css/quimica.css";

export default function Orina({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const orina = { orina: input };
    if (Object.keys(input).length >= 1) {
      setAnalysisState((old) => [...old, orina]);
      setAlertSuccess("Orina Creada Exitosamente");
      setSelect("");
      setTimeout(() => {
        setAlertSuccess("");
      }, 5000);
    } else {
      window.alert("Estan Vacios Todos Los Campos");
    }
  };
  return (
    <div className='border border-dark mt-3'>
      <h1 className='title border border-dark'>Orina</h1>
      <div className="ms-3 p-2 border mb-2">
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-around flex-wrap">
            <Col xs={2} className="border border-dark contentHemo">
              <h3>Examen Fisico</h3>
              <FloatingLabel
                controlId="floatingInput"
                label="Color:"
                className="mb-3"
              >
                <Form.Control
                  name="color"
                  type="text"
                  placeholder="Color:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                className="mb-3"
                name="aspecto"
              >
                <option>Aspecto</option>
                <option value="Limpido">Limpido</option>
                <option value="Turbio">Turbio</option>
                <option value="ligeramente Turbio">Ligeramente Turbio</option>
              </Form.Select>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                className="mb-3"
                name="espuma"
              >
                <option>Espuma</option>
                <option value="Limpido">Blanca</option>
              </Form.Select>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                className="mb-3"
                name="sedimento"
              >
                <option>Sedimento</option>
                <option value="Escaso">Escaso</option>
                <option value="Regular">Regular</option>
                <option value="Abudante">Abudante</option>
              </Form.Select>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e)}
                className="mb-3"
                name="reaccion"
              >
                <option>Reaccion</option>
                <option value="Limpido">Acida</option>
                <option value="Turbio">Alcalina</option>
              </Form.Select>

              <FloatingLabel
                controlId="floatingInput"
                label="pH:"
                className="mb-3"
              >
                <Form.Control
                  name="ph"
                  type="number"
                  placeholder="Color:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Col>

            <Col xs={2} className="border border-dark contentHemo">
              <h3>Examen Quimico</h3>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Proteinas"
                name='proteinas'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="No Contiene">No Contiene</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="normal">Normal</option>

                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Glucosa"
                name='glucosa'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="No Contiene">No Contiene</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="normal">Normal</option>

                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Cuerpos Cetonicos"
                name='cuerposCetonicos'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="No Contiene">No Contiene</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="normal">Normal</option>
                </Form.Select>
              </FloatingLabel>


              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Sales Biliares"
                name='salesBiliares'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="No Contiene">No Contiene</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="normal">Normal</option>

                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Pigmiento Biliares"
                name='pigmientoBiliares'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="No Contiene">No Contiene</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="normal">Normal</option>

                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Urobilina"
                name='urobilina'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="normal">Normal</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="No Contiene">No Contiene</option>

                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Hemoglobina"
                name='hemoglobina'
                className='mb-3'
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="No Contiene">No Contiene</option>
                  <option value="Contiene Traza">Contiene Traza</option>
                  <option value="Contiene +">Contiene +</option>
                  <option value="Contiene ++">Contiene ++</option>
                  <option value="Contiene +++">Contiene +++</option>
                  <option value="Contiene ++++">Contiene ++++</option>
                  <option value="normal">Normal</option>

                </Form.Select>
              </FloatingLabel>

              
            </Col>

            <Col xs={2} className="border border-dark contentHemo">
              <h3>Examen Miscroscopio de Sedimiento(x400)</h3>
              <FloatingLabel
                controlId="floatingInput"
                label="Cel. Epiteliales:"
                className="mb-3"
              >
                <Form.Control
                  name="celEpiteliales"
                  type="number"
                  placeholder="Cel. Epiteliales:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Leucoitos"
                className="mb-3"
              >
                <Form.Control
                  name="leucocitos"
                  type="number"
                  placeholder="Leucoitos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Piocitos"
                className="mb-3"
              >
                <Form.Control
                  name="piocitos"
                  type="number"
                  placeholder="Piocitos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Eritrocitos"
                className="mb-3"
              >
                <Form.Control
                  name="eritrocitos"
                  type="number"
                  placeholder="Eritrocitos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Mucus"
                className="mb-3"
              >
                <Form.Control
                  name="mucus"
                  type="number"
                  placeholder="Mucus:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Cil.Hialinos:"
                className="mb-3"
              >
                <Form.Control
                  name="cilHialinos"
                  type="number"
                  placeholder="Cil.Hialinos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Cil. Granulosos:"
                className="mb-3"
              >
                <Form.Control
                  name="cilGranulosos"
                  type="number"
                  placeholder="Cil. Granulosos:"
                  onChange={(e) => handleChange(e)}
                />
              </FloatingLabel>
            </Col>

            <Col xs={2} className="border border-dark contentHemo">
              <h3>Otros</h3>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-4 w-25">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
}
