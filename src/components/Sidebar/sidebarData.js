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
    to: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },

  {
    title: "Programas",
    to: "/Programas",
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
    to: "/alumnos",
    icon: <FaIcons.FaUserGraduate />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },
  {
    title: "Becas",
    to: "/becas",
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
    to: "/academicos",
    icon: <FaIcons.FaChalkboardTeacher />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },
  {
    title: "Usuarios",
    to: "/usuarios",
    icon: <FaIcons.FaUsersCog />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [],
  },
];
