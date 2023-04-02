import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, stopTimer } from '../actionType/dispatchAction';

const Tasks = () => {
  const [taskName, setTaskName] = useState('');
  const [taskId, setTaskId] = useState('');

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);
  const tasks = useSelector((state) => state.projectReducer.tasks);
  const timer = useSelector((state) => state.projectReducer.timer);
  const [addTaskBtn, setAddTaskBtn] = useState(false);

  const handleTaskInput = (e) => {
    if (e.target.value.length === 0) {
      setAddTaskBtn(false);
      setTaskName('');
    } else {
      setTaskName(e.target.value);
      setAddTaskBtn(true);
    }
  };

  const handleTaskId = (e) => {
    setTaskId(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const task = {
      id: tasks.length + 1,
      name: taskName,
      projectId: taskId,
      startTime: now,
      stopTime: null
    };
    dispatch(addTask(task));
    setTaskName('');
    setTaskId('');
  };

  const handleTaskStop = (id) => {
    dispatch(stopTimer(id));
  };

  return (
    <div>
      <h3>Tasks</h3>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={handleTaskInput}
        />
        <select value={taskId} onChange={handleTaskId}>
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        {addTaskBtn &&
          <button type="submit">Add Task</button>
        }
      </form>
      <table style={{ width: '90%', textAlign: 'center', marginTop: '30px' }}>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Starting Time</th>
            <th>Ending Time</th>
            <th>Total Time Spent</th>
            <th>Stopper</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => {
            const taskTimer = task.startTime;
            if (!taskTimer) {
              return null;
            }
            const startTime = new Date(task.startTime);
            const stopTime = new Date(task.stopTime);
            const totalSpentTime = stopTime - startTime;
            console.log(totalSpentTime);

            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{`${startTime.toLocaleTimeString()}`}</td>
                <td>{task.stopTime === null ? "" : `${stopTime?.toLocaleTimeString()}`}</td>
                <td></td>
                <td>
                  <button onClick={() => handleTaskStop(task.id)}>Stop</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
