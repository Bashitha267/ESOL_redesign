import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
  </StrictMode>
);
