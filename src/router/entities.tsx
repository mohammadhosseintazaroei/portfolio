import { type ReactNode } from 'react';
import Home from '../components/home';
import { GitHubPage } from '../components/github';

interface Entity {
  title: string;
  path: string;
  element: ReactNode;
  icon?: ReactNode;
}

export const panelEntities: Entity[] = [
  {
    title: 'Projects',
    path: '/projects',
    element: <Home />,
  },
  {
    title: 'GitHub',
    path: '/github',
    element: <GitHubPage />,
  },
  {
    title: 'Socials',
    path: '/socials',
    element: <Home />,
  },
  {
    title: 'Me',
    path: '/me',
    element: <Home />,
  },
];
