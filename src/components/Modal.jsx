import React, { useState, useEffect, useRef, useReducer } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import widthReactContent from 'sweetalert2-react-content'

const Modal = () => {

  const MySwal = widthReactContent(Swal)

  const fecha = useRef('')
  const trabajo = useRef('')

  const sendData = event => {
    event.preventDefault()
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.post('https://destist-app.herokuapp.com/citas', {
      doctor: localStorage.getItem('id'),
      trabajo: trabajo.current.value,
      fecha: fecha.current.value,
    }, headers)
    .then(res => {
      MySwal.fire({
        title: 'Cita Guardada',
        icon: 'success',
        text: 'Se registro la cita correctamente'
      })
    })
    .catch(err => {
      MySwal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Ocurrio un error al guardar una cita'
      })
    })    
  }

  const abrirModal = () => {
    MySwal.fire({
      title: 'Informacion de Cita',
      html: 
      <form className="uk-form-stacked">
          <legend className="uk-legend">Informacion de Cita</legend>
          <div className="uk-margin">
            <label className="uk-form-label">Fecha de Cita</label>
            <div className="uk-form-controls">
              <input className="uk-input"type="date" placeholder="Fecha.." ref={fecha} />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-form-label">Trabajo</div>
            <div className="uk-form-controls">
              <select className="uk-select" ref={trabajo}>
                <option value="Vacio">Elige una Opcion...</option>
                <option value="Consulta">Consulta</option>
                <option value="Extraccion">Extraccion</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Revision">Revision</option>
              </select>
            </div>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-secondary uk-button-small" onClick={sendData} >Guardar Cita</button>
          </div>
        </form>,
        showConfirmButton: false
    })
  }

  return (
    <>
      <button className="uk-button uk-button-secondary uk-button-small" onClick={abrirModal}>
        Abrir modal
      </button>
    </>
  )
}

export default Modal