import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
const Table = ({ tipo }) => {

  const [ citas, setCitas ] = useState([])
  const API = 'https://destist-app.herokuapp.com'
  
  useEffect(() => {
    axios.get(`${API}/citas/${tipo || 'Cita Pendiente'}/${localStorage.getItem('id')}`)
    .then(({ data }) => {
      setCitas(data)
    })
  },[tipo])

  const setCitaAtendida = (id) => {
    axios.put(`${API}/citas/${id}`,{
      estado: 'Cita Atendida'
    })
    console.log("Peticion enviada")
  }

  const setCitaCancelada = (id) => {
    axios.put(`${API}/citas/${id}`,{
      estado: 'Cita Cancelada'
    })
    .then(res => {
      console.log("Peticion enviada")
    })
  }

  return(
    <table className="uk-table">
      <caption><b>Doctor: </b>{localStorage.getItem('nombre')}</caption>
      <thead>
        {
          tipo == 'Cita Pendiente'
          ?
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Trabajo</th>
            <th>Acciones</th>
          </tr>
          :
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Trabajo</th>
          </tr>
        }
      </thead>
      <tbody>
        {
          tipo == 'Cita Pendiente'
          ?
            citas.map(cita => (
              <tr key={cita.id}>
                <td>{cita.id}</td>
                <td>{cita.trabajo}</td>
                <td>{cita.fecha}</td>
                <td>
                  <button className="uk-margin-right uk-button uk-button-secondary uk-button-small" onClick={() => setCitaAtendida(cita.id)}>Atendida</button>
                  <button className="uk-button uk-button-secondary uk-button-small" onClick={() => setCitaCancelada(cita.id)}>Cancelada</button>
                </td>
              </tr>
            ))
          :
            citas.map(cita => (
              <tr key={cita.id}>
                <td>{cita.id}</td>
                <td>{cita.trabajo}</td>
                <td>{cita.fecha}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  )
}

export default Table