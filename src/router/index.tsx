import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../components/layouts/dashboard';

const PanelRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default PanelRouter;
