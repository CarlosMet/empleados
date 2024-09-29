import React, { useState } from 'react'
import Loader from './Loader'

export default function Employee({getInfo}) {

    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = (e)=>{
        e.preventDefault()
        const employeeName = e.target.nombre.value
        const id =e.target.id.value
        const productivity = e.target.productividad.value
        const punctuality = e.target.puntualidad.value
        const attitud = e.target.actitud.value

        if(id, productivity, employeeName, punctuality, attitud){
            let result = '';

            if (punctuality < 5) {
                result = 'Insuficiente';
            } else if (productivity >= 8 && attitud > 7) {
                result = 'Excelente';
            } else if (productivity >= 6 && productivity < 8) {
                result = attitud < 5 ? 'Regular' : 'Buena';
            } else {
                result = 'Suficiente';
            }

            getInfo({employeeName,id, productivity, punctuality, attitud, result})
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 1500);
        }

    }

    
  return (
   <section>
    <form className='w-10/12 md:w-9/12 lg:w-7/12 2xl:w-6/2 border border-gray-500 p-12 rounded-2xl m-auto' onSubmit={submitHandler} action="">
       <div className="flex">
       <div className='w-[20%]'>
        <label htmlFor="">Nombre</label>
            <input className='border border-gray-400 w-full' name='nombre' type="text" />
        </div>
        <div className="w-[20%]">
            <label htmlFor="">ID</label>
            <input className='border border-gray-400 w-full' name='id' type="text" />
            
        </div>
        <div className="w-[20%]">
            <label htmlFor="">Productividad</label>
            <input className='border border-gray-400 w-full' name='productividad' type="number" />
        </div>
        <div className="w-[20%]">
            <label htmlFor="">Puntualidad</label>
            <input className='border border-gray-400 w-full' name='puntualidad' type="number" />
        </div>
        <div className="w-[20%]">
            <label htmlFor="">Actitud</label>
            <input className='border border-gray-400 w-full' name='actitud' type="number" />
        </div>
       </div>
        <button className='grid place-items-center w-full py-1 h-8 rounded-xl mt-4 bg-gradient-to-br from-green-500 to-green-700' type="submit">
            {isLoading ? <Loader /> : <span>Calcular</span>}
        </button>
        
    </form>
   </section>
  )
}
