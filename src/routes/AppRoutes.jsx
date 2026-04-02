import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Asistencia from "../pages/Asistencias";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/asistencias" element={<Asistencia />} />
    </Routes>
  );
}

export default AppRoutes;
