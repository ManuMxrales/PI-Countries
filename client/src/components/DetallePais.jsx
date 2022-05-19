import React, { useEffect } from "react";
import s from "../styles/DetallePais.module.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesId } from "../actions";

const DetallePais = () => {
  const { id } = useParams();
  const country = useSelector((state) => state.country.pais);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesId(id));
  }, [dispatch, id]);

  return (
    <main>
      <div key={country.id} className={s.DetailContainer}>
        <div className={s.MainContainer}>
          <div className={s.ImageContainer}>
            <h2>{country.id}</h2>
            <img src={country.image} alt={country.name} />
            <h1>{country.name ? country.name.toUpperCase() : country.id}</h1>
          </div>
          <div className={s.InfoContainer}>
            <p>
              <strong>
                Capital
                <br />
              </strong>
              {country.capital}
            </p>
            <p>
              <strong>
                Continente
                <br />
              </strong>
              {country.continents}
            </p>
            <p>
              <strong>
                Subregion
                <br />
              </strong>
              {country.subregion}
            </p>
            <p>
              <strong>
                Area
                <br />
              </strong>
              {country.area}
            </p>
            <p>
              <strong>
                Poblacion
                <br />
              </strong>
              {country.population}
            </p>
          </div>
        </div>
        <div className={s.ActivitiesContainer}>
          {country.activities ? (
            country.activities.map((actividad) => {
              return <h1>acabar act</h1>;
            })
          ) : (
            <p>Aun no hay actividades</p>
          )}
        </div>
        <div className={s.buttonContainer}>
          <Link to={"/ruta-principal"}>
            <button>Agregar Actividad</button>
          </Link>
          <Link to={"/ruta-principal"}>
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetallePais;
