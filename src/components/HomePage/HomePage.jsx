import { Typography } from '@material-tailwind/react';
import HomeView from '../HomeView/HomeView';

const HomePage = () => {
  return (
    <>
      <div className="form-container">
        <div className="home-container">
          <h1 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
            {' '}
            Mis Solicitudes{' '}
          </h1>
          <HomeView />
        </div>
      </div>
    </>
  );
};

export default HomePage;
