import Index from "views/Index.js";
import Profile from "views/Components/Profile.js";
import Maps from "views/Components/Maps.js";
import Register from "views/Components/Register.js";
import Login from "views/Components/Login.js";
import TablesEmployee from "views/Components/TablesEmployee";
import Icons from "views/Components/Icons.js";
import TableProjects from "views/Components/TableProjects";

var routes = [
  // {
  //   path: "/index",
  //   name: "Inicio",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // },
  {
    path: "/empleados",
    name: "Empleados",
    icon: "ni ni-bullet-list-67 text-red",
    component: TablesEmployee,
    layout: "/admin",
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    icon: "ni ni-bullet-list-67 text-red",
    component: TableProjects,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "Mi Perfil",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Cerrar Sesión",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // },
];
export default routes;
