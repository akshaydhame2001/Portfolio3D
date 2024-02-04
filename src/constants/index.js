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
  ecommerce,
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed an E-Commerce platform with react with payment gateway using stripe.",
      "Worked on open source webGCS application for drones using HTML, CSS, JavaScript, React.js, Node.js to communicate with drones over internet from browser and store flight data in MySQL database.",
      "Implemented Object detection and tracking with YOLOv8 and deployed a TensorRT optimized model on the Nvidia Jetson companion computer for gimbal tracking drone.",
      "Developed SUV and Sedan car classification model ML pipeline using YOLOv3 and MobileNetV2 transfer learning with TensorFlow framework.",
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
