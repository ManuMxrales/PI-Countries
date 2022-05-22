import React from "react";
import s from "./Paginate.module.css";
const Paginate = ({
  countriesPerPage,
  allCountries,
  paginated,
  paginaAnterior,
  paginaSiguiente,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={s.pagiContainer}>
      <ul className={s.ulContainer}>
        <li>
          <button className={s.mov} onClick={() => paginaAnterior()}>
            Prev
          </button>
        </li>
    <div className={s.liContainer}>
    {pageNumbers?.map((numero) => (
            <li key={numero} >
              <button  className={s.Item} onClick={() => paginated(numero)}>{numero}</button>
            </li>
          ))}
    </div>
        <li>
          <button className={s.mov} onClick={() => paginaSiguiente()}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
