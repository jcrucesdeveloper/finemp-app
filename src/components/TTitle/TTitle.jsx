import { Typography } from '@material-tailwind/react';

const TTitle = ({ title, children }) => {
  return (
    <>
      <Typography
        variant="h4"
        color="blue-gray"
        style={{ marginBottom: '10px' }}
      >
        {title}
      </Typography>
      <p style={{ marginBottom: '10px' }}> {children} </p>
    </>
  );
};

export default TTitle;
