import placeholder from "../assets/placeholder.png";
import YTClone from '../assets/YTClone.png'
import todoList from '../assets/todo-list(1).png'
import blog from '../assets/blog.png'
import halcyon from '../assets/halcyon-kleos.png'
import weather from '../assets/weather-app.png'
export const navLinks = [
  {
    id: "home",
    title: "Top",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projects = [
  {
    id: 1,
    title: "YouTube Clone",
    description:
      "A clone of YouTube built using Create React App and Material UI along with the YouTube API and hosted on Vercel",
    image: YTClone,
    link: 'https://yt-clone-nu.vercel.app/',
  },
  {
    id: 2,
    title: "Simple ToDo List",
    description:
      "This is a simple todo list app created using react. The app saves information in local storage and includes a color palette picker and dark/light mode toggler.",
    image: todoList,
    link: 'https://todo-react-theme.netlify.app'
  },
  {
    id: 3,
    title: "Personal Blog",
    description:
      "A personal blog created using NextJS and graphCMS.",
    image: blog,
    link: 'https://my-blog-lupercal13.vercel.app/'
  },
  {
    id: 4,
    title: "Customer Website",
    description:
      "This is a website created for a music producer client. They sent the designs and specifications to be fulfilled. Created using Vite and React. Uses the Twitter API to pull most recent posts.",
    image: halcyon,
    link: 'https://halcyon-kleos-v2.vercel.app'
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "This weather app was built using React and takes advantage of the OpenWeather API to get the current weather information. ",
    image: weather,
    link: 'https://react-weather-nine-iota.vercel.app'
  },
//   {
//     id: 6,
//     title: "Sample Project 6",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam fugit adipisci alias sed architecto.",
//     image: placeholder,
//   },
];
