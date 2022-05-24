import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities } from '../actions';
import { Link } from "react-router-dom";
import s from "../styles/ActividadT.module.css";
import Buscador from "./Buscador/Buscador";
const ActividadT = () => {
  const [input, setInput] = useState({
    pais: [],
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });
  const [mensajeEnviado, setMensajeEnviado] = useState("");
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.country.worldCountries);
  const inputSearch = useSelector((state) => state.country.searchNameCountry);
  const searchCountries = paises?.slice(0, 3);
  let RegExpression = /^[a-zA-Z\s]*$/;
  let message = useRef("");
  
  const handleSubmit = (e) => {
    e.preventDefault();      
      console.log(input);
      if (input.name.length < 3 || !input.pais.length === 0 || !input.difficulty || !input.duration || !input.season || input.name.trim().length === 0) {
        setMensajeEnviado("Informacion Insuficiente");
      }else{
        dispatch(postActivities(input))
        setInput({
          pais: [],
          name: "",
          difficulty: "",
          duration: "",
          season: "",
        })
        setMensajeEnviado("Actividad Creada con Exito!");
      }
  }

  const handleInputCheck = (e) => {
    let inputCheck = e.target.value;
    if (!RegExpression.test(inputCheck)) {
      message.current = "Caracteres No Validos Por favor Verifica";
    }
    if(inputCheck.length === 1){
        message.current = "";
    }

      setInput({
          ...input,
          [e.target.name]: e.target.value,
       });
     
  };
  const handleInputCheckNumber = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
     }); 
  };
  const handleCheck = (e) => {
    if (input.pais && input.pais.find((p) => p === e.target.value)) {
      setMensajeEnviado("Pais agregado anteriormente");
    } else {
      setInput({
        ...input,
        pais: [...input.pais, e.target.value],
      });
    }
  };
  const handleDelete = (e) => {
    let deleteCountry = input.pais.filter(
      (p) => p !== e.target.name
    );
    setInput({
      ...input,
      pais: [...deleteCountry],
    });
  };
  return (
    <div className={s.FormContainer}>
      <h1>Agrega una Actividad Turistica!</h1>
      <h2>{mensajeEnviado}</h2>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="NombreActividad">Nombre De la Actividad</label>
        <input
          className={s.InputName}
          type="text"
          id="NombreActividad"
          name="name"
          maxLength="20"
          onChange={(e) => handleInputCheck(e)}
        />
        <p className={s.p_input}>{message.current}</p>
        <div className={s.segundoContenedor}>
          <label htmlFor="paises">Paises</label>
          <Buscador />
          <div className={s.paisOption} id="paises">
            {inputSearch &&
              Array.isArray(searchCountries) &&
              searchCountries.map((country, i) => {
                return (
                  <div key={country.id + i}>
                    <button
                      
                      type="button"
                      value={country.id}
                      name={country.name}
                      onClick={(e) => handleCheck(e)}
                    >
                      {country.name}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        
        <div className={s.paisMini}>
          {
            input.pais.length > 0 &&
            input.pais.map((c) => {
              return (
                <div className={s.paisMini} key={c}>
                  <p>{c}</p>
                  <button
                    type="button"
                    name={c}
                    onClick={(e) => handleDelete(e)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          
        </div>
        <div className={s.DificultadContainer}>
          <label htmlFor="duration">Duracion</label>
          <select name="duration" id="duration" onChange={handleInputCheckNumber} >
            <option value="1">1 Dia</option>
            <option value="2">2 Dias</option>
            <option value="3">3 Dias</option>
            <option value="4">4 Dias</option>
            <option value="5">5 Dias</option>
            <option value="6">6 Dias</option>
            <option value="7">7 Dias</option>
          </select>
          <label htmlFor="difficulty">Dificultad</label>
          <select name="difficulty" id="difficulty" onChange={(e) => handleInputCheckNumber(e)}>
          
            <option value="1">Muy Facil</option>
            <option value="2">Facil</option>
            <option value="3">Normal</option>
            <option value="4">Dificil</option>
            <option value="5">Muy Dificil</option>
          </select>
          <label htmlFor="season">Temporada</label>
          <select name="season" id="season" onChange={(e) => handleInputCheckNumber(e)}>
          
            <option value="invierno">Invierno</option>
            <option value="verano">Verano</option>
            <option value="primavera">Primavera</option>
            <option value="fall">Otoño</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to={'/ruta-principal'}>
      <button>Regresar</button>
      </Link>
    </div>
  );
};
export default ActividadT;
