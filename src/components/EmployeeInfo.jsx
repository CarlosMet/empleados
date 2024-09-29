import React, { useEffect, useState } from 'react'

export default function EmployeeInfo({info}) {
    const [barWidth, setBarWidth] = useState(0)
    useEffect(()=>{
        if(info){
            switch (info.result) {
                case "Insuficiente":
                    setBarWidth(20)
                    break;
                case "Regular":
                    setBarWidth(50)
                    break;
                case "Buena" : 
                    setBarWidth(65)
                    break;
                case "Suficiente":
                    setBarWidth(80)
                    break;
                case "Excelente" : 
                    setBarWidth(100)
                    break;
                
                    
            }
        }
    }, [])
  return (

  <section className='w-full mt-6'>
    {
        info 
        ?<div className="rounded-xl border border-gray-400 p-10 w-80 m-auto">
        <div className="flex gap-3 items-center">
          <div className="rounded-full h-12 w-12 bg-cover bg-center" style={{ backgroundImage: `url('data:image/jpeg;base64,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')` }}>
          </div>
          <div>
            <div className="text-lg font-bold">{info.employeeName}</div>
            <div className="text-sm text-gray-500">ID: {info.id}</div>
          </div>
        </div>
        <div className="w-full bg-green-500 h-3 mt-4 rounded-full">
          <div className="bg-green-700 h-3 rounded-full" style={{ width: `${barWidth}%` }}></div>
        </div>
        <div className="w-28 h-28 rounded-xl bg-cover bg-center m-auto mt-3 border border-gray-400 grid place-items-center text-green-700 font-bold text-lg">
            {info.result}
        </div>
        <div className="w-full h-3 mt-4">
          <p className="text-center text-sm text-gray-700">{info.result == "Insuficiente"  ? <span className='text-2xl'>😫</span> : <span className='text-2xl'>😉</span> }</p>
        </div>
        </div>

        :<div className="rounded-xl border border-gray-400 p-10 w-80 m-auto">
        <div className="flex gap-3 items-center">
          <div className="rounded-full h-12 w-12 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/150')` }}>
          </div>
          <div>
            <div className="text-lg font-bold">Nombre del Empleado</div>
            <div className="text-sm text-gray-500">ID: 123456</div>
          </div>
        </div>
        <div className="w-full bg-green-500 h-3 mt-4 rounded-full">
          <div className="bg-green-700 h-3 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <div className="w-28 h-28 rounded-xl bg-cover bg-center m-auto mt-3" style={{ backgroundImage: `url('https://via.placeholder.com/300')` }}>
        </div>
        <div className="w-full bg-gray-100 h-3 mt-4">
          <p className="text-center text-sm text-gray-700">Progreso: 80%</p>
        </div>
        </div>
    }

  </section>
  
  )
}
