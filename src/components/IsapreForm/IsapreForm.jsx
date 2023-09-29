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
import { Form, useForm, Controller } from 'react-hook-form';
import TTitle from '../TTitle/TTitle';

const options = [
  'Banmedica',
  'Colmena Golden Cross',
  'Consalud',
  'Cruz Blanca',
  'Cruz del Norte',
  'Esencial',
  'Isalud',
  'Nueva Masvida',
  'Vida Tres'
];

const IsapreForm = ({ register, errors, getValues, control, watch }) => {
  const [option, setOption] = useState(false);

  // Se bugea si colocas "Tengo acceso a mi plan", te devuelves y
  // avanzas de nuevo (se dan vuelta los valores)
  const [plan, setPlan] = useState(false);
  const handlePlanChange = () => {
    setPlan((prevState) => !prevState);
  };

  return (
    <>
      <TTitle title="Completa los datos de tu Isapre" />
      <div className="mb-4 flex flex-col gap-6">
        <Typography color="blue-gray" className="font-medium">
          ¿A cuál Isapres perteneces?
        </Typography>
        {/* <div> {option ? "tiene acceso plan" : "no tiene acceso"} </div> */}
        <Controller
          name="isapreCliente"
          control={control}
          defaultValue=""
          rules={{ required: 'Seleccione una Isapre' }}
          render={({ field }) => (
            <Select label="Selecciona una opción" {...field}>
              {options.map((option, index) => (
                <Option value={option} key={index}>
                  {option}
                </Option>
              ))}
            </Select>
          )}
        />

        <Typography color="blue-gray" className="font-medium">
          ¿Tienes acceso a tu plan de Isapre?
        </Typography>

        <Switch
          label="Tengo acceso a mi plan"
          color="pink"
          {...register('perteneceIsapre', {
            onChange: (e) => handlePlanChange()
          })}
        />
        {plan ? (
          <>
            <div className="container m-auto grid grid-cols-2 gap-4">
              <Input
                label="Ingresa el código de tu plan"
                {...register('codigoIsapre', {
                  required: 'Ingresa el código del plan'
                })}
              />

              <Tooltip
                placement="right"
                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                content={
                  <div className="w-80">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal opacity-80"
                    >
                      El código lo puedes encontrar en la esquina superior
                      derecha o izquierda del documento.
                    </Typography>
                  </div>
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 cursor-pointer text-blue-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Tooltip>
            </div>
            <Controller
              name="documentoIsapre"
              control={control}
              rules={{ required: 'Adjunta documento de tu plan de Isapre' }}
              render={({ field }) => (
                <Input
                  label="Adjunte documento"
                  id="plan"
                  type="file"
                  accept="application/pdf"
                  {...field}
                />
              )}
            />{' '}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default IsapreForm;
