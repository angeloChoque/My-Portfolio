import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AirplayIcon from "@mui/icons-material/Airplay";

export const ITEM = [
  {
    title: "header.home",
    icon: <HomeIcon sx={{ mr: 1 }} />,
    path: "/#home",
  },
  {
    title: "header.about",
    icon: <PersonIcon sx={{ mr: 1 }} />,
    path: "/#about",
  },
  {
    title: "header.projects",
    icon: <AirplayIcon sx={{ mr: 1 }} />,
    path: "/#projects",
  },
];

export const LOGO_SKILLS = [
  {
    url: "/public/javascript-3.png",
    alt: "JavaScript Logo",
    tooltip: "intermediate",
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
    title: "projects.project_llama.title",
    color: "#339194",
    url: "/project_llama.png",
    description:"projects.project_llama.description",
    libraries: "projects.project_llama.libraries",
    href_1: "https://github.com/angeloChoque/Project-Llama",
    href_2: "",
  },
  {
    title: "projects.project_llama.title",
    color: "rgb(146, 43, 33)",
    url: "/page_plaza_vea.png",
    description:"projects.project_plaza_vea.description",
    libraries: "projects.project_plaza_vea.libraries",
    href_1: "https://github.com/Nyxzaf/Proyecto-compartido-web",
    href_2: "https://nyxzaf.github.io/Proyecto-compartido-web/",
  },
  {
    title: "projects.project_llama.title",
    color: "#333333",
    url: "/pagina_html_css.png",
    description:"projects.online_store_project.description",
    libraries: "projects.online_store_project.libraries",
    href_1: "https://github.com/angeloChoque/proyect-html-css",
    href_2: "https://angelochoque.github.io/proyect-html-css/",
  },
];
