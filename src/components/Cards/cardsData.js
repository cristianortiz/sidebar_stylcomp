import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

const iconInformatica = <AiIcons.AiFillCode />;
const iconPlanetarias = <GoIcons.GoTelescope />;
const iconEstadistica = <AiIcons.AiOutlineFunction />;
const iconMetalurgia = <GiIcons.GiMeltingMetal />;
const iconMetSalud = <FaIcons.FaNotesMedical />;
const iconPsicologia = <RiIcons.RiPsychotherapyFill />;

export const cardsData = [
  {
    numero: 39,
    titulo: "Matriculados 2021",
    icon: <FaIcons.FaUsers />,
  },
  {
    numero: 27,
    titulo: "Alumnos Becados 2021",
    icon: <FaIcons.FaMoneyCheckAlt />,
  },
  {
    numero: 8,
    titulo: "Programas Vigentes 2021",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    numero: 120,
    titulo: "Graduados desde 2013",
    icon: <FaIcons.FaGraduationCap />,
  },
];
//for academicos pages data load
export const academicosData = [
  {
    programa: "Doctorado en Astronomia y Cs Planetarias",
    icon: iconPlanetarias,
    academicos: [
      {
        nombre: "Lorenzo Morelli",
        perfil: "Coodinador",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "José Fernández",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Lauri Haikala",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Mauro Barbieri",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Christopher Haines",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Ivan Lacerna",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Mario Soto",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Giovanni Leone",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Rómulo Oses",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
    ],
  },
  {
    programa: "Magister en Estadística",
    icon: iconEstadistica,
    academicos: [
      {
        nombre: "Yolanda Gómez",
        perfil: "Coodinadora",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Diego Gallardo",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Hugo Salinas",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Diego Nascimento",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "José Belinchon",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },

      {
        nombre: "Juan Astorga",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "David Elal",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Milton Cortés",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
    ],
  },
  {
    programa: "Magister en Informática y Cs. de la Computación",
    icon: iconInformatica,
    academicos: [
      {
        nombre: "John Castro",
        perfil: "Coodinadorr",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Dante Carrizo",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Vladimir Riffo",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Wilson Castillo",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Héctor Cornide",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
    ],
  },
  {
    programa: "Magister en Ingeniería en Metalurgia",
    icon: iconMetalurgia,
    academicos: [
      {
        nombre: "Alexis Guzmán",
        perfil: "Coodinadorr",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Danny Guzmán",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Jonathan Castillo",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Rossana Sepúlveda",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Luis Valderrama",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Osvaldo Pavéz",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Francisco Torres",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Udyabhaskar Rednam",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
    ],
  },
  {
    programa: "Magister en Metodologías de Investigación Cualitativas en Salud",
    icon: iconMetSalud,
    academicos: [
      {
        nombre: "Cory Duarte",
        perfil: "Coodinadora",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Taelí Gómez",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Maggie Campillay",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Ana Calle",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Mauricio Lorca",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Carmen Burgos",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "María González",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
    ],
  },
  {
    programa: "Magister en en Investigación Psicológica",
    icon: iconPsicologia,

    academicos: [
      {
        nombre: "Elva Morales",
        perfil: "Coodinadora",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Ricardo Jorquera",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Doeuglas Véliz",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "David Cuadra",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Alejandra Vega",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Pablo Brizuela",
        perfil: "Profesor de Claustro",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Nicolás Díaz",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
      {
        nombre: "Adolfo González",
        perfil: "Profesor Colaborador",
        icon: <FaIcons.FaUser />,
      },
    ],
  },
];

export const ProgramasCardsData = [
  {
    nombre: "Doctorado en Astronomía y Cs. Planetarias",
    icon: iconPlanetarias,
    coordinador: "Lorenzo Morelli",
    orientacion: "Académica",
    matriculados: 19,
    becados: 19,
    graduados: 0,
  },
  {
    nombre: "Magister en Estadística",
    icon: iconEstadistica,
    coordinador: "Yolanda Gómez",
    orientacion: "Académica",
    matriculados: 4,
    becados: 3,
    graduados: 1,
  },
  {
    nombre: "Magister en Informática y Cs. de la Computación",
    icon: iconInformatica,
    coordinador: "John Castro",
    orientacion: "Académica",
    duracion: 4,
    matriculados: 4,
    becados: 4,
    graduados: 15,
  },
  {
    nombre: "Magister en Ingeniería en Metalurgia",
    icon: iconMetalurgia,
    coordinador: "Alexis Guzmán",
    orientacion: "Académica",
    duracion: 4,
    matriculados: 11,
    becados: 10,
    graduados: 5,
  },
  {
    nombre: "Magister en Metodologías de Investigación Cualitativas en Salud",
    icon: iconMetSalud,
    coordinador: "Cory Duarte",
    orientacion: "Académica",
    duracion: 2,
    matriculados: 8,
    becados: 8,
    graduados: 5,
  },
  {
    nombre: "Magister en Investigación Psicológica",
    icon: iconPsicologia,
    coordinador: "Elva Morales",
    orientacion: "Académica",
    duracion: 4,
    matriculados: 8,
    becados: 8,
    graduados: 5,
  },
];

export const BecasCardsData = [
  {
    nombre: "Beca de Excención de Arancel",
    icon: <FaIcons.FaMoneyCheckAlt />,
    periodo: "2021",
    becados: 22,
    total_anual: 25000000,
  },
  {
    nombre: "Beca de Ayuda Económica",
    icon: <FaIcons.FaMoneyCheckAlt />,
    periodo: "2021",
    becados: 18,
    total_anual: 85000000,
  },
];
