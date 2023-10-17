import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { useText } from '../../../hooks/useText';
import { panelEntities } from '../../../router/entities';
import Header from './header';
import layoutStyles from './layout.styles';

export const drawerWidth = 220;

export default function DashboardLayout() {
  const translator = useText();

  const routes = panelEntities.map((route, i) => {
    const Element = () => (
      <>
        <Helmet>
          <title>{`${route.title} | ${translator('portfolio_title')}`}</title>
        </Helmet>

        {route.element}
      </>
    );
    return <Route key={i} path={route.path} Component={Element} />;
  });

  return (
    <>
      <Box sx={layoutStyles.mainContainerBox}>
        <Box component="main" sx={layoutStyles.mainComponentBox}>
          <Header />

          <Box sx={layoutStyles.contentBox}>
            <Routes>{routes}</Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
}
