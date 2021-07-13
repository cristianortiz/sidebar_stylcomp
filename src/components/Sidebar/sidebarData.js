import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
//import * as IoIcons from "react-icons/io";
export const header = {
  title: "VRIP - Postgrado",
  icon: <FaIcons.FaUniversity />,
};
export const sidebarData = [
  {
    title: "Dashboard",
    to: "/home/dashboard",
    icon: <RiIcons.RiDashboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },

  {
    title: "Programas",
    to: "/home/programas",
    icon: <FaIcons.FaClipboardList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Científicos",
        to: "/programas/cientificos",
      },
      {
        title: "Profesionales",
        to: "/programas/profesionales",
      },
    ],
  },

  {
    title: "Alumnos",
    to: "/home/alumnos",
    icon: <FaIcons.FaUserGraduate />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },
  {
    title: "Becas",
    to: "/home/becas",
    icon: <FaIcons.FaMoneyCheckAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Arancel",
        to: "/becas/arancel",
      },
      {
        title: "Ayuda Económica",
        to: "/becas/economica",
      },
    ],
  },

  {
    title: "Académicos",
    to: "/home/academicos",
    icon: <FaIcons.FaChalkboardTeacher />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },
  {
    title: "Configuración",
    to: "/home/configuracion",
    icon: <RiIcons.RiSettings4Fill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Matricula",
        to: "/configuracion/matricula",
      },
      {
        title: "Usuarios",
        to: "/configuracion/usuarios",
      },
    ],
  },
];
