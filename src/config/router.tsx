import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AtendimentoLayout } from "../layouts";
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
        path: '/atendimento',
        element: <AtendimentoLayout />,
        children: [
          { index: true, element: <SistemaAtendente /> },
          { path: '/atendimento/pets', element: <Pets />, children: [
            { index: true, element: <PetsPrincipal /> },
            { path: '/atendimento/pets/cadastro', element: <PetsCadastro /> },
          ] },
          { path: '/atendimento/tutores', element: <Tutores /> },
          { path: '/atendimento/consultas', element: <Consultas /> },
          { path: '/atendimento/veterinarios', element: <Veterinarios /> },
        ],
      },
    ],
    {
      basename: import.meta.env.VITE_BASE,
    },
  );