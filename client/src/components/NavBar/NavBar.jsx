import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import Buscador from "../Buscador/Buscador.jsx";
import {
  orderByName,
  orderByPopulation,
  orderByContinent,
  getActivities,
  getCountries,
  orderByActivity,
  orderPage,
} from "../../actions";
const NavBar = () => {
  const actividades = useSelector((state) => state.country.activities);
  const currentSearch = useSelector((state) => state.country.currentSearch);
  const volverPagina = useSelector((state) => state.country.orderContinent);
  const dispatch = useDispatch();

  function ordenamiento(e) {
    let filtro = e.target.value;
    let key;
    if (filtro === "az" || filtro === "za") {
      key = "nombre";
    }
    if (filtro === "mayorPoblacion" || filtro === "menorPoblacion") {
      key = "numPoblacion";
    }
    if (filtro === "All") {
      key = "All";
    }
    switch (key) {
      case "nombre":
        dispatch(orderByName(e.target.value));
        break;
      case "numPoblacion":
        dispatch(orderByPopulation(e.target.value));
        break;
      case "All":
        dispatch(getCountries());
        dispatch(orderPage(false));
        break;
      default:
        if(volverPagina) dispatch(orderPage(false));
        dispatch(orderByContinent(e.target.value));
        break;
    }
  }
  function filtroAct(e) {
    if (e.target.value === "All") {
      dispatch(getCountries());
    }
    dispatch(orderByActivity(e.target.value));
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <header className={s.nav_bar}>
      <nav>
        <ul className={s.nav_bar_list}>
          <li className={s.nav_bar_list_item}>
            <NavLink to="/">Countries</NavLink>
          </li>
        </ul>
        <h1>{currentSearch}</h1>
      </nav>
      <div>
        <Buscador />
      </div>
      <div className={s.filters}>
        <div>
          <label htmlFor="orderBy">Filtrar Por:</label>
        </div>
        <div>
          <select name="orderBy" id="orderBy" onChange={(e) => ordenamiento(e)}>
            <option value="All">Todos</option>
            <option disabled>Nombre</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option disabled>Poblacion</option>
            <option value="mayorPoblacion">Mayor Poblacion</option>
            <option value="menorPoblacion">Menor Poblacion</option>
            <option disabled>Continente</option>
            <option value="Africa">Africa</option>
            <option value="North America">America del Norte</option>
            <option value="South America">America del Sur</option>
            <option value="Antarctica">Antartica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select
            name="orderByActivities"
            id="orderByActivities"
            onChange={(e) => filtroAct(e)}
          >
            <option value="All">Cualquier Actividad</option>
            {actividades &&
              actividades.map((act, i) => (
                <option key={i} value={act.name}>
                  {act.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
