import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AirplayIcon from "@mui/icons-material/Airplay";

export const ITEM = [
  {
    title: "Home",
    icon: <HomeIcon sx={{mr:1}} />,
    path: "/",
  },
  {
    title: "About",
    icon: <PersonIcon sx={{mr:1}} />,
    path: "/about",
  },
  {
    title: "Projects",
    icon: <AirplayIcon sx={{mr:1}} />,
    path: "/projects",
  },
];

export const LOGO_SKILLS=[
  {
    url:"/public/javascript-3.png",alt:"JavaScript Logo",tooltip:"intermediate"
  },
  {
    url:"/public/html5.png",alt:"HTML5 Logo",tooltip:"avanced "
  },
  {
    url:"/public/css3-emblem-blue-shield-and-white-text-vector.jpg",alt:"CSS Logo",tooltip:"intermediate "
  },
  {
    url:"/public/react-icon-2048x2048-o8k3ymqa.png",alt:"React Logo",tooltip:"intermediate "
  },
  {
    url:"/public/mongoDb.png",alt:"MongoDB Logo",tooltip:"basic "
  },
  {
    url:"/public/node.png",alt:"NodeJs Logo",tooltip:"basic "
  },
  {
    url:"/public/express.png",alt:"express Logo",tooltip:"basic "
  }
]
