import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, startTimer, stopTimer } from '../actionType/dispatchAction';

const Tasks = () => {
    const [taskName, setTaskName] = useState('')
    const [taskId, setTaskId] = useState('')
    // console.log(taskId);
    
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projectReducer.projects)
    const tasks = useSelector((state) => state.projectReducer.tasks);
    const timer = useSelector((state) => state.projectReducer.timer);
    
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Date.now(),
            name : taskName,
            projectId : taskId
        }
        dispatch(addTask(task))
        // task.id, task.projectId, new Date().getTime()
        dispatch(startTimer(task))
        setTaskName('')
        setTaskId('')
    }

    const handleTaskStop = (id) =>{
        dispatch(stopTimer(id, new Date().getTime()));
    }

    const startTimeInMillis = timer?.time?.startTime;
    // console.log(startTimeInMillis)
    const today = new Date(startTimeInMillis)
    // console.log(today.getHours());
    const hour = today.getHours()
    const minute = today.getMinutes()
    const sec = today.getSeconds()
    
  return (
    <div>
          <h3>Tasks</h3>
          <ul>
{tasks?.map((task) => {
  return (
    <li key={task.id}>
      {task.name} -{' '}
      {timer && timer.time && task.id
              ? `${hour}: ${minute} : ${sec} sec`
        : ''}
          {timer && timer.time && (
        <button onClick={() => handleTaskStop(task.id)}>Stop</button>
      )}
    </li>
  );
})}

            
          </ul>

          <form onSubmit={handleTaskSubmit}>
              <input type="text" placeholder='Task Name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
              <select value={taskId} onChange={(e) => setTaskId(e.target.value)}>
                  <option value="">Select Project</option>
                  {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                          {project.name}
                      </option>
                  ))}
              </select>
              <button type="submit">Add Task</button>
          </form>
    </div>
  )
}

export default Tasks
