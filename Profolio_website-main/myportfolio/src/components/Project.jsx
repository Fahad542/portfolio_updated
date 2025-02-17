
import React from 'react'
import My_projects from './My_projects'
import {timelineElements, Projects} from './Data'; 

const Project = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="projects" className='container myproject text-center'>
        <h1 className="oleo do-h" style={{ marginTop: "50px" }}>
        My Projects
      </h1>
      <div className='row projectcontainer'>

      {Projects.map((project) => (
          <div key={project.id} className="col-sm-4 center-col ">
            <My_projects
              imageSrc={project.img} // Ensure this property is added if needed
              title={project.title}
              description={project.description}
              frameworks={project.framework}
            />
          </div>
        ))}
        
      </div>
  
    </div>
  )
});

export default Project