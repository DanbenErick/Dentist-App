const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Base de Datos
const db = new sqlite3.Database('./db/database.db', err => {
  if(err) {
    return console.error(err.message)
  }
  console.log("Se conecto a SQLite")
})


// Rutas

app.get('/', function(req, res) {
  res.send("Respuesta")
  console.log("Se ingreso a la pagina principal: ", new Date())
})

// Doctores
app.get('/doctores/:dni', (req, res) => {
  console.log("Se ingreso a la pagina de doctores por DNI", new Date())
  db.serialize(() => {
    db.each(`SELECT * FROM doctores WHERE dni=${req.params.dni}`, (err, row) => {
      if(err) {
        console.log("Ocurrio un error en la consulta")
      }
      res.json(row)
    })
  })
})

// Citas
app.get('/citas/:estado/:id', (req, res) => {
  console.log("Se ingreso a la pagina de de citas por estado: ", req.params.estado, new Date())
  
  const sql = `SELECT * FROM citas WHERE estado='${req.params.estado}' and doctor='${req.params.id}'`

  db.all(sql, (err, data) => {
    if(err) {
      console.log("Ocurrio un error")
    }else {
      res.json(data)
      res.end()
    }
  })
})
app.post('/citas', (req, res, next) => {
  console.log("Se ingreso a la pagina de citas, para registrar una: ", new Date())
  const { doctor, trabajo, fecha } = req.body
  db.serialize(() => {
    const prepare = db.prepare(`INSERT INTO citas(doctor, trabajo, estado, fecha) VALUES('${doctor}','${trabajo}','${'Cita Pendiente'}','${fecha}')`)
    prepare.run()
    res.json({
      ok: true,
      data: {
        doctor,
        trabajo,
        fecha
      }
    })

    console.log("Se registro una cita correctamente esta dia y hora: ", new Date())
    prepare.finalize()
  })
})
app.put('/citas/:id', (req, res) => {  
  console.log("Se ingreso a la pagina de edicion de cita: ", new Date())
  db.run(`UPDATE citas SET estado = '${req.body.estado}' WHERE id = '${req.params.id}'`)
})

// Puerto de Base de Datos
app.listen(PORT, function(){
  console.log('El puerto del servidor es : ', PORT)
})


// Cerrando Base de Datos
// db.close(err => {
//   if(err) {
//     return console.error(err.message)
//   }
//   console.log('Se cerro la conexion de la base de datos!!')
// })