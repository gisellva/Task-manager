import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modalprojects from './projects/Modalprojects';
import Modalbotun from './projects/Modalbotun';
import UseAuth from '../auth/UseAuth';
import Button from 'react-bootstrap/Button';


const Projectspages = () => {
  const { add } = UseAuth(); 
  const [proyectsa, setProyectsa] = useState(add);
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = (newProject) => {
    setProyectsa((prevProjects) => [...prevProjects, newProject]);
  };

  const handleShowProject = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    setSelectedProject(null);
  };

  const deleteProject = (title) => {
    setProyectsa((prevProjects) => prevProjects.filter((project) => project.title !== title));
  };

  const updateProject = (updatedProject) => {
    setProyectsa((prevProjects) =>
      prevProjects.map((project) => 
        project.title === updatedProject.title ? updatedProject : project
      )
    );
  };

  return (
    <>
      <h1 className='titleprojects'>Projects</h1>
      <Container className='Containerprojectstext'>
        <h5>Add More Projects</h5>
        <Modalbotun onAddProject={handleAddProject} />
      </Container>
      
      <Container className='containerprojects'>
        {proyectsa.map((project, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <span className="material-symbols-outlined" onClick={() => deleteProject(project.title)}>close</span>
            <Card.Img variant="top" src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-arquitecto-o-ingeniero-dibujar-construcciones-edificios-miniaturas-proyectos_2175-4691.jpg" />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="primary" onClick={() => handleShowProject(project)}>edit description</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>

      {selectedProject && (
        <Modalprojects 
          show={show} 
          onHide={handleCloseModal} 
          project={selectedProject}
          onUpdateProject={updateProject} 
        />
      )}
    </>
  );
};

export default Projectspages;