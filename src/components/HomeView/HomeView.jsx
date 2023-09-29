import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  Input,
  Select,
  Option,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Label,
  ButtonGroup,
  Button,
  Tooltip,
  Switch
} from '@material-tailwind/react';
import axios from 'axios';

const HomeView = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_GET_DATA}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(function (response) {
        console.log(response);
        setDataUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      {console.log(dataUser)}
      <div className="solicitudes">
        {dataUser.map((element, key) => {
          return (
            <div className="solicitud" style={{ textTransform: 'capitalize' }}>
              <Typography variant="lead"> Categoría: {element.tipo}</Typography>
              <p> Solicitud n°{key + 1} </p>
              {/* <p>{element.detalle_solicitud} </p> */}
              <p>Estado: {element.estado} </p>
              <p>Fecha de creación: {element.fecha_creacion.slice(0, 10)} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default HomeView;
