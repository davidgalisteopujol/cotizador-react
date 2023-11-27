import { Fragment } from 'react'
import {MARCAS, YEARS, PLANES} from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }


        setError('')
        cotizarSeguro()
    }

  return (
    <>
    {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Marca
                </label>
                <select name="marca" onChange={e => handleChangeDatos(e)} value={datos.marca} className='w-full p-3 bg-white border border-gray-200'>
                    <option value="">-- Selecciona Marca --</option>
                    {MARCAS.map(marca => (
                        <option
                        key={marca.id}
                        value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className='my-5'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Año
                </label>
                <select name="year" onChange={e => handleChangeDatos(e)} value={datos.year} className='w-full p-3 bg-white border border-gray-200'>
                    <option value="">-- Selecciona Año --</option>
                    {YEARS.map(year => (
                        <option
                        key={year}
                        value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className='my-5'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Elige un plan
                </label>
               <div className='flex gap-3 items-center'>
                      {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input type="radio" onChange={e => handleChangeDatos(e)} name="plan" value={plan.id} />
                            </Fragment>
                      ))}  
               </div>
            </div>
            
            <input type="submit" value="Cotizar" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' />

        </form>
    </>
  )
}

export default Formulario