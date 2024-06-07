import { Route, Routes } from "react-router-dom";
import Home from "../../pages/dashboard/views/home";
import NotFound from "../../pages/dashboard/views/NotFound";
import Dashboard from "../../pages/dashboard/Dashboard";
import Card1 from "../../pages/dashboard/views/components/card1";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/valentinesDay" element={<Dashboard />}>
        <Route path="" element={<Home />} />
          <Route path="/valentinesDay/card1" element={<Card1 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
