import React from "react";
import s from "./Card.module.css";



const Card = ({name, continents, image, id}) => {

  return (
    <div className={s.card} key={id}>
        <div className={s.cardimg}>
        <img src={image} alt={name} />
        </div>
        <div className={s.cardinfo}>
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p>{continents}</p>
        </div>
    </div>
  )
}
export default Card;