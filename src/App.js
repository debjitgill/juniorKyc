import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ROUTES_NAME } from "./routers/routeConstants";
import Home from "./views/home";
import MobileLogin from "./components/mobileLogin";
import Login from "./components/login";
import { BankDetails } from "./components/bankDetails";
import BrokeragePlan from "./components/brokeragePlan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES_NAME.MOBILE_LOGIN} element={<MobileLogin />} />
          <Route path={ROUTES_NAME.LOGIN} element={<Login />} />
          <Route path={ROUTES_NAME.BANK_DETAILS} element={<BankDetails />} />
          <Route path={ROUTES_NAME.BROKERAGEPLAN} element={<BrokeragePlan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
