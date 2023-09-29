import { Button } from '@material-tailwind/react';
import axios from 'axios';
import RegisterForm from '../RegisterForm/RegisterForm';
import SelectServicesForm from '../SelectServicesForm/SelectServicesForm';
import UseMultistepForm from './UseMultistepForm';
import IsapreForm from '../IsapreForm/IsapreForm';
import InsuranceForm from '../InsuranceForm/InsuranceForm';
import AfpForm from '../AfpForm/AfpForm';
import { Form, useForm, Controller } from 'react-hook-form';
import React, { useContext, useState, useEffect } from 'react';
import ComplaintForm from '../ComplaintForm/ComplaintForm';
import { useNavigate } from 'react-router-dom';

const UnifiedForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    control,
    trigger
  } = useForm();

  const [pages, setPages] = useState([
    <RegisterForm register={register} errors={errors} />,
    <SelectServicesForm register={register} errors={errors} />
  ]);

  const handleRemove = (name) => {
    // Eliminar página {name} de pages
    setPages((prevState) => {
      const updatedPages = prevState.filter((item) => item.type.name !== name);
      return updatedPages;
    });
  };

  useEffect(() => {
    watch(); // El form no funciona sin watch
    if (getValues('isapre')) {
      setPages((prevState) => {
        const newPages = [...prevState];
        newPages.push(
          <IsapreForm
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
            watch={watch}
          />
        );
        return newPages;
      });
    } else if (!getValues('isapre')) {
      handleRemove('IsapreForm');
    }
  }, [getValues('isapre')]);

  useEffect(() => {
    if (getValues('afp')) {
      setPages((prevState) => {
        const newPages = [...prevState];
        newPages.push(
          <AfpForm
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
          />
        );
        return newPages;
      });
    } else if (!getValues('afp')) {
      handleRemove('AfpForm');
    }
  }, [getValues('afp')]);

  useEffect(() => {
    if (getValues('seguros')) {
      setPages((prevState) => {
        const newPages = [...prevState];
        newPages.push(
          <InsuranceForm
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
          />
        );
        return newPages;
      });
    } else if (!getValues('seguros')) {
      handleRemove('InsuranceForm');
    }
  }, [getValues('seguros')]);

  useEffect(() => {
    if (getValues('reclamos')) {
      setPages((prevState) => {
        const newPages = [...prevState];
        newPages.push(
          <ComplaintForm
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
          />
        );
        return newPages;
      });
    } else if (!getValues('reclamos')) {
      handleRemove('ComplaintForm');
    }
  }, [getValues('reclamos')]);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    UseMultistepForm(pages);

  const onSubmit = async (data) => {
    console.log(data);
    console.log('SE HACE EL ENVIO DE INFO AL BACK');
    console.log(process.env);
    const isValid = await trigger();
    if (isValid) {
      // Actualmente el endpoint de abajo recibe todo los datos y en el back se deberian procesar
      axios
        .post(`${process.env.REACT_APP_REQ_ENDPOINT}`, getValues(), {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(function (response) {
          console.log(response);
          navigate('/home');
        })
        .catch(function (error) {
          console.log(error);
        });

      // al finalizar se va a la ruta /inicio
    }
  };

  const stepHandler = async () => {
    console.log(process.env);
    const isValid = await trigger();
    // Caso para crear el usuario
    if (isFirstStep) {
      if (isValid) {
        axios
          .post(`${process.env.REACT_APP_REGISTER_ENDPOINT}`, {
            // aca se deben obtener los valores con getValues()
            username: getValues('nombres'),
            email: `${getValues('apellidos')}pruebas@gmail.com`,
            password: '12345678Aa!',
            password2: '12345678Aa!'
          })
          .then(function (response) {
            console.log(response);
            axios
              .post(`${process.env.REACT_APP_LOGIN_ENDPOINT}`, {
                username: getValues('nombres'),
                password: '12345678Aa!'
              })
              .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.access);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
    // casos siguientes, en los que solo se debe pasar a la siguiente ventana.
    console.log(errors);

    if (isValid) {
      // Continuar al siguiente paso
      next();
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
            {currentStepIndex + 1} / {steps.length}{' '}
          </div>
          {step}
          <div className="error-summary">
            <ul style={{ fontSize: '14px' }}>
              {Object.keys(errors).map((fieldName, index) => (
                <li key={index}>{errors[fieldName].message}</li>
              ))}
            </ul>
          </div>
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              gap: '.5rem',
              justifyContent: 'flex-end'
            }}
          >
            {!isFirstStep && (
              <Button
                type="button"
                onClick={back}
                size="sm"
                color="gray"
                className="rounded-full"
              >
                {' '}
                Atrás{' '}
              </Button>
            )}
            {isLastStep && !isFirstStep && steps.length > 2 && (
              <Button
                type="submit"
                size="sm"
                variant="gradient"
                color="deep-purple"
                className="rounded-full"
              >
                Finalizar
              </Button>
            )}
            {(!isLastStep || isFirstStep) && (
              <Button
                size="sm"
                variant="gradient"
                color="deep-purple"
                className="rounded-full"
                onClick={async () => {
                  await stepHandler();
                }}
              >
                Siguiente
              </Button>
            )}
          </div>
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </form>
      </div>
    </>
  );
};

export default UnifiedForm;
