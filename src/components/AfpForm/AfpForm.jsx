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

// Beta vesion
const options = ['Capital', 'Habitat', 'Provida', 'Modelo', 'Planvital'];
const AfpForm = ({ register, errors, control }) => {
  return (
    <>
      <TTitle title="Completa tus datos para AFP" />
      <div className="mb-4 flex flex-col gap-6">
        <Controller
          name="afpCliente"
          control={control}
          defaultValue=""
          rules={{ required: 'Seleccione su AFP' }}
          render={({ field }) => (
            <Select variant="outlined" label="Selecciona tu AFP" {...field}>
              {options.map((option, index) => (
                <Option value={option} key={index}>
                  {option}
                </Option>
              ))}
            </Select>
          )}
        />
        <Controller
          name="certificado-antecedentes"
          control={control}
          rules={{ required: 'Adjunte su certificado de antecedentes' }}
          render={({ field }) => (
            <Input
              label="Certificado de antecedentes"
              type="file"
              id="certificado-antecedentes"
              accept="application/pdf"
              {...field}
            />
          )}
        />
        <Controller
          name="cotizaciones"
          control={control}
          rules={{ required: 'Adjunte sus cotizaciones históricas' }}
          render={({ field }) => (
            <Input
              label="Cotizaciones Históricas"
              type="file"
              id="cotizaciones-historicas"
              accept="application/pdf"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};

export default AfpForm;
