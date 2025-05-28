import styles from './ProjectsStyles.module.css';
import kanban from '../../assets/kanban.png';
import weather from '../../assets/weather.png';
import exchange from '../../assets/exchange.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={kanban}
          link="https://karapetsoghomonyan.github.io/My-Kanban-Pro/"
          h3="Productivity App"
          p="Task & Workflow Manager"
        />
         <ProjectCard
          src={exchange}
          link="https://karapetsoghomonyan.github.io/reactquery_app/"
          h3="Finance App"
          p="Live Rates & Converter"
        />
        <ProjectCard
          src={weather}
          link="https://karapetsoghomonyan.github.io/weatherapp/"
          h3="Forecast Tool"
          p="Real-time Weather Updates"
        />
      </div>
    </section>
  );
}

export default Projects;