import Home from "../Pages/Home";
import LoginForm from "../Pages/LoginForm";
import CreateUser from '../Pages/CreateUser'
import Settings from '../Pages/Settings'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
