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
  Textarea
} from '@material-tailwind/react';
import { Form, useForm, Controller } from 'react-hook-form';
import TTitle from '../TTitle/TTitle';

const ComplaintForm = ({ register, errors, getValues, control }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements([
      <>
        <Input
          label="Nombre documento"
          {...register(`nombre_archivo_reclamo_0`, {
            required: `Rellene el nombre del donumento numero 1`
          })}
        />
        <Controller
          name={`archivo_reclamo_0`}
          control={control}
          rules={{ required: `Adjunte documento numero 1` }}
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
        <Input
          label="Nombre documento"
          {...register(`nombre_archivo_reclamo_${elements.length}`, {
            required: `Rellene el nombre del donumento numero ${
              elements.length + 1
            }`
          })}
        />
        <Controller
          name={`archivo_reclamo${elements.length}`}
          control={control}
          rules={{
            required: `Adjunte documento numero  ${elements.length + 1}`
          }}
          render={({ field }) => (
            <Input
              label="Archivo"
              type="file"
              id={`archivo_reclamo_${elements.length}`}
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
      <TTitle
        title="Completa tus datos para Reclamos y Reembolsos"
        children="Agrega los documentos importantes para el procedimiento"
      />
      <div className="mb-4 flex flex-col gap-6">
        <Typography color="blue-gray" className="font-medium">
          Nombre de documento
        </Typography>
        <div className="container m-auto grid grid-cols-2 gap-4">
          {elements.map((element, index) => (
            <div style={{ display: 'contents' }} key={index}>
              {' '}
              {element}{' '}
            </div>
          ))}

          <Button size="md" color="orange" onClick={addElement}>
            Agregue Documento
          </Button>
          <Button
            size="md"
            color="red"
            onClick={deleteElement}
            hidden={true ? elements.length <= 1 : false}
          >
            Eliminar Documento
          </Button>
        </div>
        <div>
          <Typography color="blue-gray" className="font-medium">
            Detalles para aportar
          </Typography>
          <Textarea
            label="Me cobraron injustamente..."
            {...register('detalles')}
          />
        </div>
      </div>
    </>
  );
};

export default ComplaintForm;
