import { Route, Routes } from "react-router-dom";
import Home from "../../pages/dashboard/views/home";
import NotFound from "../../pages/dashboard/views/NotFound";
import Dashboard from "../../pages/dashboard/Dashboard";
import Card1 from "../../pages/dashboard/views/components/card1";
import Card2 from "../../pages/dashboard/views/components/card2";
import Card3 from "../../pages/dashboard/views/components/card3";
import Card4 from "../../pages/dashboard/views/components/card4";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/valentinesDay" element={<Dashboard />}>
        <Route path="" element={<Home />} />
          <Route path="/valentinesDay/card1" element={<Card1 />} />
          <Route path="/valentinesDay/card2" element={<Card2 />} />
          <Route path="/valentinesDay/card3" element={<Card3 />} />
          <Route path="/valentinesDay/card4" element={<Card4 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
