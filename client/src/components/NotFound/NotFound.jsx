import React from 'react';
import s from './NotFound.module.css';
// import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div className={s.NotFoundContainer}>
      <h1>NotFound 404</h1>
      <p>Ese pais no existe (aun?)</p>
      {/* <Link to={"/ruta-principal"}>
        <button className={s.btn}>Regresar</button>
      </Link> */}
    </div>
  )
}