import React , { useState , useEffect }  from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { post } from "../../services/apiService";
import {
  newSocialWork,
  getSocialWork,
} from "../../socialWork/functionSocialWork";

export default function NewPatient() {
  const [input, setInput] = useState();
  const [socialWork, setSocialWork] = useState();
  const [alert, setAlert] = useState();

  let history = useHistory();

  useEffect(() => {
    functionGetSocialWork();
    setTimeout(() => {
      setAlert("");
    }, 8000);
  }, []);

  const functionGetSocialWork = async () => {
    const data = await getSocialWork();
    setSocialWork(data);
  };

  const functionNewSocialWork = async () => {
    const inputSocialWork = window.prompt("Ingrese la nueva Obra Social");

    if(inputSocialWork){
      const response = await newSocialWork(inputSocialWork)
      console.log(response)
      functionGetSocialWork()
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const { error } = await post("/patients", input);

      if (error) {
        return setAlert(error.response.data.msg);
      }

      form.reset();
      history.push("/patients");
    } catch (error) {
      setAlert(error?.response.data?.msg);
    }

    setTimeout(() => {
      setAlert("");
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputs = { ...input, [name]: value.toUpperCase() };
    setInput(inputs);
  };

  return (
    <div className="mt-3 mb-5 d-flex flex-column align-items-center">
      {alert && <Alert variant="danger">{alert}</Alert>}
      <h1>Nuevo Paciente</h1>
      <div className="w-50 mt-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              DNI
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="number"
                name="dni"
                placeholder="Documento"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Apellido
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder="Apellido"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Nombre
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Celular
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="number"
                name="phoneNumber"
                placeholder="Celular"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              N° Obra Social
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="number"
                name="numberSocial"
                placeholder="xxx-xxx"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Fecha de Nac.
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="date"
                name="nac"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Domicilio
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                name="adress"
                placeholder="Domicilio"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Form.Group>
          <Row>
          <Form.Group as={Col} className="" controlId="formPlaintextPassword">
              <Form.Select
                className="mb-4"
                required
                name="sex"
                aria-label="sex"
                onChange={(e) => handleChange(e)}
              >
                <option>Sexo</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </Form.Select>
            </Form.Group>
            </Row>

          <div className="mb-3 d-flex">
            <Form.Group as={Col} className="me-5" controlId="formPlaintextPassword">
              <Form.Select
                className="mb-4"
                required
                name="obraSocial"
                aria-label="Obra Social"
                onChange={(e) => handleChange(e)}
              >
                <option>Obra Social</option>
                {socialWork?.map(({obrasocial} , index) => (
                  <option key={index} value={obrasocial}>{obrasocial}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <div>
            <Button onClick={() => functionNewSocialWork()} variant='success'>Agregar Nueva Obra Social</Button>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Agregar Paciente
          </Button>
        </Form>
      </div>
    </div>
  );
}
