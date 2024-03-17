import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx'
import Button from '../Button/Button.jsx'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'
import Step1 from '../Step1/Step1.jsx'
import Step2 from '../Step2/Step2.jsx'
import StepProfession from '../StepProfession/StepProfession.jsx'
import StepCity from '../StepCity/StepCity.jsx'


function App() {


  return (
    <>
      <Header />
      <ProgressBar />
      <Routes>
        <Route path='/' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/profession' element={<StepProfession />} />
        <Route path='/city' element={<StepCity />} />
      </Routes>
      <Button />
      <Form />
    </>
  )
}

export default App
