import React from 'react';
import s from '../styles/Inicial.module.css';
import { Link } from 'react-router-dom';

export const Inicial = () => {
  return (
    <div className={s.pagina_inicial}>
        <h1 className={s.pagina_inicial_title}>Henry Countries</h1>
        <Link to={"/ruta-principal"}>
        <button className={s.pagina_inicial_btn}>Comenzar</button>
        </Link>
    </div>
  )
}
