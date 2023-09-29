import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Label
} from '@material-tailwind/react';
import { appendErrors, Form, useForm } from 'react-hook-form';
import TTitle from '../TTitle/TTitle';

const RegisterForm = ({ register, errors }) => {
  return (
    <>
      <TTitle title="Datos Personales" />
      <>
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Nombres"
            {...register('nombres', {
              required: {
                value: true,
                message: 'Ingresa nombres'
              },
              maxLength: 40,
              pattern: /^[a-z ,.'-]+$/i
            })}
          />
          {/* <span>{errors.nombres && errors.nombres.message}</span> */}
          <Input
            size="lg"
            label="Apellidos"
            {...register('apellidos', {
              required: {
                value: true,
                message: 'Ingresa apellidos'
              },
              maxLength: 40,
              pattern: /^[a-z ,.'-]+$/i
            })}
          />
          <Input
            size="lg"
            label="Número de teléfono"
            {...register('telefono', {
              required: {
                value: true,
                message: 'Ingresa telefono'
              },
              maxLength: 40,
              pattern: /^[\d+\- ]+$/
            })}
          />
          <Input
            size="lg"
            label="Ingresa tu RUT (11222333-K)"
            {...register('rut', {
              required: {
                value: true,
                message: 'Ingresa rut'
              },
              maxLength: 40,
              pattern: /^\d{7,8}-[0-9kK]$/
            })}
          />
        </div>
      </>
    </>
  );
};

export default RegisterForm;
