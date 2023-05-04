import {
  HiOutlineHome,
  HiOutlineCpuChip,
  HiOutlineQuestionMarkCircle,
  HiOutlineEnvelope,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

export const MenuData = [
  {
    title: "Inicio",
    path: "/",
    icon: <HiOutlineHome />,
  },
  {
    title: "Productos",
    path: "/productos",
    icon: <HiOutlineCpuChip />,
  },
  {
    title: "Armá tu pc",
    path: "/armatupc",
    icon: <HiOutlineComputerDesktop />,
  },
  {
    title: "Contacto",
    path: "/contacto",
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Ayuda",
    path: "/ayuda",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
