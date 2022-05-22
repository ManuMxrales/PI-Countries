import React, { useState, useEffect } from "react";
import s from "./CardContainer.module.css";
import Card from "../Card/Card.jsx";
import { NotFound } from "../NotFound/NotFound.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";

const CardContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.worldCountries);
  const country = useSelector((state) => state.country.worldCountries);
  const inputSearch = useSelector((state) => state.country.searchNameCountry);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const LastCountry = currentPage * countriesPerPage;
  const FirstCountry = LastCountry - countriesPerPage;
  const currentCountries = countries.slice(FirstCountry, LastCountry);
  const searchCountries = country.slice(FirstCountry, LastCountry);
  const pagina = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const paginaAnterior = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  };
  const paginaSiguiente = () => {
    if (currentPage < Math.ceil(countries.length / countriesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <div className={s.main_container}>
        <div className={s.card_container}>
          {inputSearch ? (
            Array.isArray(searchCountries) ? (
              searchCountries.map((country) => {
                return (
                  <Link key={country.id} to={`/ruta-principal/${country.id}`}>
                    <Card
                      id={country.id}
                      name={country.name}
                      image={country.image}
                      continents={country.continents}
                    />
                  </Link>
                );
              })
            ) : (
              <h1>Ese Pais no Existe (aun?)</h1>
            )
          ) : Array.isArray(currentCountries) ? (
            currentCountries.map((country) => {
              return (
                <Link key={country.id} to={`/ruta-principal/${country.id}`}>
                  <Card
                    id={country.id}
                    name={country.name}
                    image={country.image}
                    continents={country.continents}
                  />
                </Link>
              );
            })
          ) : (
            <h1>Ese Pais no Existe (aun?)</h1>
          )}
        </div>
      </div>
            <div className={s.pagiStyle}>
            <Paginate
        countriesPerPage={countriesPerPage}
        allCountries={countries.length}
        paginated={pagina}
        paginaAnterior={paginaAnterior}
        paginaSiguiente={paginaSiguiente}
      />
            </div>
    </>
  );
};
export default CardContainer;
