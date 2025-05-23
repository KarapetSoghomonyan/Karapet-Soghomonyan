
import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/fresh-Burger.png';
import Hipsster from '../../assets/hipsster.png';
import FitLift from '../../assets/FitLift.png';
import ProjectCard from '../../common/ProjectCard';
import exchange from '../../assets/exchange.png';


function Projects() {
  return ( 
   <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        
       <ProjectCard src={exchange} link="https://karapetsoghomonyan.github.io/reactquery_app/"
         h3="Exchange"
         p="Exchange Currencly"
       />

       <ProjectCard src={freshBurger} link="https://github.com/KarapetSoghomonyan/Git-lesson"
         h3="Fresh Burgerr"
         p="Hamburger Resturant"
         />

         <ProjectCard src={Hipsster} link="https://github.com/KarapetSoghomonyan/Git-lesson"
           h3="Hipsster"
           p="Glasses Shop"
         /> 

        <ProjectCard src={FitLift} link="https://github.com/KarapetSoghomonyan/Git-lesson"
          h3="FitLift"
          p="Fitness App"
        />
    </div>
    </section>
  );
}

export default Projects; 