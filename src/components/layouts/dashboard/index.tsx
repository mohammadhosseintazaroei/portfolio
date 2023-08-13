import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { useText } from '../../../hooks/useText';
import { panelEntities } from '../../../router/entities';
import Header from './header';
import layoutStyles from './layout.styles';
import PanelDrawer from './sidebar';
export const drawerWidth = 220;

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const translator = useText();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = useMemo(
    () =>
      panelEntities.map((route, i) => {
        const Element = () => (
          <>
            <Helmet>
              <title>{`${route.title} | ${translator('portfolio_title')}`}</title>
            </Helmet>
            {route.element}
          </>
        );
        return <Route key={i} path={route.path} Component={Element} />;
      }),
    []
  );
  return (
    <>
      <Box sx={layoutStyles.mainContainerBox}>
        <PanelDrawer open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={layoutStyles.mainComponentBox}>
          <Header open={open} />

          <Box sx={layoutStyles.contentBox}>
            <Routes>{routes}</Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
}
