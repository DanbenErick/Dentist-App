import axios from 'axios'
import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header.jsx'
const DoctorPage = () => {

  const API = 'https://destist-app.herokuapp.com'
  const dni = useRef()
  const history = useHistory()

  const accessToSystem = () => {
    axios.get(`${API}/doctores/${dni.current.value}`)
    .then(({data}) => {
      if(data != '') {
        console.log("Se encontro un usuario")
        localStorage.setItem('id', data.id)
        localStorage.setItem('nombre', data.nombres)
        history.push('/citas-pendientes')
      }else {
        console.log("No se encontro un usuario a perfil")
      }
    })
    .catch(err => {
      console.error("Se encontro un error en la peticion del DNI: ", err)
    })
  }

  return (
    <>
      <Header title="Dentist App" />
      <main className="uk-container uk-margin-large-top">
        <form className="uk-form-stacked">
          <div className="uk-grid">
            <div className="uk-form-controls uk-width-5-6@m">
              <label className="uk-form-label">DNI</label>
              <input ref={dni} className="uk-input" type="number" placeholder="DNI del Doctor" />
            </div>
            <div className="uk-form-controls uk-width-1-6@m uk-margin-top">
              <button className="uk-button uk-button-secondary uk-width-1-1" onClick={accessToSystem}>Ingresar</button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default DoctorPage