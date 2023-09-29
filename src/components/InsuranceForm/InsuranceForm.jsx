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
  Tooltip
} from '@material-tailwind/react';
import { Form, useForm, Controller } from 'react-hook-form';
import TTitle from '../TTitle/TTitle';

const options = [
  'Seguro de Vida',
  'Seguro de Vida con Ahorro (SVA)',
  'Seguro de Vida con Ahorro Previsional Voluntario (APV o APVC)',
  'Rentas Vitalicias Previsionales',
  'Seguro de Salud',
  'Seguro de Accidentes Personales',
  'Seguro Obligatorio de Accidentes Personales (SOAP)',
  'Seguro de Incendio asociado a créditos hipotecarios y sus adicionales',
  'Seguro de Incendio para bienes inmuebles',
  'Seguro de Desgravamen por murte e invalidez asociado a c´reditos hipotecarios',
  'Seguro para vehículos motorizados',
  'Seguro contra Robo',
  'Seguro de Cesantía',
  'Seguro de Escolaridad',
  'Seguro de Responsabilidad Civil',
  'Seguro Obligatorio de Accidentes Personales causados por vehículos motorizados con matrícula extranjera'
];

const InsuranceForm = ({ register, errors, control }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements([
      <>
        <Controller
          name="tipo_seguro_0"
          control={control}
          defaultValue=""
          rules={{ required: 'Selecciona el tipo de tu seguro numero 1' }}
          render={({ field }) => (
            <Select
              variant="outlined"
              label="Selecciona tipo de seguro"
              {...field}
            >
              {options.map((option, index) => (
                <Option value={option} key={index}>
                  {option}
                </Option>
              ))}
            </Select>
          )}
        />
        <Controller
          name={`archivo_seguro_0`}
          control={control}
          rules={{ required: 'Adjunta tu seguro numero 1' }}
          render={({ field }) => (
            <Input
              label="Archivo"
              type="file"
              id={`archivo_reclamo_0`}
              accept="application/pdf"
              {...field}
            />
          )}
        />
        {/* <Input label="Archivo" type="file" /> */}
      </>
    ]);
  }, []);

  const addElement = () => {
    const newElement = (
      <>
        <Controller
          name={`tipo_seguro_${elements.length}`} //Hay que cambiar el nombre
          control={control}
          defaultValue=""
          rules={{
            required: `Selecciona el tipo de tu seguro numero ${
              elements.length + 1
            }`
          }}
          render={({ field }) => (
            <Select
              variant="outlined"
              label="Selecciona tipo de seguro"
              {...field}
            >
              {options.map((option, index) => (
                <Option value={option} key={index}>
                  {option}
                </Option>
              ))}
            </Select>
          )}
        />
        <Controller
          name={`archivo_seguro_${elements.length}`}
          control={control}
          rules={{
            required: `Adjunta tu seguro numero ${elements.length + 1}`
          }}
          render={({ field }) => (
            <Input
              label="Archivo"
              type="file"
              id={`archivo_seguro_${elements.length}`}
              accept="application/pdf"
              {...field}
            />
          )}
        />

        {/* <Input label="Archivo" type="file" /> */}
      </>
    );
    setElements([...elements, newElement]);
  };

  const deleteElement = () => {
    if (elements.length > 0) {
      // Crea una copia del array actual de elementos excluyendo el último elemento
      const newElements = elements.slice(0, -1);
      setElements(newElements);
    }
  };

  return (
    <>
      {/* <Typography variant="h6" color="blue-gray">Adjunta las pólizas de seguro</Typography> */}
      <TTitle
        title="Completa tus datos para Seguros"
        children="Adjunta las pólizas de seguro"
      />
      <div className="mb-4 flex flex-col gap-6">
        <div className="container m-auto grid grid-cols-2 gap-4">
          {elements.map((element, index) => (
            <div style={{ display: 'contents' }} key={index}>
              {' '}
              {element}{' '}
            </div>
          ))}
          <Button size="md" color="orange" onClick={addElement}>
            Agregue Poliza
          </Button>
          <Button
            size="md"
            color="red"
            onClick={deleteElement}
            hidden={true ? elements.length <= 1 : false}
          >
            Eliminar Poliza
          </Button>
        </div>
      </div>
    </>
  );
};
export default InsuranceForm;
