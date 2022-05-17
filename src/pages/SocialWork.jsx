import React, { useState, useEffect } from "react";
import { Form, Button, Table, Alert } from "react-bootstrap";
import {
  newSocialWork,
  getSocialWork,
  deleteSocialWork,
} from "../socialWork/functionSocialWork";
import Loading from "../component/loader/Loading";
import "../css/socialwork.css";

export default function SocialWork() {
  const [socialWork, setSocialWork] = useState();
  const [alert, setAlert] = useState();
  const [alertSuccess, setAlertSuccess] = useState();

  useEffect(() => {
    getSocialWorkFunction();
    setTimeout(() => {
      setAlert();
      setAlertSuccess();
    }, 8000);
  }, []);

  const getSocialWorkFunction = async () => {
    const data = await getSocialWork();
    setSocialWork(data);
  };

  const newSocialWorkFunction = async (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      return setAlert("Ingrese una obra social");
    }
    const response = await newSocialWork(e.target[0].value);

    if (response[1]) {
      setAlert(response[1].response.data.msg);
    }

    setAlertSuccess(response[0]);
    getSocialWorkFunction();
  };

  const deleteSocialWorkFunction = async (id) => {
    const response = await deleteSocialWork(id);
    setAlertSuccess(response);
    getSocialWorkFunction();
  };

  return (
    <div className="">
      <h1>Obra sociales</h1>
      <div className="d-flex flex-column w-50 mx-auto">
        <div className="mb-5">
          {alert && <Alert variant="danger">{alert}</Alert>}
          {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
          <Form
            className="border p-5 mt-3 border-dark"
            onSubmit={(e) => newSocialWorkFunction(e)}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Ingrese la Obra Social"
                className="border-dark"
                name="obrasocial"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Agregar obra Social
            </Button>
          </Form>
        </div>
        <div>
          {!socialWork ? (
            <Loading />
          ) : (
            <Table
              striped
              bordered
              hover
              size="sm"
              className="background-white"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Obra Sociales</th>
                  <th>Boton</th>
                </tr>
              </thead>
              <tbody>
                {socialWork?.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.obrasocial}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteSocialWorkFunction(value._id);
                        }}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}
