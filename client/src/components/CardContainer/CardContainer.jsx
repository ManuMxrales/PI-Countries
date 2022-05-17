import React, { useState, useEffect } from "react";
import s from "./CardContainer.module.css";
import Card from "../Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";
import { Link } from 'react-router-dom';

const CardContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { worldCountries } = state;
  const loading = useSelector((state) => state.loading);
  const countries = useSelector((state) => state.country.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);

  const LastCountry = currentPage * countriesPerPage;
  const FirstCountry = LastCountry - countriesPerPage;

  const currentCountries = countries.slice(FirstCountry, LastCountry);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={s.main_container}>
      <div className={s.card_container}>
      {currentCountries.map((country) => {
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
      })}
      </div>
    </div>
  );
};
export default CardContainer;
