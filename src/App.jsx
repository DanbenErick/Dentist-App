import React from 'react'
import DoctorPage from './Pages/DoctorPage.jsx'
import { HashRouter,Switch, Route } from 'react-router-dom'
import CitasPage from './Pages/CitasPage.jsx'
const App = () => {
  return(
    <>
      <HashRouter>
        <Switch>
          <Route path='/citas-pendientes' component={CitasPage} />
          <Route path='/citas-atendidas' component={CitasPage} />
          <Route path='/citas-canceladas' component={CitasPage} />
          <Route path='/' exact component={DoctorPage} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default App