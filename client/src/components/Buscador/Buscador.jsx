import React from 'react'
import s from './Buscador.module.css';
const Buscador = () => {
  return (
    <input 
    type="text" 
    placeholder='Buscar un Pais'
    className={s.buscador_input} 
    />
  )
}

export default Buscador