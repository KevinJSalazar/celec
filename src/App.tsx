import './App.css'

import Grid from '@mui/material/Grid2'
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'

import DataHour from './interface/DataHour'
import { useEffect, useState } from 'react'

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json"

  // Variable de estado y función de modificación
  const [data, setData] = useState<DataHour[]>([])

  // Petición asíncrona a la URL y actualización de la variable de estado
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [url])

  return (
    <Grid container spacing={5}>

      {/* Student */}
      <Grid size={{ xs: 12 }}>
        <Student apellidos="Salazar Rodríguez" nombres="Kevin Joel" paralelo="1" />
      </Grid>

      {/* HydrologyTable */}
      <Grid size={{ xs: 12 }}>
        <HydrologyTable data={data}></HydrologyTable>
      </Grid>

    </Grid>
  )
}
export default App
