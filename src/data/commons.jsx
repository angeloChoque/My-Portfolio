import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AirplayIcon from "@mui/icons-material/Airplay";

export const ITEM = [
  {
    title: "Home",
    icon: <HomeIcon sx={{ mr: 1 }} />,
    path: "/#home",
  },
  {
    title: "About",
    icon: <PersonIcon sx={{ mr: 1 }} />,
    path: "/#about",
  },
  {
    title: "Projects",
    icon: <AirplayIcon sx={{ mr: 1 }} />,
    path: "/#projects",
  },
];

export const LOGO_SKILLS = [
  {
    url: "/public/javascript-3.png",
    alt: "JavaScript Logo",
    tooltip: "intermediate",
    href: "",
  },
  {
    url: "/public/html5.png",
    alt: "HTML5 Logo",
    tooltip: "avanced ",
  },
  {
    url: "/public/css3-emblem-blue-shield-and-white-text-vector.jpg",
    alt: "CSS Logo",
    tooltip: "intermediate ",
  },
  {
    url: "/public/react-icon-2048x2048-o8k3ymqa.png",
    alt: "React Logo",
    tooltip: "intermediate ",
  },
  {
    url: "/public/mongoDb.png",
    alt: "MongoDB Logo",
    tooltip: "basic ",
  },
  {
    url: "/public/node.png",
    alt: "NodeJs Logo",
    tooltip: "basic ",
  },
  {
    url: "/public/express.png",
    alt: "express Logo",
    tooltip: "basic ",
  },
];

export const PROYECTS = [
  {
    title: "Project Llama",
    color: "#339194",
    url: "/public/project_llama.png",
    description:
      "This project aims to manage employees, events, and tasks. It has a backend that stores the data and performs CRUD operations.",
    libraries:
      "Stack MERN , CSS , HTML, Javascript , DND-KIT, RESEND, Big Calendar, MUI , React-Router 6",
    href_1: "https://github.com/angeloChoque/Project-Llama",
    href_2: "",
  },
  {
    title: "Project Plaza Vea",
    color: "rgb(146, 43, 33)",
    url: "/public/page_plaza_vea.png",
    description:
      " This is a landing page project I created with a partner where we implemented React, MUI, and CSS. Its functionality is to mimic the official Plaza Vea page in Peru. ",
    libraries: "CSS , HTML, Javascript, React , MUI",
    href_1: "https://github.com/Nyxzaf/Proyecto-compartido-web",
    href_2: "https://nyxzaf.github.io/Proyecto-compartido-web/",
  },
  {
    title: "Online Store Project",
    color: "#333333",
    url: "/public/pagina_html_css.png",
    description:
      "This is a landing page for a shoe store that was made with CSS3, HTML5, and Bootstrap. The objective is to learn how to implement HTML5 and CSS3 structure, as well as the Bootstrap library.",
    libraries: "CSS , HTML , Bootstrap 5",
    href_1: "https://github.com/angeloChoque/proyect-html-css",
    href_2: "https://angelochoque.github.io/proyect-html-css/",
  },
];
