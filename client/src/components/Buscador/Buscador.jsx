import React, { useState, useEffect } from "react";
import s from "./Buscador.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesName, checkInput, getCountries } from "../../actions";
const Buscador = () => {
  const dispatch = useDispatch();
  const inputSearch = useSelector((state) => state.country.searchNameCountry);
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState({});
  const onSearchValueChange = (event) => {
    let inputCheck = event.target.value
    validate(input);
    setInput(inputCheck);
  };
  const validate = (inputChec) => {
    
    if (typeof inputChec !== 'string') {
      setErrors.info = "Pais no valido, Verifica la Informacion"
      return errors.info;
    }
  }
  useEffect(() => {
    if (input.length >= 3) {
      dispatch(getCountriesName(input));
    }

    if (inputSearch === true && input.length === 0) {
      dispatch(checkInput(false));
      dispatch(getCountries());
    }
  }, [dispatch, input.length, input, inputSearch]);

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Buscar un Pais"
        className={s.buscador_input}
        onChange={onSearchValueChange}
      />
    </>
  );
};

export default Buscador;
