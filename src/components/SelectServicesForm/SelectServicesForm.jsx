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
import { useForm } from 'react-hook-form';
import TTitle from '../TTitle/TTitle';

const SelectServicesForm = ({ register, errors }) => {
  return (
    <>
      <TTitle title="¿Que estás interesado en consultar?" />
      <div className="mb-4 flex flex-col gap-6">
        <List>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-isapres"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="vertical-list-isapres"
                  color="pink"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: 'p-0'
                  }}
                  {...register('isapre')}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Isapres
              </Typography>
            </label>
          </ListItem>

          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-afp"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  color="pink"
                  id="vertical-list-afp"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: 'p-0'
                  }}
                  {...register('afp')}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                AFP
              </Typography>
            </label>
          </ListItem>

          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-seguros"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  color="pink"
                  id="vertical-list-seguros"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: 'p-0'
                  }}
                  {...register('seguros')}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Seguros
              </Typography>
            </label>
          </ListItem>

          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-reclamos"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  color="pink"
                  id="vertical-list-reclamos"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: 'p-0'
                  }}
                  {...register('reclamos')}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Reclamos
              </Typography>
            </label>
          </ListItem>
        </List>
      </div>
      {/* <input type="submit" /> */}
    </>
  );
};

export default SelectServicesForm;
