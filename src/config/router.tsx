import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../layout';
import { Home } from '../pages/Home';

export const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
    //       { path: 'professores', element: <Coordenador /> },
    //       { path: 'disciplinas', element: <Coordenador /> },
    //       { path: 'alunos', element: <Coordenador /> },
    //       { path: 'turmas', element: <Coordenador /> },
        ],
      },
    ],
    {
      basename: import.meta.env.VITE_BASE,
    },
  );