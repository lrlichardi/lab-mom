import React from "react";

const ViewHemoglobina = ({ hemoglobina, index }) => {
  return (
    <div>
      <h3 className="pe-2 ps-2">Hemoglobina</h3>
      <div className="border border-dark d-flex max-content " key={index}>
        {hemoglobina.hematies ? (
          <div className="border-end border-dark pe-2 ps-2">
            <h3>Recuento Globular</h3>
            {hemoglobina.hematies ? (
              <p>Hematies/ul: {hemoglobina.hematies}</p>
            ) : null}
            {hemoglobina.leucocitos ? (
              <p>Leucocitos/ul: {hemoglobina.leucocitos}</p>
            ) : null}
            {hemoglobina.plaquetas ? (
              <p>Plaquetas/ul: {hemoglobina.plaquetas}</p>
            ) : null}
          </div>
        ) : null}

        {hemoglobina.metamielocitos ? (
          <div className="border-end border-dark pe-2 ps-2">
            <h3>Formula Leucocitaria</h3>
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th className="pe-2">Examinada</th>
                  <th>Normal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="text-center">%</td>
                  <td className="text-center">%</td>
                </tr>
                <tr>
                  <td>Metamielocitos:</td>
                  <td className="text-center">{hemoglobina.metamielocitos}</td>
                  <td className="text-center">0--1</td>
                </tr>
                <tr>
                  <td>Neutrofilos en cayados:</td>
                  <td className="text-center">
                    {hemoglobina.neutrofilosCayados}
                  </td>
                  <td className="text-center">3--5</td>
                </tr>
                <tr>
                  <td>Neutrofilos Segmentados:</td>
                  <td className="text-center">
                    {hemoglobina.neutrofilosSegmentados}
                  </td>
                  <td className="text-center">55--65</td>
                </tr>
                <tr>
                  <td>Eosinofilos:</td>
                  <td className="text-center">{hemoglobina.eosinofilos}</td>
                  <td className="text-center">2--4</td>
                </tr>
                <tr>
                  <td>Basofilos:</td>
                  <td className="text-center">{hemoglobina.basofilos}</td>
                  <td className="text-center">0--1</td>
                </tr>
                <tr>
                  <td>Linfocitos:</td>
                  <td className="text-center">{hemoglobina.linfocitos}</td>
                  <td className="text-center">25--40</td>
                </tr>
                <tr>
                  <td>Monocitos:</td>
                  <td className="text-center">{hemoglobina.monocitos}</td>
                  <td className="text-center">4--8</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {hemoglobina.det ? (
          <div className="border-end border-dark pe-2 ps-2">
            <h3>Dosaje de hemoglobina y hematocrito</h3>
            {hemoglobina.det ? <p>Det. en gr.%:: {hemoglobina.det}</p> : null}
            {hemoglobina.hematocrito ? (
              <p>Hematocrito: {hemoglobina.hematocrito}</p>
            ) : null}
          </div>
        ) : null}

        {hemoglobina.onehs ? (
          <div className="border-end border-dark pe-2 ps-2">
            <h3>Eritrosedimentacion</h3>
            {hemoglobina.onehs ? <p>1Hs: {hemoglobina.onehs}</p> : null}
            {hemoglobina.twohs ? <p>2Hs: {hemoglobina.twohs}</p> : null}
            {hemoglobina.indiceKatz ? (
              <p>Indice de Katz: {hemoglobina.indiceKatz}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ViewHemoglobina;
