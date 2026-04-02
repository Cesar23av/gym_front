import React from "react";
import { Link, useNavigate } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <h2>Gym Managment</h2>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/asistencias">Asistencias</Link>
          </li>
          <li>
            <Link to="/inventario">Inventario</Link>
          </li>
          <li>
            <Link to="/membresias">Membresias</Link>
          </li>
          <li>
            <Link to="/reportes">Reportes</Link>
          </li>
        </ul>
        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};
export default SideBar;
/*
          <li>Usuarios</li>
          <li>Asistencias</li>
          <li>Inventario</li>
          <li>Membresias</li>
          <li>Reportes</li>
*/
