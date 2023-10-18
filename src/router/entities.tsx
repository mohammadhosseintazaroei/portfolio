import { type ReactNode } from 'react';
import Home from '../components/home';
import { GitHubPage } from '../components/github';
import { HomeCard } from '../components/menu-card/home';
import { GitCard } from '../components/menu-card/github/github-card';
import { SocialsCard } from '../components/menu-card/socials/socials-card';

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
    menuCard: <HomeCard />,
  },
  {
    title: 'Projects',
    path: '/projects',
    element: <Home />,
    menuCard: <HomeCard />,
  },
  {
    title: 'GitHub',
    path: '/github',
    element: <GitHubPage />,
    menuCard: <GitCard />,
  },
  {
    title: 'Socials',
    path: '/socials',
    element: <Home />,
    menuCard: <SocialsCard />,
  },
  {
    title: 'Me',
    path: '/me',
    element: <Home />,
  },
];
