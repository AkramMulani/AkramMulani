// src/iconMap.js
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaJava, FaPython, FaDatabase, FaGitAlt, FaGithub, FaLinux, FaAndroid, FaTools, FaCloud } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiMysql, SiOracle, SiPostman, SiSpringboot, SiFlask, SiIntellijidea, SiPycharm, SiJavascript } from 'react-icons/si';
// import { SiVisualstudiocode } from 'react-icons/si';

export const iconMap = {
  'React JS': <FaReact />,
  'Angular JS': <FaAngular />,
  'HTML5 / CSS3': <FaHtml5 />,
  'JavaScript (ES6+)': <SiJavascript />,
  'Bootstrap': <FaBootstrap />,
  'Node.js / Express.js': <FaNodeJs />,
  'Java (Spring Boot)': <SiSpringboot />,
  'Python (Flask)': <SiFlask />,
  'REST API Development': <FaCloud />,
  'Postgre SQL': <SiPostgresql />,
  'SQL/MySQL': <SiMysql />,
  'Oracle': <SiOracle />,
  'MongoDB': <SiMongodb />,
  'Git / GitHub / GitLab': <FaGitAlt />,
  'Postman': <SiPostman />,
  // 'VS Code': <SiVisualstudiocode />,
  'Intellij Idea': <SiIntellijidea />,
  'PyCharm': <SiPycharm />,
  'Linux CLI': <FaLinux />,
  'Android App Development (Java)': <FaAndroid />,
  'Java Swing Desktop Applications': <FaJava />,
};
