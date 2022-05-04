import React from 'react'

export default function ViewQuimica({quimica , index}) {
  return (
    <div key={index}>
    <h3>Quimica</h3>
    {quimica?.glucemia ? (
      <div className="pe-2 ms-2 max-content">
        <table className="ms-2">
          <thead>
            <tr>
              <th className='text-center'>Tipo</th>
              <th className="pe-2">Examinada</th>
              <th className="text-center">V de Ref.</th>
              <th className="text-center">Metodo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Glucemia:</td>
              <td className="text-center">{quimica.glucemia}</td>
              <td className="text-center">70-110 mg/dl</td>
              <td className="ps-3">Enzimatico</td>
            </tr>
            {quimica.colesterolemia ? (
              <tr>
                <td>Colesterolemia:</td>
                <td className="text-center">
                  {quimica.colesterolemia}
                </td>
                <td className="text-center">Menor de 200 mg/dl</td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.trigliceridemia ? (
              <tr>
                <td>Trigliceridos:</td>
                <td className="text-center">
                  {quimica.trigliceridemia}
                </td>
                <td className="text-center">Menor de 150 mg/dl</td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.hdl ? (
              <tr>
                <td>HDL-Colesterol:</td>
                <td className="text-center">{quimica.hdl}</td>
                <td className="text-center">Mayor de 30 mg/dl</td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.ldl ? (
              <tr>
                <td>LDL-Colesterol:</td>
                <td className="text-center">{quimica.ldl}</td>
                <td className="text-center">Menor de 140 mg/dl</td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.uremia ? (
              <tr>
                <td>Uremia:</td>
                <td className="text-center">{quimica.uremia}</td>
                <td className="text-center">10--45 mg/dl</td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.creatinina ? (
              <tr>
                <td>Creatinina:</td>
                <td className="text-center">
                  {quimica.creatinina}
                </td>
                <td className="text-center">0.7--1.4 mg/dl</td>
                <td className="ps-3">Cinetico</td>
              </tr>
            ) : null}

            {quimica.uricemia ? (
              <tr>
                <td>Uricemia:</td>
                <td className="text-center">
                  {quimica.uricemia}
                </td>
                <td className="text-center"> 2.5-6mg/dl </td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.got ? (
              <tr>
                <td>GOT:</td>
                <td className="text-center">{quimica.got}</td>
                <td className="text-center">Hasta 12 ul/l</td>
                <td className="ps-3">Colorimétrico</td>
              </tr>
            ) : null}

            {quimica.gpt ? (
              <tr>
                <td>GPT:</td>
                <td className="text-center">{quimica.gpt}</td>
                <td className="text-center">Hasta 12 ul/l</td>
                <td className="ps-3">Colorimétrico</td>
              </tr>
            ) : null}

            {quimica.bilirubinaDirect ? (
              <tr>
                <td>Bilirrubina Directa:</td>
                <td className="text-center">
                  {quimica.bilirubinaDirect}
                </td>
                <td className="text-center">Hasta 0.20 mg/dl</td>
                <td className="ps-3">Color diazo</td>
              </tr>
            ) : null}

            {quimica.bilirubinaIndirect ? (
              <tr>
                <td>Bilirrubina Indirecta:</td>
                <td className="text-center">
                  {quimica.bilirubinaIndirect}
                </td>
                <td className="text-center">Hasta 0.80 mg/dl</td>
                <td className="ps-3">Color diazo</td>
              </tr>
            ) : null}

            {quimica.bilirubinaTotal ? (
              <tr>
                <td>Bilirrubina total:</td>
                <td className="text-center">
                  {quimica.bilirubinaTotal}
                </td>
                <td className="text-center">hasta 1.00 mg/dl</td>
                <td className="ps-3">Enzimatico</td>
              </tr>
            ) : null}

            {quimica.fosfatasaAlcalina ? (
              <tr>
                <td>Fosfatasa alcalina:</td>
                <td className="text-center">
                  {quimica.fosfatasaAlcalina}
                </td>
                <td className="text-center">40-180 ul/l</td>
                <td className="ps-3">Cinetico</td>
              </tr>
            ) : null}

            {quimica.calcio ? (
              <tr>
                <td>Calcio:</td>
                <td className="text-center">{quimica.calcio}</td>
                <td className="text-center">revisar</td>
                <td className="ps-3">Cinetico</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    ) : null}
  </div>

  )
}
