import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadingData } from "../actions";


const DetallePais = () => {
  const { id } = useParams();
  console.log(id);
  const [datareceived, setDataReceived] = useState({});
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadingData(true));
    fetch(`http://localhost:3001/countries/:${id}`)
         .then((res) => res.json())
         .then((data) => {
            dispatch(loadingData(false));
            console.log(data);
            return setDataReceived(data);
         });
  }, [dispatch, id]);

  return (
      <Link to={"/ruta-principal"}>
    <div key={datareceived.id}>{datareceived.id}</div>
      </Link>
  )
}

export default DetallePais