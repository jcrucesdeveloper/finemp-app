import { Select, Option, Typography, Textarea } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
const options = ['Isapre', 'AFP', 'Reclamo', 'Seguro', 'Otros'];

const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="form">
        <Typography variant="h2">Contáctanos</Typography>
        <div style={{ marginTop: '10px' }}>
          <Select variant="static" label="Selecciona motivo de contacto">
            {options.map((option, index) => (
              <Option key={index}>{option}</Option>
            ))}
          </Select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Typography color="blue-gray" className="font-medium">
            Detalles
          </Typography>
          <Textarea label="Describe con detalle lo que necesitas" />
        </div>
        <Button
          size="sm"
          variant="gradient"
          color="pink"
          className="rounded-full"
          style={{ marginTop: '10px' }}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
