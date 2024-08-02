import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AtendimentoLayout } from "../layouts";
import { Home, Pets, Consultas, Veterinarios, PetsPrincipal, PetsCadastro, SistemaAtendente, TutoresPrincipal, TutoresCadastro } from '../pages';

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
          { path: 'pets', element: <Pets />, children: [
            { index: true, element: <PetsPrincipal /> },
            { path: 'cadastro', element: <PetsCadastro /> },
          ] },
          { path: 'tutores', children: [
            { index: true, element: <TutoresPrincipal /> },
            { path: 'cadastro', element: <TutoresCadastro /> },
          ] },
          { path: '/atendimento/consultas', element: <Consultas /> },
          { path: '/atendimento/veterinarios', element: <Veterinarios /> },
        ],
      },
    ],
    {
      basename: import.meta.env.VITE_BASE,
    },
  );