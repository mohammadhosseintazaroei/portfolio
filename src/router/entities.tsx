import { type ReactNode } from 'react';
import Home from '../components/home';
import { GitHubPage } from '../components/github';
import { HomeMenuCard } from '../components/menu-card/menu-home-card';

interface Entity {
  title?: string;
  path: string;
  element: ReactNode;
  icon?: ReactNode;
  menuCard?: ReactNode;
}

export const panelEntities: Entity[] = [
  {
    path: '/',
    element: <Home />,
    menuCard: <HomeMenuCard />,
  },
  {
    title: 'Projects',
    path: '/projects',
    element: <Home />,
    menuCard: <HomeMenuCard />,
  },
  {
    title: 'GitHub',
    path: '/github',
    element: <GitHubPage />,
    menuCard: <HomeMenuCard />,
  },
  {
    title: 'Socials',
    path: '/socials',
    element: <Home />,
    menuCard: <HomeMenuCard />,
  },
  {
    title: 'Me',
    path: '/me',
    element: <Home />,
  },
];
