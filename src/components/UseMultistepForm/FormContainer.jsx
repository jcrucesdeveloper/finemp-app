import { Typography } from '@material-tailwind/react';
import UnifiedForm from './UnifiedForm';

const FormContainer = () => {
  return (
    <>
      <div className="form-container">
        <div className="title-and-form">
          {/* <Typography variant="h3" color="white" style={{marginBottom: "10px"}}> Registro</Typography> */}
          <UnifiedForm />
        </div>
      </div>
    </>
  );
};
export default FormContainer;
