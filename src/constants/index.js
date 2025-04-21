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
  fastapi,
  langchain,
  huggingface,
  docker,
  aws,
  unilactic,
  internshala,
  testimonial,
  socialMedia,
  disney,
  ecommerce,
  dronesim,
  odt,
  vmmtc,
  ragllm,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "AIML Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Pyhton",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
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
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "HuggingFace",
    icon: huggingface,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
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
      "Engineered DeepStream pipelines into object detection models such as YOLOv8, SSD and R-CNN using TensorFlow and PyTorch achieving a 25% reduction in latency on edge devices.",
      "Created an ANPR system using YOLOv8 for vehicle detection and classification across 3,000+ make-model-type classes with color classifier, incorporating PaddleOCR for license plate recognition.",
      "Constructed vision-language model using OWL-ViT and CLIP with hierarchical object detection capabilities.",
      "Fine-tuned models for real-world safety and security applications, including PPE compliance detection in workplaces and drone identification for surveillance in restricted areas, enhancing accuracy by 45% for small object detection using sliced inference.",
      "Automated the dataset labeling process for computer vision projects using models like Grounding DINO, significantly reducing manual effort and enhancing data preparation efficiency by 70%.",
      "Designed ensemble learning pipelines by combining models with varying speed and accuracy and applying advanced feature extraction techniques with OpenCV, resulting in a 30% boost in overall performance and a 25% improvement in prediction precision for computer vision tasks.",
      "Utilized AWS SageMaker for model training and deployment, improving inference efficiency by 30% and automating ML workflows for scalable deployment solutions.",
      "Integrated a WebRTC-based drone live streaming solution with FastAPI, achieving less than 2s latency for real-time monitoring and analytics integration with GCS applications.",
      "Contributed to an open-source web-based Ground Control Station (GCS) application for drones with React.js, and Node.js. This innovative application enabled remote drone operation via the internet and facilitated the storage of flight data in a MySQL database.",
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
    name: "RAG LLM Chatbot",
    description:
      "Developed an LLM-powered chatbot using LangChain and LLaMA3, implementing RAG with ChromaDB for efficient vector storage and retrieval. Implemented a robust backend architecture utilizing FastAPI, enhancing real-time data interactions by 30% and integrating SQLite for structured metadata storage. Ensured seamless deployment through Docker, enabling scalable, containerized application management.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "rag",
        color: "green-text-gradient",
      },
      {
        name: "genai",
        color: "pink-text-gradient",
      },
    ],
    image: ragllm,
    source_code_link: "https://github.com/akshaydhame2001/LLM-RAG-Chatbot",
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
  {
    name: "Vehicle Make-Model-Type-Color Recognition",
    description:
      "This project is a computer vision system for vehicle make, model, type, and color recognition. It combines a YOLO vehicle detector, a Make-Model MobileNetV3 classifier, and a YOLOv8-based color classifier to identify details of over 3,000 vehicle models, including popular Indian brands like Tata, Mahindra, and Maruti Suzuki. The system is optimized for real-world accuracy and scalability.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: vmmtc,
    source_code_link:
      "https://www.linkedin.com/posts/akshaydhame_ai-deeplearning-generativeai-activity-7264480286233501696-wpLx",
  },
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
];

export { services, technologies, experiences, testimonials, projects };
