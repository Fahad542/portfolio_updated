import React from 'react'

const My_projects = ({imageSrc, title,description, frameworks}) => {
  return (
    <div className='project-card'>
      <div className='card-content'>
      <img src={imageSrc} alt="Project" className="project-image" />
      
      </div>
      <div className = "project-overlay">
      <h5>{title}</h5>
      <p>{description}</p>
      <a href="#preview" className="preview-button">Preview</a>
      <div className='frameworks'>
      {frameworks.map((framework, index) => (
            <div key={index} className="framework-item">
              <img src={framework.icon} className="project-icon" />
              <p className="icon-title">{framework.title}</p>
            </div>
          ))}
      </div>
      </div>
    </div>
  )
}

export default My_projects