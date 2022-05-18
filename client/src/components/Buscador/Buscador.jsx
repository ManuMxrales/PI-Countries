import React, { useState, useEffect, useRef } from "react";
import s from "./Buscador.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesName, checkInput, getCountries } from "../../actions";
const Buscador = () => {
  const dispatch = useDispatch();
  const inputSearch = useSelector((state) => state.country.searchNameCountry);
  const [input, setInput] = useState("");
  let message = useRef("");

  const onSearchValueChange = (event) => {
    let inputCheck = event.target.value;
    setInput(inputCheck);
  };
  useEffect(() => {
    let RegExpression = /^[a-zA-Z\s]*$/;
    if (input.length >= 3 && RegExpression.test(input)) {
      dispatch(getCountriesName(input.toLowerCase()));
    }
    if (!RegExpression.test(input)) {
      message.current = "Caracteres No Validos Por favor Verifica";
    }
    if (inputSearch === true && input.length === 0) {
      dispatch(checkInput(false));
      message.current = "";
      dispatch(getCountries());
    }
  }, [dispatch, input.length, input, inputSearch]);

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Buscar un Pais"
        maxLength="30"
        className={s.buscador_input}
        onChange={onSearchValueChange}
      />
      <p className={s.p_input}>{message.current}</p>
    </>
  );
};

export default Buscador;
