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
const startTimer = (task)=>{
    return {
        type : START_TIMER,
        payload: {
            taskId: task.id,
            projectId: task.projectId,
            startTime: new Date().getTime(),
        },
}
}
const stopTimer = (taskId , endTime)=>{
    return {
        type : STOP_TIMER,
        payload : {taskId,endTime},
    }
}

export {addProject,addTask,startTimer,stopTimer}