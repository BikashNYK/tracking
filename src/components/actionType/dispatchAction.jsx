import { ADD_PROJECT, ADD_TASK, START_TIMER, STOP_TIMER } from "./actionType";

const addProject = (project)=>{
    return {
        type : ADD_PROJECT,
        payload : project
    }
}
const addTask = (task)=>{
    return {
        type : ADD_TASK,
        payload : task,
    }
}

const stopTimer = (taskId)=>{
    return {
        type : STOP_TIMER,
        payload : {taskId},
    }
}

export {addProject,addTask,stopTimer}