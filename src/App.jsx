import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './components/Employee'

import Preloader from './components/Preloader'
import EmployeeInfo from './components/EmployeeInfo'

function App() {
  const [count, setCount] = useState(0)

  const [employeeInfo, setEmployeeInfo] = useState({})

  const [preLoader, setPreLoader] = useState(null)

  const getEmployeeInfo = (info)=>{
    if(preLoader == null || preLoader == false){
      setPreLoader(true)
      setTimeout(() => {
        setPreLoader(false)
      }, 1500);
    }
    setEmployeeInfo(info)
    
    console.log(info)
    
  }

  return (
    <main>
      <h1 className='text-4xl font-extrabold tracking-tighter text-center my-4'>Portal De Empleados.</h1>
      <Employee getInfo = {getEmployeeInfo} />
      {
        preLoader == null 
        ? <Preloader />
        : (preLoader ? <Preloader /> : <EmployeeInfo info={employeeInfo} />)
            
        
        
      }
    </main>
  )
}

export default App
