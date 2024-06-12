import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AirplayIcon from "@mui/icons-material/Airplay";
import EmailIcon from '@mui/icons-material/Email';
export const ITEM = [
  {
    title: "header.home",
    icon: <HomeIcon sx={{ mr: 1 }} />,
    path: "/My-Portfolio/#home",
  },
  {
    title: "header.about",
    icon: <PersonIcon sx={{ mr: 1 }} />,
    path: "/My-Portfolio/#about",
  },
  {
    title: "header.projects",
    icon: <AirplayIcon sx={{ mr: 1 }} />,
    path: "/My-Portfolio/#projects",
  },
  {
    title: "header.contact",
    icon: <EmailIcon sx={{ mr: 1 }} />,
    path: "/My-Portfolio/#contact",
  },
];

export const LOGO_SKILLS = [
  {
    url: "/My-Portfolio/javascript-3.png",
    alt: "JavaScript Logo",
    tooltip: "intermediate",
  },
  {
    url: "/My-Portfolio/html5.png",
    alt: "HTML5 Logo",
    tooltip: "advanced",
  },
  {
    url: "/My-Portfolio/css3-emblem-blue-shield-and-white-text-vector.jpg",
    alt: "CSS Logo",
    tooltip: "intermediate",
  },
  {
    url: "/My-Portfolio/react-icon-2048x2048-o8k3ymqa.png",
    alt: "React Logo",
    tooltip: "intermediate",
  },
  {
    url: "/My-Portfolio/mongoDb.png",
    alt: "MongoDB Logo",
    tooltip: "basic",
  },
  {
    url: "/My-Portfolio/node.png",
    alt: "NodeJs Logo",
    tooltip: "basic",
  },
  {
    url: "/My-Portfolio/express.png",
    alt: "Express Logo",
    tooltip: "basic",
  },
  {
    url: "/My-Portfolio/git.png",
    alt: "Git Logo",
    tooltip: "intermediate",
  },
  {
    url: "/My-Portfolio/github.png",
    alt: "GitHub Logo",
    tooltip: "intermediate",
  },
];

export const PROYECTS = [
  {
    title: "projects.project_llama.title",
    color: "#339194",
    url: "/My-Portfolio/project_llama.png",
    description: "projects.project_llama.description",
    libraries: "projects.project_llama.libraries",
    href_1: "https://github.com/angeloChoque/Project-Llama",
    href_2: "https://angelochoque.github.io/Project-Llama",
  },
  {
    title: "projects.project_plaza_vea.title",
    color: "rgb(146, 43, 33)",
    url: "/My-Portfolio/page_plaza_vea.png",
    description: "projects.project_plaza_vea.description",
    libraries: "projects.project_plaza_vea.libraries",
    href_1: "https://github.com/Nyxzaf/Proyecto-compartido-web",
    href_2: "https://nyxzaf.github.io/Proyecto-compartido-web/",
  },
  {
    title: "projects.online_store_project.title",
    color: "#333333",
    url: "/My-Portfolio/pagina_html_css.png",
    description: "projects.online_store_project.description",
    libraries: "projects.online_store_project.libraries",
    href_1: "https://github.com/angeloChoque/proyect-html-css",
    href_2: "https://angelochoque.github.io/proyect-html-css/",
  },
];
