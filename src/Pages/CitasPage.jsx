import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Table from '../components/Table.jsx'
import Modal from '../components/Modal.jsx'

const CitasPage = () => {



  return (
    <>
      <div className="uk-container">
        <Nav />
        <HashRouter>
          <Switch>
            <Route path="/citas-pendientes" exact>
              <Helmet>
                <title>Citas Pendientes</title>
              </Helmet>
              <Header title="CITAS PENDIENTES" />
              <Modal />
              <Table tipo="Cita Pendiente" />
            </Route>

            <Route path="/citas-atendidas" exact>
              <Helmet>
                <title>Citas Atendidas</title>
              </Helmet>
              <Header title="CITAS ATENDIDAS" />
              <Modal />
              <Table tipo="Cita Atendida" />
            </Route>
            
            <Route path="/citas-canceladas" exact>
              <Helmet>
                <title>Citas Cenceladas</title>
              </Helmet>
              <Header title="CITAS CANCELADAS" />
              <Modal />
              <Table tipo="Cita Cancelada" />
            </Route>

            <Route>
              <Helmet>
                <title>Dentist App</title>
              </Helmet>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </>
  )
}

export default CitasPage