import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
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
      <Link to={"/ruta-principal"}>
    <div key={country.id}>{country.id}</div>
      </Link>
  )
}

export default DetallePais