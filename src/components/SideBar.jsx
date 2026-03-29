const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <h2>Gym Managment</h2>
        <ul>
          <li>Usuarios</li>
          <li>Asistencias</li>
          <li>Inventario</li>
          <li>Membresias</li>
          <li>Reportes</li>
        </ul>
        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};
export default SideBar;
