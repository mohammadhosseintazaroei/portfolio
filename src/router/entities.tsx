import { type ReactNode } from 'react';
import { Home as HomeIcon } from 'react-feather';

import Home from '../components/home';

interface Entity {
  title: string;
  path: string;
  element: ReactNode;
  icon?: ReactNode;
}

export const panelEntities: Entity[] = [
  {
    title: 'خانه',
    path: '/',
    element: <Home />,
    icon: <HomeIcon size={20} />,
  },
];
