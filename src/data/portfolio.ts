import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saujanya Srivastava",
    title: "AI Engineer",
    subtitle: "I build software using a wide range of cool AI tools",
    bio: "This portfolio of mine illustrates the fields I am proficient in, with a proper background of the knowledge I possess in order to provide services related to artificial intelligence",
    location: "Kolkata, West Bengal",
    email: "saujanya.310104@gmail.com",
    phone: "+91 7439485003",
    profileImage: "https://i.postimg.cc/N9zRGLJV/profile.jpg"
  },
  socialLinks: [
    { name: "GitHub", url: "https://github.com/icequeen3104", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/saujanyasrivastava", icon: "Linkedin" },
    { name: "Email", url: "mailto:saujanya.310104@gmail.com", icon: "Mail" }
  ],
  skills: [
    { name: "React.js", level: 70, category: "frontend" },
    { name: "HTML/CSS", level: 60, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },
    
    { name: "Python", level: 90, category: "backend" },
    { name: "Pandas", level: 90, category: "backend" },
    { name: "Matplotlib", level: 80, category: "backend" },
    { name: "OpenCV", level: 70, category: "backend" },
    { name: "YOLOv8", level: 70, category: "backend" },
    { name: "scikit-Learn", level: 70, category: "backend" },
    { name: "Seaborn", level: 80, category: "backend" },
    
    { name: "GitHub", level: 90, category: "tools" },
    { name: "Jupyter Notebook", level: 70, category: "tools" },
    { name: "AWS", level: 60, category: "tools" },
    { name: "VS Code", level: 80, category: "tools" },
    
    { name: "Excel", level: 85, category: "design" },
    { name: "Canva", level: 80, category: "design" },
    { name: "Python Turtle", level: 80, category: "design" }
  ],
  projects: [
    {
      id: "opencv-model",
      title: "OpenCV Object Detection Model",
      description: "This model can be deployed in automated systems for object recognition, calibration, detection and many more",
      longDescription: "This model enables object detection, facial recognition, obstacle dodging and many more in the automated systems like a robot, self-driving cars, security and surveillance, etc. It makes everyday life very easy by helping in all the work related to recognition. It just needs best datasets to be trained with in order to maintain its generalization on unseen datasets",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "YOLOv8", "Pandas", "OpenCV", "NumPy", "Matplotlib", "scikit-Learn"],
      githubUrl: "https://github.com/icequeen3104/neelKanth/tree/main/opencv",
      featured: true
    },
    {
      id: "data-analysis",
      title: "Data Analysis Project",
      description: "This project analyzes the given datasheet in the excel or any other format.",
      longDescription: "It analyzes the datasets given and based on that plots a graph of the frequency of their occurrence, this helps in market basket analysis, weather forecast, seasons, customer details and many more.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-Learn"],
      githubUrl: "https://github.com/icequeen3104/neelKanth/tree/main/data%20analysis",
      featured: true
    }
  ],
  experience: [
    {
      id: "wipro-intern",
      company: "Wipro",
      position: "Data Science Engineer Intern",
      duration: "1 month",
      description: "I contributed in a data analysis project under a team of professionals and learnt proper communication skills",
      technologies: ["Python", "YOLOv8", "Pandas", "OpenCV", "NumPy", "Matplotlib", "scikit-Learn"],
      current: false
    }
  ]
};