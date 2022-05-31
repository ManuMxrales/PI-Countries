import React from 'react';
import s from '../styles/Inicial.module.css';
import { Link } from 'react-router-dom';

export const Inicial = () => {
  return (
    <div className={s.pagina_inicial}>
        <h1 className={s.pagina_inicial_title}>Countries</h1>
        <p>Hecho con  &#128155;</p>
        <Link to={"/ruta-principal"}>
        <button className={s.pagina_inicial_btn}>Comenzar</button>
        </Link>
    </div>
  )
}
