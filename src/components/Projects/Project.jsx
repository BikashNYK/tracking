import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../actionType/dispatchAction';

const Project = () => {
    const [projectName, setProjectName] = useState('')
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projectReducer.projects)
    // console.log(projects);
    
    const handleProjectSubmit = (e) => {
        e.preventDefault();
        dispatch(addProject({name : projectName}))
        setProjectName('')
    }

  return (
    <div>
          <div>
              <h3>Projects</h3>
              <ul>
              {projects?.map((project)=>{
                return (
                     <li>{project.name}</li>
                )
              })}
              </ul>
                 
              

              <form onSubmit={handleProjectSubmit}>
                  <input type="text" placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                  <button type='submit'>Add Project</button>
              </form>
          </div>
    </div>
  )
}

export default Project