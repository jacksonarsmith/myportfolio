import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Landing from './pages/Landing'
import './App.css'

function App() {

  return (
    <>
        <CssBaseline />
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
