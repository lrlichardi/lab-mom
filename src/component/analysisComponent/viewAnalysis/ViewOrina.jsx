import React from "react";

const ViewOrina = ({ orina, index }) => {
  console.log(orina);
  return (
    <div key={index}>
      <h3>Orina</h3>
      <div className="d-flex">
        {orina.color ? (
          <div className="pe-2 ms-2 max-content">
            <table className="ms-2">
              <thead className="border border-dark">
                <h5>Examen Fisico</h5>
                <tr>
                  <th></th>
                  <th className="pe-2">Examinada</th>
                  <th className="text-center">Normal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Color:</td>
                  <td className="text-center">{orina.color}</td>
                  <td className="text-center">Am - Ambar</td>
                </tr>
                {orina.aspecto ? (
                  <tr>
                    <td>Aspecto:</td>
                    <td className="text-center">{orina.aspecto}</td>
                    <td className="text-center">Límpido</td>
                  </tr>
                ) : null}

                {orina.espuma ? (
                  <tr>
                    <td>Espuma:</td>
                    <td className="text-center">{orina.espuma}</td>
                    <td className="text-center">Blanco</td>
                  </tr>
                ) : null}

                {orina.sedimento ? (
                  <tr>
                    <td>HDL-Colesterol:</td>
                    <td className="text-center">{orina.sedimento}</td>
                    <td className="text-center">Escaso</td>
                  </tr>
                ) : null}

                {orina.reaccion ? (
                  <tr>
                    <td>LDL-Colesterol:</td>
                    <td className="text-center">{orina.reaccion}</td>
                    <td className="text-center">Acida</td>
                  </tr>
                ) : null}

                {orina.densidad ? (
                  <tr>
                    <td>Uremia:</td>
                    <td className="text-center">{orina.densidad}</td>
                    <td className="text-center">1,015-1,025</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        ) : null}
        {orina.proteinas ? (
          <div className="pe-2 ms-2 max-content">
            <table className="ms-2">
              <thead>
                <h5>Examen Quimico</h5>
                <tr>
                  <th>Elementos Patologicos</th>
                  <th className="pe-2 text-center">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {orina.proteinas ? (
                  <tr>
                    <td>Proteinas:</td>
                    <td className="text-center">{orina.proteinas}</td>
                  </tr>
                ) : null}

                {orina.glucosa ? (
                  <tr>
                    <td>Glucosa:</td>
                    <td className="text-center">{orina.glucosa}</td>
                  </tr>
                ) : null}

                {orina.cuerposCetonicos ? (
                  <tr>
                    <td>Cuerpos Cetónicos:</td>
                    <td className="text-center">{orina.cuerposCetonicos}</td>
                  </tr>
                ) : null}

                {orina.salesBiliares ? (
                  <tr>
                    <td>Sales Biliares :</td>
                    <td className="text-center">{orina.salesBiliares}</td>
                  </tr>
                ) : null}

                {orina.pigmentoBiliares ? (
                  <tr>
                    <td>Pigmentos Biliares:</td>
                    <td className="text-center">{orina.pigmentoBiliares}</td>
                  </tr>
                ) : null}

                {orina.urobilina ? (
                  <tr>
                    <td>Urobilina:</td>
                    <td className="text-center">{orina.urobilina}</td>
                  </tr>
                ) : null}

                {orina.hemoglobina ? (
                  <tr>
                    <td>Hemoglobina:</td>
                    <td className="text-center">{orina.hemoglobina}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        ) : null}
        {orina.proteinas ? (
          <div className="pe-2 ms-2 max-content">
            <table className="ms-2">
              <thead>
                <h5 className="">Examen Miscroscopio de sedimento (x400)</h5>
                <tr>
                  <th></th>
                  <th className="pe-2 text-center">Resultado</th>
                  <th className="pe-2 text-center">revisar por cpo</th>
                </tr>
              </thead>
              <tbody>
                {orina.celEpiteliales ? (
                  <tr>
                    <td>Cel. Epiteliales:</td>
                    <td className="text-center">{orina.celEpiteliales}</td>
                  </tr>
                ) : null}

                {orina.Leucocitos ? (
                  <tr>
                    <td>Leucocitos:</td>
                    <td className="text-center">{orina.Leucocitos}</td>
                    <td className="text-center">Por cpo.</td>
                  </tr>
                ) : null}

                {orina.piocitos ? (
                  <tr>
                    <td>Piocitos:</td>
                    <td className="text-center">{orina.piocitos}</td>
                    <td className="text-center">Por cpo.</td>
                  </tr>
                ) : null}

                {orina.eritrocitos ? (
                  <tr>
                    <td>Eritrocitos:</td>
                    <td className="text-center">{orina.eritrocitos}</td>
                    <td className="text-center">Por cpo.</td>
                  </tr>
                ) : null}

                {orina.mucus ? (
                  <tr>
                    <td>Mucus:</td>
                    <td className="text-center">{orina.mucus}</td>
                    <td className="text-center">Escaso</td>
                  </tr>
                ) : null}

                {orina.cilHialinos ? (
                  <tr>
                    <td>Cil. Hialinos:</td>
                    <td className="text-center">{orina.cilHialinos}</td>
                    <td className="text-center">Por cpo.</td>
                  </tr>
                ) : null}

                {orina.granulosos ? (
                  <tr>
                    <td>Granulosos:</td>
                    <td className="text-center">{orina.granulosos}</td>
                    <td className="text-center">Por cpo.</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ViewOrina;
