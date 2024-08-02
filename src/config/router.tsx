import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AtendenteLayout } from "../layouts";
import { Home, Pets, Tutores, Consultas, Veterinarios, PetsPrincipal, PetsCadastro, SistemaAtendente } from '../pages';

export const router = createBrowserRouter(
    [
      {
        path: '/', element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
        ], 
      },
      {
        path: '/atendente',
        element: <AtendenteLayout />,
        children: [
          { index: true, element: <SistemaAtendente /> },
          { path: '/atendente/pets', element: <Pets />, children: [
            { index: true, element: <PetsPrincipal /> },
            { path: '/atendente/pets/cadastro', element: <PetsCadastro /> },
          ] },
          { path: '/atendente/tutores', element: <Tutores /> },
          { path: '/atendente/consultas', element: <Consultas /> },
          { path: '/atendente/veterinarios', element: <Veterinarios /> },
        ],
      },
    ],
    {
      basename: import.meta.env.VITE_BASE,
    },
  );