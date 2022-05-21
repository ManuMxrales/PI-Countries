import React from "react";
import s from "./ActivityCard.module.css";
const ActivityCard = ({ id, name, difficulty, duration, season }) => {
  switch (difficulty) {
    case 1:
      difficulty = "Muy Facil";
      break;
    case 2:
      difficulty = "Facil";
      break;
    case 3:
      difficulty = "Normal";
      break;
    case 4:
      difficulty = "Dificil";
      break;
    case 5:
      difficulty = "Muy Dificil";
      break;
    default:
      difficulty = "Sin Dificultad";
      break;
  }
  if(season === "fall"){
    season = "Otoño";
  }
  return (
    <div className={s.ActivityCardContainer} key={id}>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <p>
        <strong>Dificultad: </strong>
        {difficulty}
      </p>
      <p>
        <strong>Duracion: </strong>{duration} Dias
      </p>
      <p>
        <strong>Temporada: </strong>
        {season}
      </p>
    </div>
  );
};

export default ActivityCard;
