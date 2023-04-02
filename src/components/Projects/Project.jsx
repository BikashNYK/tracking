import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../actionType/dispatchAction';

const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [typeStart, setTypeStart] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);
  // console.log(projects);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject({ name: projectName }));
    setProjectName('');
    setTypeStart(false)
  };

  const handleProjectName = (e) => {
    if (e.target.value.length === 0) {
      setTypeStart(false);
      setProjectName('');
    } else {
      setTypeStart(true);
      setProjectName(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <h3>Projects</h3>
        <ul>
          {projects?.map((project) => {
            return (
              <li>{project.name}</li>
            );
          })}
        </ul>



        <form onSubmit={handleProjectSubmit}>
          <input type="text" placeholder='Write Project Name' value={projectName} onChange={handleProjectName} />
          {typeStart &&
            <button type='submit'>Add Project</button>
          }
        </form>
      </div>
    </div>
  );
};

export default Project;