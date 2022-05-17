import React from 'react';
import s from "./Card.module.css";
import { useDispatch, useSelector } from 'react-redux';



const Card = ({name, continents, image, id}) => {
    const state = useSelector(state => state.country.worldCountries);
    const dispatch = useDispatch();

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