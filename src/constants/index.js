import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  python,
  pytorch,
  tensorflow,
  opencv,
  unilactic,
  internshala,
  testimonial,
  socialMedia,
  disney,
  ecommerce,
  dronesim,
  odt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "ML Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Pyhton",
    icon: python,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Opencv",
    icon: opencv,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Jr. Software Engineer",
    company_name: "Unilactic Enterprises",
    icon: unilactic,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed a user-friendly e-commerce platform using React.js, Next.js, and Tailwind CSS, resulting in a seamless shopping experience for customers.",
      "Implemented the Redux toolkit for efficient global state management, ensuring smooth data flow for buyers-sellers and enhanced performance of the e-commerce platform.",
      "Explored authentication system with Node.js and Express.js for the security of users.",
      "Led the development of a professional company website, boosting brand visibility and engagement by 40%.",
      "Contributed to an open-source web-based Ground Control Station (GCS) application for drones with React.js, and Node.js. This innovative application enabled remote drone operation via the internet and facilitated the storage of flight data in a MySQL database.",
      "Deployed computer vision applications with above 90% accuracy using React.js, Python, and TensorFlow, providing solutions for various practical scenarios and enhancing user experiences.",
    ],
  },
  {
    title: "Machine Learning Trainee",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "July 2020 - August 2020",
    points: [
      "Learnt about machine learning life cycle, Data Exploration and Manipulation.",
      "Built ML model by evaluating mterics and selecting right model.",
      "Developed undestanding of ML models and algorithms.",
      "Cleared final assesment with top performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Akshay’s proficiency in JavaScript and React is truly commendable. His ability to write clean, efficient, and reusable code has significantly contributed to our front-end development projects. His understanding of React concepts and application lifecycle is impressive.",
    name: "Ketan Nagpure",
    designation: "Software Engineer",
    company: "Unilactic Enterprises",
    image: testimonial,
  },
  {
    testimonial:
      "Akshay’s frontend skills, particularly in JavaScript and React, are exceptional. His work has significantly improved our application’s user experience.",
    name: "Shubham K",
    designation: "Software Engineer",
    company: "X",
    image: testimonial,
  },
  {
    testimonial:
      "Akshay has a strong grasp of Machine Learning and Computer Vision techniques. His innovative approach to problem-solving using ML algorithms has greatly enhanced our product’s ability to interact with the visual world. His work in object detection and image processing is noteworthy.",
    name: "Jay",
    designation: "UAV Engineer",
    company: "Unilactic Enterprises",
    image: testimonial,
  },
];

const projects = [
  {
    name: "Social Media App",
    description:
      "This project is a modern social app with a stunning UI and native mobile feel, built using React JS, Appwrite, TypeScript, shadcn, Tailwind CSS, and React Query. It features a robust authentication system, an Explore Page, like and save functionality, a detailed post page, a profile page, and a create post page. Users can browse other users’ profiles and posts, and edit their own posts. The UI is responsive with a bottom bar for seamless navigation. The app uses React Query for efficient data fetching and Appwrite for backend services. The project also emphasizes code architecture and reusability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: socialMedia,
    source_code_link: "https://github.com/akshaydhame2001/SocialMediaApp",
  },
  {
    name: "Disney Plus with AI",
    description:
      "This project leverages cutting-edge technologies to deliver a robust, user-friendly web application. Using Shadcn and Tailwind CSS, it features a beautiful and intuitive UI & UX design. Azure Functions power the backend, ensuring scalable and efficient serverless services, while the Azure OpenAI service provides intelligent AI-driven movie suggestions. Loaders enhance user experience by ensuring smooth data fetching. With Next.js 14, the project benefits from efficient data caching and optimized performance. Tailwind CSS enables rapid and responsive UI development, and a dark mode toggle offers personalized user preferences. TypeScript reduces bugs and improves code maintainability through static typing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/akshaydhame2001/Disney-plus",
  },
  {
    name: "E-Commerce App",
    description:
      "This project is a fully responsive, modern, full-stack e-commerce application with payment functionality. It has a modern design with animations, a Content Management System (CMS) for product management, advanced cart functionalities, and complete integration with Stripe for real payments. The application uses advanced React practices, state management with React Context API, and Next.js for server-side rendering and static generation. Stripe is integrated for managing payments, products, shipping rates, and the checkout process. Sanity, a unified content platform, is used for managing the entire content of the app, allowing changes to the store’s homepage and product details instantly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/akshaydhame2001/ecommerce_sanity",
  },
  {
    name: "Drone Simulator",
    description:
      "This project is a comprehensive drone/UAV simulator built for Software-in-the-Loop (SITL) simulation of an object-following application. The frontend is developed using React, TypeScript, and SCSS, providing a modern, responsive, and visually appealing user interface. The backend, running on Ubuntu WSL, utilizes Python along with the DroneKit library and MAVLink protocol to interact with ArduPilot. The frontend and backend communicate seamlessly via WebSocket, enabling real-time data exchange and control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
    ],
    image: dronesim,
    source_code_link: "https://github.com/akshaydhame2001/WebDroneSimulator",
  },
  {
    name: "Object Detection and Tracking",
    description:
      "This project involved implementing object detection and tracking using YOLOv8+DeepSort. A TensorRT optimized model was deployed on the Nvidia Jetson companion computer for gimbal tracking in a drone. The project features include object selection, center object tracking, and class filtering. This implementation enhances the drone’s ability to identify and track objects effectively.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: odt,
    source_code_link:
      "https://github.com/akshaydhame2001/YOLOv8_Tracking_TensorRT",
  },
];

export { services, technologies, experiences, testimonials, projects };
