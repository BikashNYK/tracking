import { ADD_PROJECT, ADD_TASK, STOP_TIMER } from "../actionType/actionType";

const initialState = {
    projects : [],
    tasks : [],
}

export const projectReducer = (state = initialState , action)=>{
    const {type,payload} = action
    switch (type){
        case ADD_PROJECT : 
        return {
            ...state,
            projects : [...state.projects,payload],
        }
        case ADD_TASK : 
        return {
            ...state,
            tasks: [...state.tasks,payload],
        }
        case STOP_TIMER:
            const currentTask = state.tasks.findIndex((task) => task.id === payload.taskId);
            if (currentTask === -1){
                return
            }
            const task = state.tasks[currentTask]
            if(task.stopTime !== null){
                alert('Task Already Stopped')
                    return
            }
            const now = new Date()
            const updatedTask = {
                ...task,
                stopTime : now
            }
            const updatedTasks = [...state.tasks]
            updatedTasks[currentTask] = updatedTask
            return {
                ...state,
                tasks: updatedTasks
            };
        default : 
        return state
    }
}