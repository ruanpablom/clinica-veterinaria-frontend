import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../layout';
import { Home, Pets, Tutores, Consultas, Veterinarios } from '../pages';

export const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'pets', element: <Pets /> },
          { path: 'tutores', element: <Tutores /> },
          { path: 'consultas', element: <Consultas /> },
          { path: 'veterinarios', element: <Veterinarios /> },
        ],
      },
    ],
    {
      basename: import.meta.env.VITE_BASE,
    },
  );